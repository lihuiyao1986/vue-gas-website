<template>
  <div class="search-wrapper aligin-center">
      <p class="search-result-title">搜索结果</p>
      <ArticleList
         :articleList="searchArticleList"
         @articleItemClicked="articleItemClicked"
         v-if="searchArticleList.length > 0"
         @pageChanged="pageChanged"
         :total="searchTotal"
         :pageSize="searchPageSize">
       </ArticleList>
       <ErrorPage v-else errorMsg="搜索不到您要的结果" errorIcon="../static/img/not-found.png"></ErrorPage>
  </div>
</template>
<script>
   import ArticleList from '../components/ArticleList'
   import { mapGetters,mapActions} from 'vuex'
   import ErrorPage from '../view/error'
   export default{
      computed : {
         searchTitle(){
           return this.$route.query.searchTitle || ""
         },
         ...mapGetters([
           'searchArticleList',// 文章列表
           'searchTotal',// 总页数
           'searchPageNo',// 当前页
           'searchPageSize'// 每页记录数
         ])
      },
      methods : {
        pageChanged(obj){
           this.setSearchPageNo(obj.pageNo);
           this.getData();
        },
        getData(){
          this.getSearchArticleList({
            title : this.searchTitle,
            pageNum : this.searchPageNo,
            pageSize : this.searchPageSize
          })
        },
        ...mapActions([
          'getSearchArticleList',
          'setSearchPageNo'
        ]),
        articleItemClicked(item){
          this.$router.push({path:'/detail',query:{
            menuId : item.menuId,
            channelArticleId : item.channelArticleId
          }});
        },
      },
      created(){
         this.getData();
      },
      watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'getData'
      },
      components : {
        ArticleList,
        ErrorPage
      }
   }
</script>

<style lang="scss" scoped>
@import "../assets/scss/common.scss";
@import "../assets/scss/search.scss";
</style>
