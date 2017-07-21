<template>
   <div class="aligin-center sites-wrap">
     <div class="article-content">
       <div class="article-content-top clearfix">
         <p class="article-menu-name">网点分布</p>
         <el-breadcrumb separator="/">
           <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item :to="{ path : '/sites'}">网点分布</el-breadcrumb-item>
         </el-breadcrumb>
       </div>
     </div>
   </div>
</template>

<script>
    export default{
       methods:{

       },
       computed:{
          timestamp(){
            return this.moment(new Date()).format("YYYYMMDDHHmmssSSS")
          }
       }
    }
</script>
<style lang="scss" scoped>
@import "../assets/scss/common.scss";
@import "../assets/scss/list.scss";
.sites-wrap{
  min-height: 300px;
}
</style>
