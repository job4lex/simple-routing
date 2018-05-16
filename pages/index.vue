<template>
  <section class="container">

    <div class="list-items">
        <div class="card card-add" @click="addNewPost">
          <span>Add post</span>
        </div>
        <card-item v-for="post in posts" :post="post" :id="post.id" :key="post.id"></card-item>
    </div>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'
import cardItem from "~/components/cardItem.vue";
import { mapState } from "vuex";
import { mapGetters, mapActions } from "vuex";
import _ from "underscore";

export default {
  components: {
    cardItem
  },
  fetch({ store }) {
    store.commit("increment");
  },
  computed: mapGetters({
    posts: "getPosts"
  }),
  methods: _.extend({}, mapActions(["populatePosts", "createPost"]), {
    addNewPost() {
      let data = {
        title: "Enter your title",
        content: "Type content here"
      };
      this.createPost(data);
    }
  }),
  mounted() {
    this.populatePosts();
  }
};
</script>

<style lang="sass">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.title
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px

.list-items
  display: flex
  flex-wrap: wrap

.card-add
  display: block
  position: relative
  display: flex
  justify-content: center
  align-items: center
  text-decoration: none
  & span
    position: absolute
    left: -9999px
  &:before
    visibility: visible
    content: '+'
    font-size: 3rem
    color: #333
    line-height: 1

</style>
