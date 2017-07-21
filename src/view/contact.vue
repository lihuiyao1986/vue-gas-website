<template>
   <div class="aligin-center contact-wrap">
     <div class="article-content">
       <div class="article-content-top clearfix">
         <p class="article-menu-name">联系我们</p>
         <el-breadcrumb separator="/">
           <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item :to="{ path : '/contact'}">联系我们</el-breadcrumb-item>
         </el-breadcrumb>
       </div>
       <ul class="company-info">
         <li>重庆万州燃气有限公司</li>
         <li>联系地址：重庆市万州区王牌路1号</li>
         <li>邮编：4040000</li>
         <li>电话：（023）58124462</li>
         <li>电子邮箱：wztrq@sina.com</li>
         <li>维修报警：（023）58122203</li>
         <li>呼叫中心：（023）58144777</li>
       </ul>
     </div>
   </div>
</template>

<script>
    export default{
       methods:{

       },
       computed:{

       }
    }
</script>
<style lang="scss" scoped>
@import "../assets/scss/common.scss";
@import "../assets/scss/list.scss";
.contact-wrap{
  min-height: 300px;
}
.company-info{
   margin-bottom: 15px;
   li{
     font-size: 14px;
     padding: 10px 0px;
   }
}
</style>
