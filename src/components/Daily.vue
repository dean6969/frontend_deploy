<template>
  <div>
    <div class="text item searchHeader">
      <img src="../assets/car.gif" alt="" class="car_gif" />
      <h2 class="carHeader">Let's live a low-carbon life together</h2>
      <!-- <div style="clear: both;"></div> -->
    </div>
    <div class="intro">
        <el-row :gutter="20">
        <el-col :span="2"><div class="grid-content bg-purple">
            <el-aside width="165px">
          <el-menu default-active="1" class="el-menu-vertical-demo" router>
            <el-menu-item :index="'/' + 'clothing'">
              <i class="el-icon-s-custom"></i>
              <span slot="title">Clothing</span>
            </el-menu-item>
            <el-menu-item :index="'/' + 'food'">
              <i class="el-icon-fork-spoon"></i>
              <span slot="title">Food</span>
            </el-menu-item>
            <el-menu-item :index="'/' + 'housing'">
              <i class="el-icon-office-building"></i>
              <span slot="title">Housing</span>
            </el-menu-item>
            <el-menu-item :index="'/' + 'travel'">
              <i class="el-icon-bicycle"></i>
              <span slot="title">Travel</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        </div></el-col>
        <el-col :span="22"><div class="grid-content bg-purple">
            <el-main>
          <router-view></router-view>
        </el-main>
        </div></el-col>
      </el-row>
      <div class="banner">
        <img src="../assets/banner.gif" alt="" class="banner_pic">
      </div>
    </div>
    
      

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.intro{
    width: 75%;
    margin: 10px auto;
}
.el-menu-item {
    text-align: left;
    width: 160px;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 227px;
  overflow: hidden;

}
.el-menu{
    height: 300px;
    /* background-color: orange; */
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  height: 400px;
  margin-left: 55px;
}
.banner_pic{
    width: 100%;
    height: 110px;
}
</style>