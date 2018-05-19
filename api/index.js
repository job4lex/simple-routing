import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const PostsResource = Vue.resource('http://localhost:5000/' + 'posts{/id}')

export default {
    fetchPosts: () => {
        return PostsResource.get()
    },
    addNewPost: (data) => {
        return PostsResource.save(data)
    },
    updatePost: (data) => {
        return PostsResource.update({
            id: data.id
        }, data)
    },
    deletePost: (id) => {
        return PostsResource.remove({
            id: id
        })
    }
}
