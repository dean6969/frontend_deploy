<template>
  <div class="mainStyle">
    <el-backtop></el-backtop>

    <div class="headerText">
      <h1>Daily Carbon Netutrality</h1>
      <h3>Protect Our Earth, Reduce Carbon Pollution!</h3>
    </div>
    <div class="buttonArea">
    <button class="function1-button" style=" position: relative;overflow: hidden">
<!--      <p></p>-->
      <img class="y_img" src="../assets/y_admin_1.png" alt=""/>
         <div class="y_pos"  @click="goCarEmission">
           Know the temperature rise you're causing
<!--          <button class="button_inner" @click="goCarEmission"><i class="el-icon-share"></i>emission calculator</button>-->
         </div>
    </button>
    <button class="function1-button" style=" position: relative;overflow: hidden">
      <img class="y_img" src="../assets/y_admin_2.png" alt=""/>
         <div class="y_pos" @click="goSearch">
<!--          <button class="button_inner" @click="goSearch"><i class="el-icon-share"></i>emission Search</button>-->
           know the Emission your car made

         </div>
    </button>

      <button class="function1-button" style=" position: relative;overflow: hidden" @click="hereClick">
        <img class="y_img" src="../assets/y_admin_3.png" alt=""/>
<!--        <a href="haha.html">-->
          <div class="y_pos">
            <!--          <button class="button_inner" @click="goSearch"><i class="el-icon-share"></i>emission Search</button>-->
            know the Emission your car made
          </div>
<!--        </a>-->

      </button>
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
    hereClick() {
      this.$router.push("/chickHere");
    }

  },
};
</script>

<style>
.mainStyle{
  /*background: url("../assets/homg-bg.jpg")no-repeat;*/
  background-size: cover;
  /*min-height: 100vh;*/
  min-width: 100%;
  padding: 0 !important;
  margin: 0 !important;
}
.el-main {
  /* background-color: orange; */
  height: 100%;
  padding: 0 !important;
}

.con01_pic {
  width: 800px;
  height: 220px;
  margin: 0 15%;
}


.function-row {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 15px; */
}

.el-button {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 200px;
  padding: 0;
  margin: 0;
}

.el-button:hover {
  transform: translateY(-5px);
}

.function1-button-content,
.function2-button-content,
.function3-button-content {
  width: 250px;
  white-space: normal;
  word-wrap: break-word;
  height: 200px;

}
.headerText{
  /*display: flex;*/
  justify-content: center;
  text-align: center;
  color: white;

}
.headerText h1{
  font-size: 50px;
  /*margin-right: -200px;*/
  height: 0;
  margin-top: 20px;
}
.headerText h3{
  font-size: 30px;
  margin-top: 80px;
  /*margin-right: -200px;*/
}

.y_pos {
  width: 100%;
  height: 372px;
  position: absolute;
  color: #ffffff;
  /* background: rgba(20, 39, 54, .3); */
  border: none;
  /* border-radius: 20px; */
  text-align: center;
  top: 357px;
  left: 0;
}

.func1_img {
  width: 250px;
  border: none;
  height: 180px;



}

.funcDesc {
  font-size: 20px;
}

.func2_img {
  width: 250px;
  height: 230px;
}
.button_inner{
  color: white;
  background-color: transparent;
  border: none;
  font-size: 21px;
  margin: 40% auto;
  cursor: pointer;
}
.button_inner:hover{
  color: #e0e0e0;
}
.function1-button{
  width: 220px;
  border: none;
  /* box-sizing: content-box; */
  padding: 0;
  height: 170px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  margin-right: 80px;
  background: rgba(20, 39, 54, .3);
  margin-top: -20%;
}

::v-deep .el-button {
  position: relative !important;
  overflow: hidden;
}


.function1-button:hover .y_pos {
  top: 0;
  transition: .5s;

}
.function2-button:hover .y_pos {
  top: 0;
  transition: .5s;
}
.function3-button:hover .y_pos {
  top: 0;
  transition: .5s;
}
.function1-button p{
color: white;
margin-top: -30px;
font-size: 18px;
}

.y_pos{
  width: 220px;
  height: 170px;
  font-size: 18px;
  padding-top: 30px;
  color: #ffffff;
  background:rgba(20,39,54,1);
}
.buttonArea{
  margin-left: 25%;
  margin-top: 20%;
  margin-bottom: 30px;
}

.y_img{
  width: 220px;
  height: 170px;
  cursor: pointer;
}
</style>
