import _ from 'underscore'

export default {
    getPosts: (state) => state.posts,
    getLists: (state) => state.shoppinglists,
    getListById: (state, id) => {
        return _.findWhere(state.shoppinglists, { id: id })
    },
}