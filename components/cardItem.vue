<template>
    <div class="card">
        <div class="close" @click="deletePost(id)">
          x
        </div>
        <h3 contenteditable="true" @blur="onChange($event, 'Title')">
            {{post.title}}
        </h3>
        <p contenteditable @blur="onChange($event, 'Content')">{{post.content}}</p>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "underscore";
export default {
  props: ["post", "id"],
  methods: _.extend(
    {
      onChange(e, type) {
        if (type === "Title" && e.target.innerText !== this.post.title) {
          this.changeTitle({ title: e.target.innerText, id: this.post.id });
        }
        if (type === "Content" && e.target.innerText !== this.post.content) {
          this.changeContent({ content: e.target.innerText, id: this.post.id });
        }
      }
    },
    mapActions(["deletePost", "changeTitle", "changeContent"])
  )
};
</script>

<style lang="sass">
  .card
    padding: 1rem
    border: 1px solid #666
    flex: 0 0 auto
    max-width: 23%
    min-width: 20rem
    width: 100%
    margin: 1rem
    position: relative

  .close
    position: absolute
    right: 0
    top: 0
    line-height: 0.5
    cursor: pointer
    padding: 1rem

</style>

