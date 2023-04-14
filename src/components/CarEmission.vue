<template>
  <div class="content">
    <div class="headerPic">
      <img src="../assets/car.gif" alt="" class="car_gif">
      <h2 class="carHeader">Try our green calculate for your vehicle</h2>
    </div>
    <el-row :gutter="0">
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <div class="emission-content">
            <br><br>
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Three main harmful effects which are caused by carbon emissions per gram: 
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
            <el-tag effect="dark" type="success" class="cal_tag"> Carbon dioxide calculator
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
                <el-button type="success" round @click="submitForm('ruleForm')"
                
                  >check</el-button
                >
                <el-button type="success" round @click="resetForm('ruleForm')">reset</el-button>
              </div>
            </el-form>

            <div v-if="total !== null">
              Your driving raises the global temperature by
              <el-tag type="danger" effect="dark">{{ total }}</el-tag> ℃
            </div>
            <hr>
            <div>
              <p class="askText">
                We are providing more data on vehicle carbon emissions.
                Want to know?
              </p>
            </div>
            <div>
              <el-button type="success" round><a href="haha.html">Click here!</a></el-button>
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
        const response = await this.$http.get("https://backendtp23.onrender.com/mysql1");
        console.log(response.data);
        this.brands = JSON.parse(JSON.stringify(response.data)).map(car => car.Make);

        console.log(this.brands);
      } catch (error) {
        console.log(error);
      }
    },
    // get CO2 emission
    async fetchCarbonData() {
        if(this.selectedBrand){
            try {
        const response = await this.$http.get(
          `https://backendtp23.onrender.com/carbon?message=${this.selectedBrand}`
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

      }
    
  },
  
};
</script>

<style scoped>
.content {
  width: 73%;
  margin: 0 auto;
}
.headerPic {
  height: 90px;
  background-color: #8ecd94;
  overflow: hidden;

}
.emission-content {
  height: 600px;
  background-image: url(../assets/car_bg.png);
  background-size: auto 100%;
  color: white;
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
}
.car_gif{
  width: 120px;
   float: left;
   margin-right: 20%;
}

.bold{
  font-weight: bold;
  color: blanchedalmond;
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
  color: #7ec9d3;
  
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

</style>