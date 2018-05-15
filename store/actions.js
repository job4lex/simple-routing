import getters from './getters'
import {
    CHANGE_TITLE,
    CHANGE_BG,
    POPULATE_SHOPPING_LISTS,
    POPULATE_POSTS
} from './mutation_types'

import api from '../api'

export default {
    changeTitle: (store, data) => {
        store.commit(CHANGE_TITLE, data)
        store.dispatch('updateList', data.id)
    },
    changeBg: (store, data) => {
        store.commit(CHANGE_BG, data)
        store.dispatch('updateList', data.id)
    },
    populateShoppingLists: ({ commit }) => {
        api.fetchShoppingLists().then((response) => {
            commit(POPULATE_SHOPPING_LISTS, response.data)
        })
    },
    updateList: (store, id) => {
        let shoppingList = getters.getListById(store.state, id)
        api.updateShoppingList(shoppingList)
    },
    createShoppingList: (store, shoppinglist) => {
        api.addNewShoppingList(shoppinglist).then(() => {
            store.dispatch('populateShoppingLists')
        })
    },
    deleteShoppingList: (store, id) => {
        api.deleteShoppingList(id).then(() => {
            store.dispatch('populateShoppingLists')
        })
    },
    populatePosts: ({
        commit
    }) => {
        api.fetchPosts().then((response) => {
            commit(POPULATE_POSTS, response.data)
        })
    },

}