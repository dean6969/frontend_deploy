<template>
  <div class="transportPage">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>Transport Suggestion</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="titleArea">
      <h2>Do you pay attention to the way you travel?</h2>
    </div>
    <br />
    <h3>how transport effect carbon emission?</h3>
    <p>
      Transportation is one of the largest sources of carbon emissions globally,
      accounting for around one-third of all carbon emissions. The
      transportation sector includes vehicles like cars, trucks, buses, trains,
      airplanes, ships, and boats.
    </p>
    <p>
      We offer a navigation feature that you can select your departure and
      destination, view your route, and compare the carbon emissions of each
      mode of transport.
    </p>
    <!-- <img src="../assets/travelChart.png" alt="" /> -->
    <!-- <h3>low carbon transport suggestion</h3> -->
    <el-row class="suggestionArea">
      <!-- <el-col :span="12"
        ><div class="grid-content bg-purple">
          <p>
            1.Walk or Cycle: Walking or cycling for short trips is an excellent
            way to reduce carbon emissions. These modes of transportation
            produce zero emissions and are also good for your health.
          </p>
          <p>
            2.Public Transportation: Taking public transportation like buses,
            trains, and trams is a more sustainable option than driving a car.
            Public transportation uses less fuel per passenger, which means
            lower carbon emissions per person.
          </p>
          <p>
            3.Electric Vehicles: Electric vehicles (EVs) are becoming more
            affordable and accessible. They produce zero emissions when driven
            and can be charged using renewable energy sources like solar power.
          </p>
          <p>
            4.Carpooling: Carpooling with colleagues or friends is an easy way
            to reduce the number of cars on the road, which can reduce carbon
            emissions. Carpooling can also save money on fuel and parking.
          </p>
        </div></el-col
      > -->
      <!-- <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <el-tag type="info" size="medium" effect="light"
            >Carbon footprint of travel calculator</el-tag
          >
          <div class="selector">
            <label>Way of travel:</label
            ><el-select v-model="value" placeholder="select travel way">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <br />
            <label>Year:</label>
            <el-input
              v-model="input"
              placeholder="Please input years"
            ></el-input>
            <br />

            <el-button type="info" round>submit</el-button>
          </div>
        </div></el-col
      > -->
    </el-row>

    <div class="arcgis-map">
      <div id="sidebar" ref="sidebar"></div>
      <div class="gutter"></div>
      <main>
        <div id="viewDiv" ref="viewDiv"></div>
      </main>
    </div>
    <br />

    <el-button
      type="info"
      class="getKM"
      @click="compare"
      :disabled="oriDistance"
      >Compare</el-button
    >
    <div class="barchart">
      <!-- <h3>barchart</h3> -->
    </div>

    <el-dialog title="tips" :visible.sync="dialogVisible" width="50%">
      <span>Please select your departure and destination.</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false">OK</el-button>
      </span>
    </el-dialog>
    <h3>low carbon transport suggestion</h3>

    <el-col :span="24"
      ><div class="grid-content bg-purple">
        <p>
          1.Walk or Cycle: Walking or cycling for short trips is an excellent
          way to reduce carbon emissions. These modes of transportation produce
          zero emissions and are also good for your health.
        </p>
        <p>
          2.Public Transportation: Taking public transportation like buses,
          trains, and trams is a more sustainable option than driving a car.
          Public transportation uses less fuel per passenger, which means lower
          carbon emissions per person.
        </p>
        <p>
          3.Electric Vehicles: Electric vehicles (EVs) are becoming more
          affordable and accessible. They produce zero emissions when driven and
          can be charged using renewable energy sources like solar power.
        </p>
        <p>
          4.Carpooling: Carpooling with colleagues or friends is an easy way to
          reduce the number of cars on the road, which can reduce carbon
          emissions. Carpooling can also save money on fuel and parking.
        </p>
      </div></el-col
    >
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import MapView from "@arcgis/core/views/MapView";
import Directions from "@arcgis/core/widgets/Directions";
import Map from "@arcgis/core/Map";
import Split from "split-grid";
import config from "@arcgis/core/config";
import * as echarts from "echarts";
export default {
  data() {
    return {
      originData: [],
      co2: [],
      transport: [],
      oriDistance: false,
      distance: 0,
      dialogVisible: false,
    };
  },
  created() {
    this.fetchData();
    this.deleteCSS();
  },
  methods: {
    async fetchData() {
      this.oriDistance = true
      try {
        const response = await this.$http.get(
          "https://backendtp234.onrender.com/get_fulldata2"
        );
        this.data = response.data;
        this.data = this.data.sort((a, b) => a.co2 - b.co2);
        console.log(this.data);
        this.originData = this.data;
        this.oriDistance = false
      } catch (error) {
        console.log(error);
      }
    },
    deleteCSS() {
      // const domDelete = document.querySelector('.esri-directions__save-section')
      // domDelete.style.display = "none !important"
      // console.log(domDelete)
      // const delete2 = document.querySelector('.esri-directions__toolbar-section')
      // delete2.style.display = "none !important"
    },

    fetchDistance(distance) {
      try {
        const dataArr = this.originData;
        const newdataArr = [];
        const newdataArrTransport = [];
        for (let i = 0; i < this.originData.length; i++) {
          const tempCo2 = dataArr[i].co2 * distance;
          // const tempTransport = dataArr[i].entity;
          newdataArr.push(tempCo2.toFixed(2));
          newdataArrTransport.push(dataArr[i].entity);
        }
        this.co2 = newdataArr;
        this.transport = newdataArrTransport;
        //create dom
        var existingDiv = document.getElementById("newDiv");
        if (existingDiv) {
          console.log("hello");
          const bar = document.querySelector(".barchart");
          bar.removeChild(existingDiv);

          var newDiv = document.createElement("div");

          newDiv.id = "newDiv";
          newDiv.style.padding = "10px";
          newDiv.style.width = "1000px";
          newDiv.style.height = "600px";

          var myChart = echarts.init(newDiv);

          // 指定图表的配置项和数据
          var option = {
            title: {
              text: "Carbon Emission of Transportation Modes",
            },
            tooltip: {},
            legend: {
              data: ["Co2(g/km)"],
            },
            xAxis: {
              data: this.transport,
              axisLabel: {
                rotate: 30, 
              },
            },
            yAxis: {},
            series: [
              {
                name: "Co2(g/km)",
                type: "bar",
                data: this.co2,
              },
            ],
          };

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);

          bar.appendChild(newDiv);
        } else {
          var newDiv = document.createElement("div");

          // 设置div元素的内容和样式
          newDiv.id = "newDiv";
          newDiv.style.padding = "10px";
          newDiv.style.width = "1000px";
          newDiv.style.height = "600px";

          const bar = document.querySelector(".barchart");

          var myChart = echarts.init(newDiv);

          // 指定图表的配置项和数据
          var option = {
            title: {
              text: "Carbon Emission of Transportation Modes",
            },
            tooltip: {},
            legend: {
              data: ["Co2(g/km)"],
            },
            xAxis: {
              data: this.transport,
              axisLabel: {
                rotate: 30, 
              },
            },
            yAxis: {},
            series: [
              {
                name: "Co2(g/km)",
                type: "bar",
                data: this.co2,
              },
            ],
          };

          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);

          bar.appendChild(newDiv);
        }
      } catch (error) {
        console.log(error);
      }
    },
    compare() {
      const km = document.querySelector(".esri-directions__other-costs-total");
      if (km) {
        const KmContent = km.innerText;
        const newKm = KmContent.slice(0, -3);
        this.distance = parseFloat(newKm);
        console.log(this.distance);
        this.fetchDistance(this.distance);
      } else {
        this.dialogVisible = true;
        console.log("no dom");
      }
    },
  },

  setup() {
    onMounted(() => {
      config.apiKey =
        "AAPK6a8387d7be0f47fc989969b60805428a3jp-miOiFvSx4geA4PpmPUnR1hfPKDj1r6B2zuPMGKb1fD3LmsDDE24p0kRz9Be0";
      const routeUrl =
        "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";

      Split({
        columnGutters: [
          {
            track: 1,
            element: document.querySelector(".gutter"),
          },
        ],
      });

      var map = new Map({
        basemap: "streets",
      });

      var viewOptions = {
        container: "viewDiv",
        map: map,
        center: [-101.17, 35],
        zoom: 4,
      };

      // 2D:
      var view = new MapView(viewOptions);

      // 3D:
      // var view = new SceneView(viewOptions);

      var directionsWidget = new Directions({
        view: view,
        container: document.getElementById("sidebar"),
        // Point the URL to a valid route service that uses an
        // ArcGIS Online hosted service proxy instead of the default service
        // code from https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=widgets-directions
        routeServiceUrl: routeUrl,
      });

      directionsWidget.on("directions-tracked", function (evt) {
        var route = evt.result.routeResults[0].route;
        var distance = route.summary.totalLength;
        console.log("Route distance: " + distance + " meters");

        this.distance = distance;
      });
    });
  },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-top: 20px;
  margin-left: 20px;
}
.esri-directions__save-section,
/deep/ .esri-directions__save-section {
  display: none !important;
}

