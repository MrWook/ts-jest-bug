<template>
  <div class="hello">
    <GloballyLoaded/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({})
export default class HelloWorld extends Vue {
}
</script>

