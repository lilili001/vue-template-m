import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {
    count:1,
    silicon_company:'piedpiper'
}

const mutations={
    add(state){
        state.count+=1;
    },
    reduce(state){
        state.count-=1;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    modules: {
       // app1
    }
})