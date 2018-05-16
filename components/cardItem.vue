<template>
    <div class="card">

        <h3>
            {{post.title}}
        </h3>
        <p>{{post.content}}</p>

    </div>
</template>

<script>
export default {
  props: ["post", "id"]
};
</script>

<style lang="sass">
.card
  padding: 1rem
  border: 1px solid #666
  flex: 0 0 auto
  min-width: 20rem
  margin: 1rem

</style>

