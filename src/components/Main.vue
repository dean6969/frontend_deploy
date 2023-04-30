<template>
  <div class="mainStyle">
    <el-backtop></el-backtop>

    <div class="image-container">
      <img src="../assets/backgroundGIF.gif" alt="" />
      <div class="text-container">
        <h1>Focus on carbon emissions from vehicles</h1>
        <h3>Protect Our Earth, Reduce Carbon Pollution</h3>
      </div>
    </div>
    <div class="InfoArea">
      <h2>The shocking reality</h2>
      <h3 class="shockingReality">
        Human activities, such as burning fossil fuels, industrial production
        and transportation, lead to carbon emissions that contribute to climate
        change and global warming, posing a major threat to the environment. Now
        something is happening......
      </h3>

      <el-row :gutter="5">
        <img src="../assets/harmHomePage.jpg" alt="" class="harmHomePage" />
      </el-row>
      <router-link to="/trend" exact>
        <el-button type="info" class="trend">Emission Trend</el-button>
      </router-link>
      <el-button type="info" class="trend">Emission Damage</el-button>
      <h2>Carbon emissions & vehicles</h2>
      <el-row :gutter="5">
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <img src="../assets/carHome.jpg" alt="" /></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <p>
              <strong>Vehicles</strong> are an essential means of transportation
              in our daily lives. However, the combustion of fuels in vehicles
              releases greenhouse gases such as carbon dioxide, which accumulate
              in the atmosphere and contribute to global climate change. Vehicle
              emissions have long been associated with a wide range of negative
              impacts on human health and the environment, including air
              pollution, climate change, acid rain, ozone depletion, and more.
              Vehicle carbon emissions are also one of the main contributors to
              the exacerbation of global warming and rising sea levels, which
              have serious implications for both humans and the global
              ecosystem.
            </p>
            <router-link to="/carEmission" exact>
              <el-button type="info" class="carButton">Emission Calculator</el-button>
            </router-link>
            <router-link to="/search" exact>
              <el-button type="info" class="carButton">Emission Search</el-button>
            </router-link>
            <router-link to="/facts" exact>
              <el-button type="info" class="carButton">Car Emission Facts</el-button>
            </router-link>
          </div></el-col
        >
      </el-row>
      <h2>Some Suggestion</h2>
      <h3>Only by taking action can we protect our environment.</h3>
      <el-row type="flex" class="SuggestionArea" justify="space-around">
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            <router-link to="/survey" exact>
              <button class="image-button">
                <img src="../assets/spring.jpg" alt="" />
                <div class="button-overlay">
                  <span class="button-text">Emission survey</span>
                </div>
              </button>
            </router-link>
          </div></el-col
        >

        <el-col :span="8"
          ><div class="grid-content bg-purple">
            <button class="image-button">
              <img src="../assets/summer.jpeg" alt="" />
              <div class="button-overlay">
                <span class="button-text">low carbon life</span>
              </div>
            </button>
          </div></el-col
        >
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            <button class="image-button">
              <img src="../assets/autumn.jpg" alt="" />
              <div class="button-overlay">
                <span class="button-text">low carbon transport</span>
              </div>
            </button>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goCarEmission() {
      this.$router.push("/carEmission");
    },
    goSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style>
.el-main {
  /* background-color: orange; */
  height: 100%;
  padding: 0 !important;
  /* overflow: auto; */
}
.mainStyle {
  height: 100%;
  overflow: auto;
}
.InfoArea {
  width: 70%;
  margin: 8px auto;
  text-align: center;
}
.InfoArea h2 {
  font-family: Montserrat;
  margin: 40px;
}
.InfoArea h3 {
  font-family: Comic Sans MS;
  /* margin: 40px; */
}
.InfoArea p {
  font-family: Montserrat;
  text-align: justify;
  color: rgb(22, 22, 22);
}
.InfoArea img {
  width: 500px;
}
.SuggestionArea .el-col {
  width: 300px;
}
.SuggestionArea .el-col div {
  height: 300px;
  /* background-color: #e9e6e6; */
}
.carButton{
margin-right: 15px !important;
}

.image-container {
  position: relative;
  height: 600px;
  overflow: hidden;
}
.InfoArea .harmHomePage {
  width: 900px;
}
.shockingReality {
  text-align: justify !important;
}
.trend {
  /* display: inline-block !important; */
  margin: 15px 30px !important;
}

.image-container::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-container h1 {
  color: white;
  text-align: center;
  font-size: 50px;
}
.text-container h3 {
  color: white;
  text-align: center;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}
.SuggestionArea {
  margin-top: 50px;
}
.image-button {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.image-button img {
  display: block;
  width: 100%;
  height: auto;
}

.button-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  /* transition: opacity 0.1s ease-in-out; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-button:hover .button-overlay {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.button-text {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.headerText::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
}
.headerText h1 {
  font-size: 80px;
  margin-right: -200px;
  margin-top: 7%;
}
.headerText h3 {
  font-size: 30px;
  margin-top: 17%;
}
.SuggestionArea img {
  width: 100%;
}

.y_pos {
  width: 100%;
  height: 372px;
  position: absolute;
  /* background: rgba(20, 39, 54, .3); */
  border: none;
  /* border-radius: 20px; */
  text-align: center;
  top: 357px;
  left: 0;
}

.button_inner {
  color: white;
  background-color: transparent;
  border: none;
  font-size: 21px;
  margin: 40% auto;
  cursor: pointer;
}
.button_inner:hover {
  color: #e0e0e0;
}
.function1-button {
  width: 220px;
  border: none;
  /* box-sizing: content-box; */
  padding: 0;
  height: 170px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  margin-right: 80px;
  background: rgba(20, 39, 54, 0.3);
  margin-top: -20%;
}

::v-deep .el-button {
  position: relative !important;
  overflow: hidden;
}

.function1-button:hover .y_pos {
  top: 0;
  transition: 0.5s;
}
.function2-button:hover .y_pos {
  top: 0;
  transition: 0.5s;
}
.function3-button:hover .y_pos {
  top: 0;
  transition: 0.5s;
}
.function1-button p {
  color: white;
  margin-top: -30px;
  font-size: 18px;
}
.buttonArea {
  margin-left: 10%;
  margin-top: 10%;
}
</style>
