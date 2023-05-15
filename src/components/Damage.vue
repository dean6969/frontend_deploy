<template>
  <div class="damagePage">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>Emission Damage</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="titleArea">
      <h2>Do you care about our environment?</h2>
    </div>
    <br>


    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple picArea">
          <!-- <img src="../assets/pollution.jpg" alt="" /> -->
          <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="item in 3" :key="item">
    </el-carousel-item>
  </el-carousel>
        </div>
        </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light textArea">
            <h3>
                The harm caused by carbon emissions
            </h3>
            <p>Human daily activities release greenhouse gases including carbon dioxide (CO2) into the atmosphere which has adverse effects on the Earth's normal ecological system and the environment. These greenhouse gases drove the occurrence of the "greenhouse effect" which prevents heat from escaping the Earth. It ultimately leads to a rise in global temperature, endanger the human society and natural environment as well, detailed explanation with data support will be shown as below: </p>
            <!-- <p>Climate change:  According to meteorological data, rising global temperature will increase the frequency of extreme weather events by raising the temperature. The average surface temperature of the Earth has risen by about 0.8 degrees Celsius over the past few decades. By 2100, it is expected that the temperature may rise by 2 to 6 degrees Celsius which will lead to more extreme weather events globally, such as droughts, floods and hurricanes. At the same time, according to a report from the international climate expert organisation, the global sea level has risen by about 20 centimetres in the past century and is expected to continue rising by 0.26 metres to 0.82 metres by 2100.</p> -->
            </div
      ></el-col>
    </el-row>
    <br>
    <!-- <el-row> -->
  <!-- <el-col :span="24"><div class="grid-content bg-purple textArea2"> -->
    <el-collapse v-model="activeNames">
  <el-collapse-item title="Climate change" name="1">
    <el-row>
      <el-col :span="15">
        <p>According to meteorological data, rising global temperature will increase the frequency of extreme weather events by raising the temperature. The average surface temperature of the Earth has risen by about 0.8 degrees Celsius over the past few decades. By 2100, it is expected that the temperature may rise by 2 to 6 degrees Celsius which will lead to more extreme weather events globally, such as droughts, floods and hurricanes. At the same time, according to a report from the international climate expert organisation, the global sea level has risen by about 20 centimetres in the past century and is expected to continue rising by 0.26 metres to 0.82 metres by 2100.(the United Nations Environment Programme, Australian Institute of Health and Welfare)</p>
      </el-col>
      <el-col :span="9">
        <img src="../assets/climate.jpg" alt="">
      </el-col>
    </el-row>
   
  </el-collapse-item>
  <el-collapse-item title="Health issues" name="2">
    <el-row >
      <el-col :span="15">
        <p>Due to the increasing temperature and frequent occurrence of extreme weather events, humans face greater threats to their health, such as heatstroke, respiratory diseases and cardiovascular diseases. According to a report by the United Nations Environment Programme, more than 4 million people die each year from natural disasters caused by climate change. According to data from the World Health Organization, extreme weather caused by climate change has become one of the main factors causing death and injury worldwide. In the past 20 years, more than 100,000 people worldwide have died from disasters related to climate change. According to research by the Australian Institute of Health, global warming is expected to increase the number of heat waves in Australia by five times, leading to a 36% increase in heat-related mortality.(Intergovernmental Panel on Climate Change (IPCC))</p>
      </el-col>
      <el-col :span="9">
        <img src="../assets/health.jpg" alt="">
      </el-col>
    </el-row>
    
  </el-collapse-item>
  <el-collapse-item title="Energy and resource issues" name="3">
    <el-row>
      <el-col :span="15">
        <p>Carbon emissions not only cause a rise in global temperature but also put pressure on the supply of energy and resources. As global energy demand continues to grow, fossil fuel resources are becoming increasingly scarce, which will further exacerbate the problem of carbon emissions. According to a report by the International Energy Agency, global warming may increase energy demand because people will need more air conditioning and cooling equipment to combat high temperatures. Global demand for air conditioning is expected to increase by more than 60% by 2030. Meanwhile, according to a report by the United Nations Development Programme, climate change may lead to resource shortages including food and wood. It is estimated that by the end of this century, global food production may decline by more than 10%.(International Energy Agency (IEA), Intergovernmental Panel on Climate Change (IPCC) )</p>
      </el-col>
      <el-col :span="9">
      <img src="../assets/resource.jpg" alt="">
      </el-col>
    </el-row>
   
  </el-collapse-item>