.transportPage {
  width: 65%;
  margin: 1% auto;
}
.transportPage .titleArea {
  background-image: url("../assets/surveyBG.jpg");
  width: 100%;
  height: 100px;
  text-align: center;
  justify-content: center;
}

.transportPage .titleArea:hover h2 {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}
.transportPage h2 {
  color: white;
  margin: 0 auto;
  height: 100px;
  line-height: 100px;
  transition: transform 0.5s ease;
}
h3 {
  font-family: "Open Sans", sans-serif;
  width: 90%;
  text-align: center;
  margin: 20px auto;
}
p {
  font-family: "Open Sans", sans-serif;
  text-align: justify;
}
.transportPage img {
  width: 85%;
  margin: 0 auto;
}
.el-tag {
  margin: 10px 37%;
  font-size: 15px;
}
.selector {
  font-family: "Open Sans", sans-serif;
  margin-left: 50px;
}
.selector .el-select {
  margin: 30px;
}
.el-input {
  width: 50%;
  margin: 30px;
}
.el-button {
  margin-left: 70%;
}
.arcgis-map {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 5px 1fr;
}

.gutter {
  grid-column: 2;
  background-image: url("data:image/svg+xml,%3Csvg%20version=%221.1%22%20id=%22Layer_1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20x=%220px%22%20y=%220px%22%20viewBox=%220%200%206%2020%22%20style=%22enable-background:new%200%200%206%2020;%22%20xml:space=%22preserve%22%3E%3Cstyle%20type=%22text/css%22%3E.st0%7Bfill:%23D4D4D4;%7D%3C/style%3E%3Cg%3E%3Crect%20x=%220.5%22%20y=%220.5%22%20class=%22st0%22%20width=%221%22%20height=%2219%22/%3E%3Cpath%20d=%22M1,1v18V1%20M2,0H0v20h2V0L2,0z%22/%3E%3C/g%3E%3Cg%3E%3Crect%20x=%224.5%22%20y=%220.5%22%20class=%22st0%22%20width=%221%22%20height=%2219%22/%3E%3Cpath%20d=%22M5,1v18V1%20M6,0H4v20h2V0L6,0z%22/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  width: 7px;
  margin-right: 2px;
  cursor: col-resize;
}

main {
  grid-column: 3;
}
.getKM {
  margin-left: 60px;
}

/* Tell the map control to take 100% of its container: */
#viewDiv {
  height: 100%;
  width: 100%;
}
</style>
