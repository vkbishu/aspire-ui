<template>
    <base-layout>
      <router-view></router-view>
  </base-layout>
</template>

<script>
// Application Bootstrapper
// Load all global configuration here
import {mapActions} from "vuex";
export default {
  name: 'Bootstrapper',
  created(){
    this.getAppState();
  },
  methods: {
    ...mapActions(['getAppState'])
  }
}
</script>