</el-collapse>
    <!-- <h3>Climate change</h3>
    <p>According to meteorological data, rising global temperature will increase the frequency of extreme weather events by raising the temperature. The average surface temperature of the Earth has risen by about 0.8 degrees Celsius over the past few decades. By 2100, it is expected that the temperature may rise by 2 to 6 degrees Celsius which will lead to more extreme weather events globally, such as droughts, floods and hurricanes. At the same time, according to a report from the international climate expert organisation, the global sea level has risen by about 20 centimetres in the past century and is expected to continue rising by 0.26 metres to 0.82 metres by 2100.(the United Nations Environment Programme, Australian Institute of Health and Welfare)</p>
    <h3>Health issues</h3>
    <p>Due to the increasing temperature and frequent occurrence of extreme weather events, humans face greater threats to their health, such as heatstroke, respiratory diseases and cardiovascular diseases. According to a report by the United Nations Environment Programme, more than 4 million people die each year from natural disasters caused by climate change. According to data from the World Health Organization, extreme weather caused by climate change has become one of the main factors causing death and injury worldwide. In the past 20 years, more than 100,000 people worldwide have died from disasters related to climate change. According to research by the Australian Institute of Health, global warming is expected to increase the number of heat waves in Australia by five times, leading to a 36% increase in heat-related mortality.(Intergovernmental Panel on Climate Change (IPCC))</p>
    <h3>Energy and resource issues</h3>
    <p>Carbon emissions not only cause a rise in global temperature but also put pressure on the supply of energy and resources. As global energy demand continues to grow, fossil fuel resources are becoming increasingly scarce, which will further exacerbate the problem of carbon emissions. According to a report by the International Energy Agency, global warming may increase energy demand because people will need more air conditioning and cooling equipment to combat high temperatures. Global demand for air conditioning is expected to increase by more than 60% by 2030. Meanwhile, according to a report by the United Nations Development Programme, climate change may lead to resource shortages including food and wood. It is estimated that by the end of this century, global food production may decline by more than 10%.(International Energy Agency (IEA), Intergovernmental Panel on Climate Change (IPCC) )</p>
    <p>Therefore, it is urgent for humanity to take effective measures to reduce carbon emissions, including using clean energy, improving energy efficiency, promoting low-carbon lifestyles and etc.</p>
  </div></el-col> -->
  <!-- <el-col :span="10"><div class="grid-content bg-purple-light picArea">
    <img src="../assets/damagePic02.jpg" alt="">
  </div></el-col> -->
<!-- </el-row> -->
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeNames: ['1','2','3']
      };
    },
};
</script>

<style scoped>
.el-breadcrumb {
  margin-top: 20px;
  margin-left: 20px;
}

.damagePage {
  width: 65%;
  margin: 1% auto;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:first-child {
    /* background-color: #99a9bf; */
    background-image: url('../assets/damage01.jpg');
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-image: url('../assets/damage01.jpg');
    background-size: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-image: url('../assets/damage02.jpg');
    background-size: 100%;
  }
  .el-carousel__item:nth-child(3) {
    background-image: url('../assets/damage03.jpg');
    background-size: 100%;
  }
.damagePage .titleArea {
  background-image: url("../assets/surveyBG.jpg");
  width: 100%;
  height: 100px;
  text-align: center;
  justify-content: center;
}

.damagePage .titleArea:hover h2 {
  transform: scale(1.1);
  transition: transform 0.5s ease;
}
.titleArea h2 {
  color: white;
  margin: 0 auto;
  height: 100px;
  line-height: 100px;
  transition: transform 0.5s ease;
}
.picArea img {
  width: 100%;
}
/deep/ .el-collapse-item__header{
  font-size: 18px !important;
}
.el-collapse-item p{
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  text-align: justify;
  width: 98%;
}
.textArea h3 {
  font-family: "Open Sans", sans-serif;
  width: 90%;
  text-align: center;
  margin: 20px auto;
}
.textArea p {
  font-family: "Open Sans", sans-serif;
  width: 90%;
  text-align: justify;
  margin: 20px auto;
}
.textArea2 p {
  font-family: "Open Sans", sans-serif;
  width: 90%;
  text-align: justify;
}
.el-col img{
  width: 100%;
  margin-top: 5%;
}
</style>