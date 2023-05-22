<template>
  <div class="mains" style="width:100%; height:100%;">

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>Emission Trend</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="intro">As we all know, carbon emissions can cause a lot of harm, we provide some details about these......
      &nbsp;&nbsp;&nbsp;&nbsp; 
      <router-link to="/damage" exact>
      <el-button>Emission Damage</el-button>
    </router-link>
    </div>
    <iframe
            src="map.html"
            name="obj"
            frameborder="0"
            allowtransparency="yes"
            scrolling="no"
            style="width:96%; height: 200%;"
            overflow:hidden
          ></iframe>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .el-breadcrumb{
    margin-top: 20px;
    margin-left: 20px;
  }
  iframe{
    margin-left: 50px;
  }
  .intro{
    width: 70%;
    margin: 0 auto;
  }
</style>