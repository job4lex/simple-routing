import getters from './getters'
import * as types from './mutation_types'

export default {
    [types.CHANGE_TITLE](state, data) {
        getters.getPostById(state, data.id).title = data.title
    },
    [types.CHANGE_CONTENT](state, data) {
        getters.getPostById(state, data.id).content = data.content
    },
    [types.CHANGE_BG](state, data) {
        getters.getListById(state, data.id).bgcolor = data.bgcolor
    },
    [types.POPULATE_SHOPPING_LISTS](state, lists) {
        state.shoppinglists = lists
    },
    [types.POPULATE_POSTS](state, posts) {
        state.posts = posts
    },

}
