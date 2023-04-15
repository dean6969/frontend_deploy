<template>

  <el-container class="home-container">
    <!-- back to the top -->
    <el-backtop></el-backtop>
    <!-- header -->
    <el-header>
      <!-- logo -->
      <el-row :gutter="20">
        <el-col :span="3"
        >
          <div class="grid-content bg-purple">

            <img src="../assets/y_logo.png" alt="" class="logo">
          </div>
        </el-col
        >
        <el-col :span="3"
        >
          <div class="grid-content bg-purple">
            <p class="projectName">Daily Carbon Netutrality</p>
          </div>
        </el-col
        >
        <el-col :span="18"
        >
          <div class="grid-content bg-purple">
            <el-menu class="el-menu-nav"
                     mode="horizontal"
                     text-color="#fff"
                     background-color="transparent"
                     active-text-color="white"
                     router
            >
              <el-menu-item :index="'/'+'main'"><i class="el-icon-loading"></i>Homepage</el-menu-item>
              <!--                <el-submenu  :index="'/'+'daily'">-->
              <!--                  <template slot="title">Daily life</template>-->
              <!--                  <el-menu-item :index="'/'+'daily'">Daily life</el-menu-item>-->
              <!--                  <el-menu-item >选项2</el-menu-item>-->
              <!--                  <el-menu-item >选项3</el-menu-item>-->
              <!--                </el-submenu>-->
              <!--                <el-menu-item>Damage</el-menu-item>-->
              <!-- <el-submenu  :index="'/'+'carEmission'"> -->
              <!-- <template slot="title">car emission</template> -->
<!--              <el-submenu :index="'/'+'carEmission'" class="y_menu_flex">-->
<!--                <template slot="title">Car emission</template>-->
<!--                <el-menu-item :index="'/'+'carEmission'">Emission caculator</el-menu-item>-->
<!--                <el-menu-item :index="'/'+'search'">Emission search</el-menu-item>-->
<!--                <el-menu-item><a href="haha.html">Car emission facts</a></el-menu-item>-->
<!--              </el-submenu>-->
              <el-menu-item class="y_menu_show" style="position:relative;" :index="'/'+'carEmission'">
                Car emission
                <ul class="y_menu_ul">
                                  <li :index="'/'+'carEmission'">Emission caculator</li>
                                  <li :index="'/'+'search'">Emission search</li>
                                  <li><a href="haha.html">Car emission facts</a></li>
                </ul>
              </el-menu-item>
              <!--                <el-menu-item :index="'/'+'carEmission'">Emission Caculator</el-menu-item>-->
              <!--                <el-menu-item :index="'/'+'search'">Emission Search</el-menu-item>-->
              <!--                <el-menu-item ><a href="haha.html">Car Emission Facts</a></el-menu-item>-->
              <!-- </el-submenu> -->
              <!-- <el-menu-item>About Us</el-menu-item> -->
            </el-menu>
          </div>
        </el-col
        >
      </el-row>

      <!-- navigation -->
    </el-header>
    <!-- body -->
    <el-container>
      <!-- main -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- footer -->
      <el-footer><i class="el-icon-loading"></i>Daily carbon netutrality
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    gotoMain() {
      this.$router.push('/main');
    }
  }
};
</script>

<style scoped>

.home-container {
  height: 100%;
}
.el-header .logo {
  width: 75px;
  height: 60px;
  /* background-color: #b7d07a; */

  margin-left: 60px;
  cursor: pointer;
}
.el-submenu{
  margin: 0;
  padding: 0 !important;
}


.el-header {
  width: 100%;
  background:rgba(20,39,54,0.3);
  /*background-color: #b7d07a;*/
}
.el-aside {
  background-color: #333744;
  height: 400px;
}
.el-main {
  /* background-color: orange; */
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
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
  width: 150px;
  white-space: normal;
  /* word-break: break-all; */
  word-wrap: break-word;
}
.el-footer{
  height: 10%;
  background-color: #b7d07a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-icon-loading{
  font-size: 18px;
  color: red !important;
}
.projectName{
  color: #fff;
}




::v-deep  .bg-purple .el-menu-nav{
  border-color: transparent!important;
}
::v-deep .el-menu-nav{
  border-bottom: none!important;
}

a{
  text-decoration: none;
  color: white;
}

::v-deep .el-menu-nav .el-menu--popup{
  padding: 0 0!important;
}

::v-deep .el-menu-nav .el-menu--popup-bottom-start{
  margin-top: 0!important;
}



.y_menu_ul{
  list-style: none;
  width: 100%;
  background-color: #333333;
  position: absolute;
  left: 0;
  display: none;

}

.y_menu_show:hover .y_menu_ul{
  display: block;
}

.y_menu_ul li{
  width: 100%;
  text-align: center;
  height: 35px;
  line-height: 35px;
}

.y_menu_ul li:hover{
  background: rgba(204, 204, 204, .5);
}
</style>
