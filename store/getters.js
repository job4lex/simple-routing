import _ from 'underscore'

export default {
    getPosts: (state) => state.posts,
    getPostById: (state, id) => {
        return _.findWhere(state.posts, { id: id })
    },
}
