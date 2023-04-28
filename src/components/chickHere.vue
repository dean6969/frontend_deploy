<template>
  <!-- <iframe src="../../public/haha.html"></iframe> -->
  <div>
    <h2>Gasoline Car Carbon CO2 Emission Facts</h2>
    <div class="selectBox" id="vuejscrudapp">
      <div class="selector">
        <select id="updateid">
          <option value="">Select brand</option>
          <option v-for="(item, i) in records" :key="item.id">
            {{ item.Make }}
          </option>
        </select>
      </div>

      <div
        class="chart-container"
        style="position: relative;
          height: 60vh; width: 100vw"
      >
        <canvas id="myChart" chart-click="ctrl.onClick"></canvas>
      </div>
      <div class="text-area">
        <h2>Low-carbon transport advice</h2>
        <p>
          1.Walk or ride a bike. For short trips, walking or biking is the most
          environmentally friendly and healthy option.
        </p>
        <p>
          2.Use public transportation. Choosing public transportation such as
          buses, trains, and subways can reduce carbon emissions from driving
          alone.
        </p>
        <p>
          3.Carpool or use bike-sharing. Carpooling with friends or colleagues,
          or renting bike-sharing services can reduce personal carbon emissions.
        </p>
        <p>
          4.Drive low-emission vehicles. Choose low-emission or zero-emission
          vehicles such as hybrid, electric, or hydrogen fuel cell vehicles.
        </p>
      </div>
      <div class="pieChart">
        <!-- <label for="">Pie chart</label> -->
        <h2>Gasoline Car Carbon CO2 Emission Pie Chart</h2>
        <div id="chartdiv"></div>
      </div>
    </div>
    <!-- <iframe
    src='../../public/haha/haha.html'
    name="obj"
    frameborder="0"
    allowtransparency="yes"
    scrolling="no"
    style="width:100%; height: 100%;"
  ></iframe> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      records: [],
      message: '',
      records1: []
    }
  },
  methods: {
   async  getRecords () {
     await  axios({
        url: 'https://backendtp234.onrender.com/mysql1',
        method: 'get'
      })
        .then(res => {
          this.records = res.data
          this.file = JSON.parse(JSON.stringify(this.records))
          labels = []
          data = []
          for (i in this.file) {
            labels.push(this.file[i]['Make'])
            data.push(this.file[i]['CO2'])
          }
          const ctx = document.getElementById('myChart')
          backgroundColor = []
          for (i in labels) {
            backgroundColor.push('rgba(54,162,235,0.4)')
          }
          myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Number of Co2 per km',
                  data: data,
                  borderWidth: 1,
                  fill: false,
                  hoverBackgroundColor: 'rgba(54,162,235,0.6)',
                  hoverBorderColor: 'blue',
                  backgroundColor: backgroundColor,
                  datalabels: {
                    color: '#333333',
                    anchor: 'end',
                    align: 'top',
                    rotation: -45
                  }
                }
              ]
            },
            plugins: [ChartDataLabels],
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          })
          const box = document.getElementById('updateid')
          box.onchange = function () {
            for (i in labels) {
              myChart.data.datasets[0].backgroundColor[i] =
                'rgba(54,162,235,0.4)'
            }

            // console.log(box.value);

            count = 0
            for (i in labels) {
              if (labels[i] === box.value) {
                count = count + parseInt(i)
              }
            }

            // console.log(count);

            myChart.data.datasets[0].backgroundColor[count] =
              'rgba(90,162,235,1.3)'
            myChart.update()

            this.message = box.value

            axios({
              url: `https://backendtp234.onrender.com/search?message=${this.message}`,
              method: 'get'
            }).then(res => {
              this.records1 = res.data

              console.log(this.records1)

              parents = []
              childs = []
              data_sun = []
              for (i in this.records1) {
                parents.push(this.records1[i]['Model'])
                childs.push(this.records1[i]['Vehicle Class'])
                data_sun.push(this.records1[i]['CO2'])
              }

              result_sun = _.chain(this.records1)
                // Group the elements of Array based on `color` property
                .groupBy('Vehicle Class')
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => ({ Model: key, children: value }))
                .value()

              am4core.ready(function () {
                // Themes begin
                am4core.useTheme(am4themes_animated)
                // Themes end

                // create chart
                var chart = am4core.create(
                  'chartdiv',
                  am4plugins_sunburst.Sunburst
                )
                chart.padding(0, 0, 0, 0)
                chart.radius = am4core.percent(98)

                chart.data = result_sun

                chart.colors.step = 2
                chart.fontSize = 13
                chart.innerRadius = am4core.percent(20)

                // define data fields
                chart.dataFields.value = 'CO2'
                chart.dataFields.name = 'Model'
                chart.dataFields.children = 'children'

                var level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries()
                level0SeriesTemplate.hiddenInLegend = false
                chart.seriesTemplates.setKey('0', level0SeriesTemplate)

                // this makes labels to be hidden if they don't fit
                level0SeriesTemplate.labels.template.truncate = true
                level0SeriesTemplate.labels.template.hideOversized = true

                level0SeriesTemplate.labels.template.adapter.add(
                  'rotation',
                  function (rotation, target) {
                    target.maxWidth =
                      target.dataItem.slice.radius -
                      target.dataItem.slice.innerRadius -
                      10
                    target.maxHeight = Math.abs(
                      ((target.dataItem.slice.arc *
                        (target.dataItem.slice.innerRadius +
                          target.dataItem.slice.radius)) /
                        2) *
                        am4core.math.RADIANS
                    )

                    return rotation
                  }
                )

                var level1SeriesTemplate = level0SeriesTemplate.clone()
                chart.seriesTemplates.setKey('1', level1SeriesTemplate)
                level1SeriesTemplate.fillOpacity = 0.75
                level1SeriesTemplate.hiddenInLegend = true

                var level2SeriesTemplate = level0SeriesTemplate.clone()
                chart.seriesTemplates.setKey('2', level2SeriesTemplate)
                level2SeriesTemplate.fillOpacity = 0.5
                level2SeriesTemplate.hiddenInLegend = true

                chart.legend = new am4charts.Legend()

                //chart.radius = am4core.percent(50)
                chart.hiddenState.properties.radius = am4core.percent(50)

                level0SeriesTemplate.endAngle = 270
                level0SeriesTemplate.hiddenState.properties.endAngle = -90
              })
            })

            console.log(document.getElementById('myChart'))
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

  mounted: function () {
    this.getRecords()
  }
}
</script>

<style scoped></style>
