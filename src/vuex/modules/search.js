import api from '../../http/API'
import * as types from '../types'

const state = {
    // 文章列表
    searchArticleList: [],
    // 总页数
    searchTotal : 0,
    // 当前页
    searchPageNo : 1,
    // 每页记录数
    searchPageSize : 10
}

const actions = {
    getSearchArticleList({commit,state},params){
       commit(types.COM_LOADING_STATUS, true),
       api.search(params).then(resp=>{
          commit(types.COM_LOADING_STATUS, false);
          commit(types.GET_SEARCH_ARTICLE_LIST, resp.result);
       }).catch(error=>{
          commit(types.COM_LOADING_STATUS, false);
       })
    },
    setSearchPageNo({commit,state},pageNo){
      commit(types.MODIFY_SEARCH_ARTICLE_LIST_PAGE_NO, pageNo)
    }
}

const getters = {
    searchArticleList: state => state.searchArticleList,
    searchTotal : state => state.searchTotal,
    searchPageNo : state => state.searchPageNo,
    searchPageSize : state => state.searchPageSize
}

const mutations = {
    [types.GET_SEARCH_ARTICLE_LIST](state, res) {
        state.searchArticleList = res.list
        state.searchTotal = res.total
        state.searchPageNo = res.pageNum
        state.searchPageSize = res.pageSize
    },
    [types.MODIFY_SEARCH_ARTICLE_LIST_PAGE_NO](state,res){
        state.searchPageNo = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
