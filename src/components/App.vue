<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from    './Header.vue'
  import 'jquery';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-loader';

  export default {
      components: {
          appHeader: Header
      }
  }
  </script>