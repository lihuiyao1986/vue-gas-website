<template>
  <div id="footer">
     <div class="aligin-center">
      <ul class="footer-outer-wrap clearfix">
        <li class="footer-outer-item">
          <ul class="footer-inner-wrap">
            <li class="footer-inner-title">网站帮助</li>
            <li><a href="javascript:void(0);" @click.stop="websiteMapClicked">网站地图</a></li>
            <li><a href="javascript:void(0);" @click.stop="contactUsClicked">联系我们</a></li>
          </ul>
        </li>
        <li class="footer-outer-item">
          <ul class="footer-inner-wrap">
            <li class="footer-inner-title">关于我们</li>
            <li v-for="item of websiteInfo.aboutUsInfo">{{item.title}}</li>
          </ul>
        </li>
        <li class="footer-outer-item">
          <ul class="footer-inner-wrap">
            <li class="footer-inner-title">友情链接</li>
            <li v-for="item of websiteInfo.websiteLinks" :key="item.url">
              <a href="javascript:void(0);" @click.stop="linkClicked(item)">{{item.websiteName}}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="copyRightInfo">{{websiteInfo.copyRightInfo}}</div>
     </div>
  </div>
</template>
<script>
    import {WebSiteInfo} from '@/utils/Constant'
    export default {
       data(){
         return {
           websiteInfo : WebSiteInfo
         }
       },
       methods : {
         linkClicked(item){
           window.open(item.url);
         },
         websiteMapClicked(){
           this.$router.push({name:"map",query:{
              timestamp : this.moment(new Date()).format("YYYYMMDDHHmmssSSS")
           }})
         },
         contactUsClicked(){

         }
       }
    }
</script>

<style lang="scss" scoped>
@import "../assets/scss/common.scss";
@import "../assets/scss/footer.scss";
</style>
