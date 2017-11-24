<template>
  <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col">
        <form action="#">
          <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="input-comment">
            <label class="mdl-textfield__label" for="comment">{{ placeholder }}</label>
          </div>
        </form>
      </div>
      <div class="mdl-cell mdl-cell--1-col">
        <button
          id="add-comment"
          class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"
          v-on:click="addComment">
          <i class="material-icons">add</i>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  props: ['placeholder'],
  methods: {
    addComment() {
      const inputComment = document.querySelector('#input-comment');


    },
  },
};
</script>

<style scoped>

</style>


