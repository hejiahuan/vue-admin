import Vue from "vue"
import Vuex from 'vuex'

import persistedState from 'vuex-persistedstate'

import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

Vue.use(Vuex)

const state={
    //整个大路由
    routers:[],
    silderMenu:[],
    tagsList: [], //打开的标签页个数
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [
        persistedState({ storage: window.sessionStorage })
    ]
})


