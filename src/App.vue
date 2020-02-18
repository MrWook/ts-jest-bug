<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ComponentLoader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import ComponentLoader from './components/ComponentLoader.vue'
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  components: {
    ComponentLoader,
  },
})
export default class App extends Vue {}
</script>

