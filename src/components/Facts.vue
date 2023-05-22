<template>
    <div class="mains" style="width:100%; height:100%;">
      <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/carEmission' }">Emission Calculator</el-breadcrumb-item>
      <el-breadcrumb-item>Car Emission Facts</el-breadcrumb-item>
    </el-breadcrumb>
    <iframe
            src="haha.html"
            name="obj"
            frameborder="0"
            allowtransparency="yes"
            scrolling="no"
            style="width:100%; height: 310%;"
            overflow:auto
          ></iframe>
  </div>
  </template>
  
  <script>
  
  export default {
    data () {
      return {
        
      }
    },
    methods: {
    
    },
  
    mounted: function () {
      
    }
  }
  </script>
  
  <style scoped>
  .el-breadcrumb{
    margin-top: 20px;
    margin-left: 20px;
  }



</style>
  