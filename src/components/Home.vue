<template>

  <el-container class="home-container">
    <!-- back to the top -->
    <el-backtop></el-backtop>
    <!-- header -->
    <el-header>
      <!-- logo -->
        <el-col :span="16"
          ><div class="grid-content bg-purple">
            <el-menu class="el-menu-nav"
            mode="horizontal"
            text-color="#fff"
            background-color="transparent"
            active-text-color="#dbcdb1"
            :default-active="$router.currentRoute.path"
           
            router
            >
              <el-menu-item :index="'/'+'main'" class="homeClick">Homepage</el-menu-item>
                <el-menu-item :index="'/'+'carEmission'" class="noLine">Emission Calculator</el-menu-item>
                <el-menu-item :index="'/'+'search'" class="noLine">Emission Search</el-menu-item>
                <el-menu-item :index="'/'+'facts'" class="noLine">Car Emission Facts</el-menu-item>
                <el-menu-item :index="'/'+'survey'" class="noLine">Emission Survey</el-menu-item>
                <el-menu-item :index="'/'+'trend'" class="noLine">Emission Trend</el-menu-item>
            </el-menu>
          </div></el-col>

      <!-- navigation -->
    </el-header>
    <!-- body -->
    <el-container>
      <!-- main -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- footer -->
      <el-footer>@2023 CarbonCutterVic. &nbsp;&nbsp;Design by Tp23.
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
methods:{
  gotoMain(){
    this.$router.push('/main');
  }
}
};
</script>

<style scoped>

.home-container {
height: 100%;
}
.el-main{
  overflow: auto;
}
.homeClick{
  border: none !important;
  /* color:#dbcdb1 !important; */
  /* active-text-color:#fff; */
}
.noLine{
  text-decoration: none;
  border: none !important;
  border: 3px solid;
}
.homeClick .is-active{
  background-color: transparent;
}
.noLine .is-active{
  background-color: transparent !important;
  color: #dbcdb1 !important;
}

.homeClick:focus{
  background-color: transparent !important;
  color: #fff !important;
}
.el-menu-item:hover {
  background-color: transparent !important;
  color: #dbcdb1 !important;

  
}
.noLine:focus {
  border-bottom: none !important;
  color: #dbcdb1 !important;
  background-color: transparent !important;
}
.el-menu-item{
  font-size: 14px;
}


.el-header {
/* position: absolute; */
z-index: 1;
width: 100%;
background-color: #252832;
color: #fff;
}
.el-header .el-col{
  margin-left: 30%;
}

.el-aside {
background-color: #333744;
height: 400px;
}
.el-main {
/* background-color: orange; */
height: 100%;
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
word-wrap: break-word;
}
.el-footer{
height: 10%;
background-color: #252832;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
}
.projectName{
color: #fff;
}


::v-deep .el-menu{
background-color: transparent!important;
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
</style>
