<template>
  <div>
    <div class="top">
      <img src="../assets/corgis/corgi-tonge.gif" alt="corgi_tongue">
      <h3>Welcome to Corgi Chat!</h3>
    </div>
    <!-- Write comment section -->
    <comment-component placeholder="Put your comment here!"></comment-component>
    <!-- // Write comment section -->
    <!-- All comments section -->
    <timeline-component></timeline-component>
    <!-- // All comments section -->
  </div>
</template>

<script>
  import CommentComponent from './CommentComponent';
  import TimelineComponent from './TimelineComponent';

  export default {
    components: {
      'comment-component': CommentComponent,
      'timeline-component': TimelineComponent,
    },
    methods: {

    },
  };
</script>

<style scoped>
  div.top img {
    width: 50%;
  }
</style>

