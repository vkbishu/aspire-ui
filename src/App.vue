<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// style
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import '@/assets/css/style.scss'
export default {
  name: "App"
}
</script>
