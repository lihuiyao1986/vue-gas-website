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
       <div class="map-site clearfix">
         <div class="map-site-left" id="map-site-left">
         </div>
         <div class="map-site-right">
           <ul>
             <li v-for="(item,index) of sites" @click="itemClick(item,index)">
                <p class="siteName single-text">{{item.siteName}}</p>
                <p class="siteContact single-text">电话：{{item.siteContact}}</p>
                <p class="siteAddress single-text">地址：{{item.siteAddress}}</p>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
    import { WebSiteInfo } from '@/utils/Constant'
    import AMap from 'AMap'
    var map,infoWindow;
    export default{
       data(){
          return {
           sites : WebSiteInfo.sites,
           markers : []
         }
       },
       mounted(){
          this.init()
       },
       methods:{
           itemClick(item,index){
             this.showInfoWindow(this.markers[index].content,this.markers[index].getPosition())
           },
           showInfoWindow(content,position){
             infoWindow.setContent(content);
             infoWindow.open(map, position);
             map.setZoomAndCenter(14, position);
           },
           addMarker(item){
             let marker = new AMap.Marker({
               icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
               position: item.position
             })
             marker.content = `<div style="padding:10px;">
                               <p style="height:30px;line-height:30px;font-weight:700">${item.siteName}</p>
                               <p style="height:30px;line-height:30px;">${item.siteContact}</p>
                               <p style="height:30px;line-height:30px;">${item.siteAddress}</p>
                               </div>`;
             marker.setMap(map);
             marker.on("click",e=>{
               this.showInfoWindow(e.target.content,e.target.getPosition())
             });
             return marker;
           },
           init(){
             map = new AMap.Map('map-site-left', {
               zoom: 8,
               resizeEnable: true
             });
             AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], ()=>{
               map.addControl(new AMap.ToolBar())
               map.addControl(new AMap.Scale())
             });

             AMap.plugin('AMap.AdvancedInfoWindow',function(){
                infoWindow = new AMap.InfoWindow();
             });

             map.on('complete',()=>{
               for(let item of this.sites){
                 this.markers.push(this.addMarker(item))
               }
               map.setFitView();
             });
           }
       },
       watch: {
         // 如果路由有变化，会再次执行该方法
         '$route': 'init'
       },
       computed:{

       }
    }
</script>
<style lang="scss" scoped>
@import "../assets/scss/common.scss";
@import "../assets/scss/list.scss";
.sites-wrap{
  min-height: 300px;
}
.map-site{
  height: 500px;
  .map-site-left{
    height: 100%;
    border-top: 1px solid $lineColor;
    border-bottom: 1px solid $lineColor;
    border-left: 1px solid $lineColor;
    display: inline-block;
    width: 75%;
  }
  .map-site-right{
    width: 25%;
    float: right;
    display: inline-block;
    height: 100%;
    border: 1px solid $lineColor;
    max-height: 100%;
    overflow: auto;
    ul{
      li{
        &:hover{
          cursor: pointer;
          background-color: #f8f8f8;
        }
        padding: 5px 0px;
        position: relative;
        &:not(:last-child):after{
           content:'';
           width: 100%;
           height: 0px;
           position: absolute;
           bottom: 0;
           border-bottom:1px dashed $lineColor;
           display: inline-block;
        }
        p{
          text-align: center;
          height: 30px;
          line-height: 30px;
          &.siteName{
             font-size: 14px;
             font-weight: 700;
          }
          &.siteContact{

          }
          &.siteAddress{

          }
        }
      }
    }
  }
  box-sizing: border-box;
  margin: 0px 0px 50px 0px;
}
</style>
