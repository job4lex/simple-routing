import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
    posts: [

    ],
}
const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        getters,
        actions,
    })
}

export default createStore