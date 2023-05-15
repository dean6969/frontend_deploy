<template>

  <div class="content">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>Emission Calculator</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="headerPic">
      <!-- <img src="../assets/car.gif" alt="" class="car_gif"> -->
      <h2 class="carHeader">Try our green calculate for your vehicle</h2>
    </div>
      <!-- <div class="arcgis-map">
      
      <div id="sidebar" ref="sidebar"></div>
      <div class="gutter"></div>
      <main>
        <div id="viewDiv" ref="viewDiv"></div>
      </main>
      
  </div> -->
    <el-row :gutter="0">
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <div class="emission-content">
            <br><br>
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Three main harmful effects caused by carbon emissions: 
            </h3>  
            <p class="carText">
              In terms of the aspect of <span class="bold">climate change</span>, the United Nations stated that an increase of 1
              gram of carbon emissions can cause a global average temperature rise of about <span class="bold">0.00005</span>°C
              due to greenhouse gas emissions, also leading to worsening climate change.
            </p>    
            <p class="carText">
              For the aspect of <span class="bold">Health Risks</span>: Some studies proposed that the impact of each gram of
              carbon emissions on human health including the release of carcinogens, air pollution, water
              pollution and other common hazards. The number of premature deaths due to air pollution is
              estimated to be as high as several million per year.
            </p>
            <p class="carText">
              According to the aspect of <span class="bold">Ecological Imbalance</span>: Each gram of carbon emissions places a
              negative impact on the ecosystem, such as disrupting the balance of forest ecosystems,
              ocean acidification etc…
            </p> 
            <p class="carText">
              Reducing carbon emissions, adopting a low-carbon and environmentally friendly
              lifestyle and promoting the substantial environment are crucial.

            </p>                                                                                                       
          </div>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-card>
            <el-tag effect="dark" type="info" class="cal_tag"> Carbon dioxide calculator
</el-tag>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="Car Brand:" :prop="carBrand=selectedBrand">
                <el-select
                  v-model="selectedBrand"
                  filterable
                  placeholder="Select"
                  clearable
                  @change="fetchCarbonData"
                  @clear = "clearBrand"
                >
                  <el-option
                    v-for="brand in brands"
                    :key="brand"
                    :label="brand"
                    :value="brand"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="Distance(KM):" prop="distance">
                <el-input
                  placeholder="Input an number"
                  v-model="ruleForm.distance"
                  clearable
                >
                </el-input>
              </el-form-item>

              <div class="text item"></div>
              <div class="text item">
                <el-button type="info" @click="submitForm('ruleForm')" class="checkButton"
                
                  >check</el-button
                >
                <el-button type="info" @click="resetForm('ruleForm')" class="resetButton">reset</el-button>
              </div>
            </el-form>

            <div v-if="total !== null">
              Your driving raises the global temperature by
              <el-tag type="danger" effect="dark">{{ total }}</el-tag> ℃
            </div>
            <div>
              <p class="askText">
                <em>We are providing more data on vehicle carbon emissions.
                Want to know?</em>
              </p>
            </div>
            <div>
              <router-link to="/facts" exact>
              <el-button type="info">Click here!</el-button>
            </router-link>
            </div>
            <div class="gif02Container">
              <img src="../assets/carGIF02.gif" alt="" class="gif02">
            </div>
          </el-card>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>


