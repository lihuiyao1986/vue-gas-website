export default {
    trim(str){
      let result = "";
      if (str && str.length > 0) {
          result = str.replace(/\s+/g, ' ');
      }
      return result;
    },
    isNotEmpty(str){
       return str || str.length > 0
    }
}
