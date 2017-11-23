<template>
  <img src="@assets/corgis/corgi-tonge.gif" alt="corgi_tongue">
</template>

<script>
  export default {
    methods: {
      displayDetails(id) {
        this.$router.push(
          {
            name: 'detail',
            params: { id },
          },
        );
      },
    },
  };
</script>

<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }
</style>

