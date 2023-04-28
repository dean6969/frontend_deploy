<template>
  <div class="aMains">
    <el-container class="home-container">
      <!-- back to the top -->
      <el-backtop></el-backtop>
      <!-- header -->
      <el-header>
        <!-- logo -->
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <img src="../assets/y_logo.png" alt="" class="logo" />
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <p class="projectName">Daily Carbon Netutrality</p>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <el-menu
                class="el-menu-nav"
                mode="horizontal"
                text-color="#fff"
                background-color="transparent"
                active-text-color="white"
                router
              >
                <el-menu-item :index="'/' + 'main'" @click="fn">
                  <!--                <i class="el-icon-loading"></i>-->
                  Homepage</el-menu-item
                >

                <el-menu-item class="y_menu_show" style="position:relative;">
                  Car emission
                  <div class="y_menu_ul">
                    <div @click="EmissionClick">Emission caculator</div>
                    <div @click="searchClick">Emission search</div>
                    <div @click="chickHere">Car emission facts</div>
                  </div>
                </el-menu-item>
                <el-menu-item @click="fnEvent">
                  <!--                <i class="el-icon-loading"></i>-->
                  Carbon emission trend</el-menu-item
                >

                <el-menu-item @click="quizClick"> Co2 Quiz</el-menu-item>
              </el-menu>
            </div>
          </el-col>
        </el-row>

        <!-- navigation -->
      </el-header>
      <!-- body -->
      <el-container>
        <!-- main -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <div v-if="isShow" class="mains" style="width:100%; height:3500px; z-index: 999;">
          <iframe
            src="./static/haha/haha.html"
            name="obj"
            frameborder="0"
            allowtransparency="yes"
            scrolling="no"
            style="width:100%; height: 100%;"
          ></iframe>
        </div>
        <div
          v-else-if="$store.state.isShows"
          class="mains"
          style="width:100%; height:1200px; z-index: 999;"
        >
          <iframe
            src="./static/haha/map1(2).html"
            name="obj"
            frameborder="0"
            allowtransparency="yes"
            scrolling="no"
            style="width:100%; height: 100%;"
          ></iframe>
        </div>
   <div v-if="$store.state.toShow" class="button"><div class="mains_top"> @2023 CarbonCutterVic. &nbsp;&nbsp;Design &nbsp; by &nbsp; Tp23.</div></div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import main from './Main'
export default {
  data () {
    return {
      isShow: false,
      // isShows: false
    }
  },
  components: {
     main
  },
  methods: {
    fnEvent () {
      this.isShow = false
       this.$store.commit('savePath',true)
       this.$store.commit('saveToShow',false)
      // this.isShows = true
    },
    fn () {
      this.isShow = false
        this.$store.commit('savePath',false)
        this.$store.commit('saveToShow',true)
    },
    gotoMain () {
      this.$router.push('/main')
      this.isShow = false
      this.$store.commit('savePath', false)
        this.$store.commit('saveToShow',false)
    },

    EmissionClick () {
      this.$router.push('/carEmission')
      this.isShow = false
      this.$store.commit('savePath', false)
        this.$store.commit('saveToShow',false)
    },
    searchClick () {
      this.$router.push('/search')
      this.isShow = false
      this.$store.commit('savePath', false)
        this.$store.commit('saveToShow',false)
    },
    chickHere () {
      // this.$router.push('/chickHere');
      this.isShow = true
      this.$store.commit('savePath', false)
        this.$store.commit('saveToShow',false)
    },
    quizClick () {
      this.$router.push('/quiz')
      this.isShow = false
      // this.isShows = false
      this.$store.commit('savePath', false)
       this.$store.commit('saveToShow',false)
    }
  }
}
</script>

<style scoped>
.aMains {
  position: relative;
}
.button{
   position: absolute;
   height:20px;
   top: calc(100vh - 20px);
   width: 100%;
   color: #fff;
   background: #77ae5d;
  
}
.mains_top{
   position: absolute;
left: 42%;
}
.mains {
  position: absolute;
  top: 60px;
}
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
.el-submenu {
  margin: 0;
  padding: 0 !important;
}

.el-header {
  width: 100%;
  background: rgba(20, 39, 54, 0.3);
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
.el-footer {
  height: 10%;
  background-color: #b7d07a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-icon-loading {
  font-size: 18px;
  color: red !important;
}
.projectName {
  color: #fff;
}

::v-deep .bg-purple .el-menu-nav {
  border-color: transparent !important;
}
::v-deep .el-menu-nav {
  border-bottom: none !important;
}

a {
  text-decoration: none;
  color: white;
}

::v-deep .el-menu-nav .el-menu--popup {
  padding: 0 0 !important;
}

::v-deep .el-menu-nav .el-menu--popup-bottom-start {
  margin-top: 0 !important;
}

.y_menu_ul {
  list-style: none;
  position: absolute;
  left: 0;
  z-index: 9999999;
  /*padding: 0 10px;*/
  display: none;
}

.y_menu_ul div {
  padding: 0 10px;
  background: rgba(51, 51, 51, 0.5);
}

.y_menu_show:hover .y_menu_ul {
  display: block;
}

.y_menu_ul div {
  width: 100%;
  text-align: center;
  height: 35px;
  line-height: 35px;
}

.y_menu_ul div:hover {
  /*background: rgba(204, 204, 204, .5);*/
  color: #788b2b;
}

.y_footer {
  max-width: 1140px;
  margin: auto;
}

.y_footer li {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
