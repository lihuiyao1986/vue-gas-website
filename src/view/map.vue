<template>
  <div class="website-map aligin-center">
    <el-row :gutter="80">
      <el-col :span="5">
        <LeftMenu :menu="menu" :currentMenucode="menuId">
           <template scope="props" slot="left-menu-item">
                <li class="left-menu-item" @click="leftMenuClick(props.submenu)" :class="{selected : props.submenu.id == props.currentMenucode}">{{props.submenu.name}}</li>
           </template>
        </LeftMenu>
      </el-col>
      <el-col :span="19">
        <div class="article-content">
          <div class="article-content-top clearfix">
            <p class="article-menu-name">{{tabs.currentMenuTitle}}</p>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="item of tabs.items" :key="item.id" :to="{path : '/list',query : {menuId : item.id,} }">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="menu-list">
              <div class="menu-info-item" v-for = "menu of menus">
                   <p class="menu-title">{{menu.name}}</p>
                   <ul class="submenu-info-list">
                     <li class="submenu-info-item" v-for="submenu of menu.submenus">
                       <a href="javascript:void(0);" @click="menuItemClicked(submenu)">{{submenu.name}}</a>
                     </li>
                   </ul>
              </div>
          </div>
      </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
   import LeftMenu from '@/components/LeftMenu'
   import API from '@/http/API'
   import menus from '@/assets/js/menu'
   import CommonUtils from '@/utils/CommonUtils'
   import {mapGetters,mapActions} from 'vuex'
   export default {
     computed : {
       menus(){
         return menus.filter(item=>{
            return item.code != 1 && item.code != 8;
         });
       },
       ...mapGetters([
         'menu',// 菜单信息
         'total',// 总页数
         'pageNo',// 当前页
         'pageSize',// 每页记录数
         'menuId'// 当前菜单id
       ]),
       tabs(){
         try{
           let currentMenu = {};
           if(this.menuId == this.menu.id){ //传过来的菜单是父菜单
               currentMenu = this.menu.childMenuList.length > 0 ? this.menu.childMenuList[0] : {};
               this.setCurrentMenuId(currentMenu.id)
           }else{
             let arr = [];
             if (this.menu.childMenuList.length > 0) {
               arr = this.menu.childMenuList.filter(item=>{
                return item.id == this.menuId
               });
             }
             currentMenu = arr.length > 0 ? arr[0] : {};
          }
          return {
              currentMenuTitle : currentMenu.name || "",
              items :[
                   {
                     name : this.menu.name || "",
                     id : this.menu.id || "",
                     timestamp : this.moment(new Date()).format("YYYYMMDDHHmmssSSS")
                   },{
                     name : currentMenu.name || "",
                     id : currentMenu.id || "",
                     timestamp : this.moment(new Date()).format("YYYYMMDDHHmmssSSS")
                   }
              ]
           };
         }catch(ex){
           return {
             currentMenuTitle : "",
             items :[]
           }
        }
       }
     },
     methods : {
        ...mapActions([
          'getArticleList',
          'setCurrentMenuId'
        ]),
        leftMenuClick(item){ // 左边菜单被点击
           this.setCurrentMenuId(item.id)
           CommonUtils.toPage(item.id,this,window);
        },
        getData(){
          this.setCurrentMenuId("15")
          this.getArticleList({
            id : this.menuId,
            pageNum : this.pageNo,
            pageSize : this.pageSize
          })
        },
        menuItemClicked(item){
          CommonUtils.toPage(item.code,this,window);
        }
     },
     created(){
        this.getData();
     },
     watch: {
       // 如果路由有变化，会再次执行该方法
       '$route': 'getData'
     },
     components : {
       LeftMenu
     }
   }
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
@import "../assets/scss/list.scss";
@import "../assets/scss/map.scss";
</style>
