<template>
  <div id="header">
      <div class="header-top aligin-center">
          <img src="../../static/img/logo1.png" class="logo" @click="backHome"/>
          <ul class="header-top-right">
             <li class="current-timer">{{currentTimer}}</li>
             <li>
              <span class="search-area">
                <el-input placeholder="请输入搜索内容"  v-model="searchTitle" icon="search" :on-icon-click="doSearch"></el-input>
              </span>
             </li>
          </ul>
      </div>
      <div class="nav-menu">
        <div class="aligin-center nav-menu-wrap">
             <img src="../../static/img/nav-bg.png"/>
             <ul class="nav-list">
                <li v-for="(item,index) in menus" @click.stop="menuClicked(item)" @mouseenter="menuIn(index)" @mouseleave="cHoverMenuCode=''">
                  {{item.name}}
                  <el-collapse-transition>
                  <ul class="sub-menu-list" v-show="cHoverMenuCode == item.code">
                     <li  v-for="subItem in item.submenus"  @click.stop="menuClicked(subItem)">{{subItem.name}}</li>
                  </ul>
                  </el-collapse-transition>
                </li>
             </ul>
        </div>
      </div>
      <div>
          <template>
                 <el-carousel :interval="5000" arrow="always" indicator-position="outside" height="250px">
                    <el-carousel-item v-for="item in banners" :key="item.url">
                     <img :src="item.url"/>
                    </el-carousel-item>
                  </el-carousel>
         </template>
      </div>
  </div>
</template>

<script>
   import banner from '../components/Banner'
   import CommonUtils from '@/utils/CommonUtils'
   import menus , {bannerPics} from '../assets/js/menu'
   import StringUtils from '../utils/StringUtils'
   export default {
       name : 'WebsiteHeader',
       data(){
          return {
            banners : bannerPics,
            menus : menus,
            submenus : [],
            cHoverMenuCode : "",
            searchTitle : ""
          }
       },
       computed : {
         currentTimer(){
            this.moment.locale("zh-cn");
            return this.moment(new Date()).format('YYYY年MM月DD日 dddd');
         }
       },
       methods:{
         doSearch(ev){
            if (StringUtils.isNotEmpty(this.searchTitle)) {
              this.$router.push({name:'search',query:{
                searchTitle : this.searchTitle,
                timestamp : this.moment(new Date()).format("YYYYMMDDHHmmssSSS")
              }});
            }else{
              this.$message.error({
                message : '请输入要搜索的内容',
                duration : 1000
              });
            }
         },
         menuIn(index){
           let currentMenu = this.menus[index];
           this.cHoverMenuCode = currentMenu.code;
           this.submenus = currentMenu.submenus;
         },
         backHome(){
           this.$router.push({name:'index',query:{
             timestamp : this.moment(new Date()).format("YYYYMMDDHHmmssSSS")
           }});
         },
         menuClicked(item){
           this.cHoverMenuCode = ""
           CommonUtils.toPage(item.code,this,window);
         }
       },
       components : { banner }
   }
</script>

<style scoped lang="scss">
@import "../assets/css/animate.css";
@import "../assets/scss/common.scss";
@import "../assets/scss/header.scss";
</style>
