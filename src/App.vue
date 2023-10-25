<!-- LayoutDefault.vue -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <SideNav :drawer="leftDrawerOpen" />
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import SideNav from './components/SideNav.vue';

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld,
    SideNav
  },

  setup() {
    const leftDrawerOpen = ref(false);  // controla a visibilidade do drawer
    return {
      leftDrawerOpen
    }
  }
}
</script>