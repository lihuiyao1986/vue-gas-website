import {WebSiteInfo} from '@/utils/Constant'
export default {
   toPage(menuCode,vm,window){
     if (menuCode == 1) {
        vm.$router.push({name:'index'});
     }else if(menuCode == 8){
        window.open(WebSiteInfo.OnlineBusiServiceURL);
     }else if(menuCode == 15){
        vm.$router.push({name:'map',query : {
         timestamp : vm.moment(new Date()).format("YYYYMMDDHHmmssSSS")
        }});
     }else{
        vm.$router.push({name:'list',query : {
        menuId : menuCode,
        timestamp : vm.moment(new Date()).format("YYYYMMDDHHmmssSSS")
       }});
     }
  }
}
