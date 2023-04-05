<template>
  <div>
    <el-backtop></el-backtop>

    <el-carousel :interval="3000" type="card" height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>

    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          &nbsp;<i class="el-icon-circle-plus-outline"></i>&nbsp; Carbon dioxide emissions mainly driveing the climate change in earth.
        </template>
        <div>
          Carbon dioxide has had a significant impact on the Earth's climate. The greenhouse effect causes temperatures to rise, which in turn leads to rising sea levels. At the same time, the likelihood of extreme weather events is also increasing.
        </div>
      </el-collapse-item>
      <!-- <img src="../assets/con01.jpg" alt="" class="con01_pic"> -->
      <el-collapse-item>
        <template slot="title">
          &nbsp;<i class="el-icon-circle-plus-outline"></i>&nbsp;Conventional cars overly dependent on fossil fuels
        </template>
        <div>
          Over-reliance on fossil fuels as the primary driver of traditional automobiles inevitably leads to increased carbon dioxide emissions. This is because these fossil fuels exhaust carbon dioxide when burned in the vehicle's engine, exacerbating greenhouse gas emissions and affecting climate change.
        </div>
      </el-collapse-item>
      <!-- <img src="../assets/con02.jpg" alt="" class="con01_pic"> -->
      <el-collapse-item>
        <template slot="title">
          &nbsp;<i class="el-icon-circle-plus-outline"></i>&nbsp;Encourage VIC residents using clean energy
        </template>
        <div>In order to better address the root causes of the problem, it is strongly encouraged for residents in Weizhou to prioritise the use of clean energy as their preferred mode of transportation, including electric vehicles, public transportation etc.</div>
      
      </el-collapse-item>
      <!-- <img src="../assets/con03.jpg" alt="" class="con01_pic"> -->
      <el-collapse-item>
        <template slot="title">
          &nbsp;<i class="el-icon-circle-plus-outline"></i>&nbsp;Advocate low-carbon life and prompt sustainable development in VIC
        </template>
        <div>
          VIC Residents should be encouraged to adopt a low-carbon lifestyle, which can help reduce carbon dioxide emissions by using more renewable energy and recyclable everyday products, effectively reducing personal carbon footprint.
        </div>
      </el-collapse-item>
      <!-- <img src="../assets/con04.jpg" alt="" class="con01_pic"> -->
    </el-collapse>
    <!-- main function -->
    <el-row class="function-row">
      <el-button
        type="primary"
        round
        class="function1-button"
        @click="goCarEmission"
      >
        <div class="function1-button-content">
          <img src="../assets/function1.png" alt="" class="func1_img" />
          <p class="funcDesc">Carbon dioxide calculator</p>
        </div>
      </el-button>
      <el-button type="success" round class="function2-button"
      @click="goSearch"
      >
        <div class="function2-button-content">
          <img src="../assets/function2.png" alt="" class="func2_img">
          <p class="funcDesc">Carbon dioxide Search Function</p>
        </div>
      </el-button>
      <el-button type="danger" round class="function3-button">
        <div class="function3-button-content">
          I am function3 but you can see i am very long, you can even put
          picture or something in me if you want.
        </div>
      </el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    goCarEmission() {
      this.$router.push("/carEmission");
    },
    goSearch(){
      this.$router.push("/search");
    }
  },
};
</script>

<style>
.el-main {
  /* background-color: orange; */
  height: 100%;
}
.con01_pic{
  width: 800px;
  height: 220px;
  margin: 0 15%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(3) {
  background-color: #99a9bf;
  background-image: url("../assets/home-01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.el-carousel__item:nth-child(4) {
  background-color: #99a9bf;
  background-image: url("../assets/home-02.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.el-carousel__item:nth-child(5) {
  background-color: #99a9bf;
  background-image: url("../assets/home-03.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.el-carousel__item:nth-child(6) {
  background-color: #99a9bf;
  background-image: url("../assets/home-04.jpeg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.el-collapse{
  width: 1200px;
  margin: 0 auto;
  
}
.el-collapse-item__header{
  background-color:  white !important;
  color: rgb(17, 1, 1) !important;
  font-size: 20px !important;
}
.el-collapse-item__content {
  color:  #a3e5ad;
  background-color: #e8f0e3; 
  font-size: 18px !important;
}
.el-collapse-item__wrap.is-active {
  background-color: #e0e0e0; 
}

/* .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.function-row {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 15px; */
}
.el-button {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-button:hover {
  transform: translateY(-5px);
}
.function1-button-content,
.function2-button-content,
.function3-button-content {
  width: 250px;
  white-space: normal;
  /* word-break: break-all; */
  word-wrap: break-word;
}
.func1_img {
  width: 250px;
}
.funcDesc {
  font-size: 20px;
}
.func2_img{
  width: 250px;
  height: 230px;
}
</style>