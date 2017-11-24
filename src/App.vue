<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">CorgiChat!</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Navigation </span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" @click.native="hideMenu" to="/">Home</router-link>
        <router-link class="mdl-navigation__link" @click.native="hideMenu" to="/about">About</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite');

export default {
  name: 'app',
  methods: {
    hideMenu() {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible');
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.3.0/material.cyan-green.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  text-align: center;
  margin-top: 40px;
}

</style>