export default {
  data() {
    var checkPositive = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('input a number please'));
        }
          if (isNaN(value)) {
            callback(new Error('your input should be a number'));
          } else {
            if (parseFloat(value) < 0) {
              callback(new Error('positive number please'));
            } else {
              callback();
            }
          }
      };
    return {
      brands: [], // brand list
      selectedBrand: null, // brand
      carbonData: null, // carbon emission
    //   distance: "",
      total: "",
      ruleForm: {
        carBrand:'',
        distance:''
        },
     rules:{
        carBrand: [
            { required: true, message: 'select a car brand', trigger: 'blur' },
          ],
        distance: [
            // { required: true, message: 'input a number please', trigger: 'blur' },
            { validator: checkPositive, trigger: 'blur' }
          ],
     }   
    };
  },
  mounted() {
    this.fetchBrands();
  },
  methods: {
    async fetchBrands() {
      try {
        const response = await this.$http.get("https://backendtp234.onrender.com/mysql1");
        console.log(response.data);
        this.brands = JSON.parse(JSON.stringify(response.data)).map(car => car.Make);

        console.log(this.brands);
        // Use split-grid to enable the draggable gutter

      } catch (error) {
        console.log(error);
      }
    },
    // get CO2 emission
    async fetchCarbonData() {
        if(this.selectedBrand){
            try {
        const response = await this.$http.get(
          `https://backendtp234.onrender.com/carbon?message=${this.selectedBrand}`
        );
        this.carbonData = JSON.parse(JSON.stringify(response.data)).map(car => car.CO2);


      } catch (error) {
        return this.$message.error("can't get emission");
      }
        }else {
            return
        }
      
    },
    calculateTotal() {
      let total = this.carbonData * this.ruleForm.distance * 0.00005;
      total = total.toFixed(4)
      this.total = total
    },
    submitForm(formName) {
        if(this.carBrand){
            this.$refs[formName].validate((valid) => {
          if (valid) {
            this.calculateTotal()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }else{
            return this.$message.error("carBrand can't be empty");
        }
        

      },
      clearBrand(){
    this.selectedBrand = ''
  },
  resetForm(formName) {
        this.$refs[formName].resetFields();
        this.selectedBrand = ''
        this.total = ''

      },
    
  }

  
};
</script>

<style scoped>
.el-header {
position: static !important;
width: 100%;
background-color: black !important;
color: #fff;
}
.content {
  width: 73%;
  margin: 0 auto;
}
.el-breadcrumb{
  margin: 1% auto;
}
.headerPic {
  height: 90px;
  /* background-color: #8ecd94; */
  overflow: hidden;
  background-image: url(../assets/surveyBG.jpg);
  text-align: center;

}
.emission-content {
  height: 600px;
  /* background-image: url(../assets/harmHomePage.jpg); */
  background-size: auto 100%;
  color: black;
  overflow: hidden;
}
.el-row {
  padding: 0 !important;
}
.el-input,
.el-select {
  width: 200px;
}
.el-card {
  height: 600px;
}
.carText {
  margin: 20px;
  font-family: "Open Sans", sans-serif;
}
.car_gif{
  width: 120px;
   float: left;
   margin-right: 20%;
}

.bold{
  font-weight: bold;
  color: rgb(60, 26, 16);
}
.cal_tag{
  margin-bottom: 8%;
  margin-left: 20%;
  font-size: 18px;
  text-align: center;
}
.carHeader{
  color: white;
  transition: transform 0.5s ease;

}
.carHeader:hover {
    transform: scale(1.1); 
    transition: transform 0.5s ease; 
}
.askText{
  color: #383d3e;
  
}
.gif02{
  width: 195px;
  display: block;
  margin-left: 100px;
}

hr {
  border-color: green;
}
a{
  text-decoration: none;
  color: white;
}

.resetButton,.checkButton{
  width: 80px;
}

.arcgis-map {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 5px 1fr;
}

.gutter {
  grid-column: 2;
  background-image: url('data:image/svg+xml,%3Csvg%20version=%221.1%22%20id=%22Layer_1%22%20xmlns=%22http://www.w3.org/2000/svg%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20x=%220px%22%20y=%220px%22%20viewBox=%220%200%206%2020%22%20style=%22enable-background:new%200%200%206%2020;%22%20xml:space=%22preserve%22%3E%3Cstyle%20type=%22text/css%22%3E.st0%7Bfill:%23D4D4D4;%7D%3C/style%3E%3Cg%3E%3Crect%20x=%220.5%22%20y=%220.5%22%20class=%22st0%22%20width=%221%22%20height=%2219%22/%3E%3Cpath%20d=%22M1,1v18V1%20M2,0H0v20h2V0L2,0z%22/%3E%3C/g%3E%3Cg%3E%3Crect%20x=%224.5%22%20y=%220.5%22%20class=%22st0%22%20width=%221%22%20height=%2219%22/%3E%3Cpath%20d=%22M5,1v18V1%20M6,0H4v20h2V0L6,0z%22/%3E%3C/g%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center;
  width: 7px;
  margin-right: 2px;
  cursor: col-resize;
}

main {
  grid-column: 3;
}

/* Tell the map control to take 100% of its container: */
#viewDiv {
  height: 100%;
  width: 100%;
}

</style>