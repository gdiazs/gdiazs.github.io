<script>
import '@/assets/tailwind.scss'
import DefaultLayout from './components/DefaultLayout.vue'
export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>
<template>
  <div id="app">
    <default-layout>
      <router-view />
    </default-layout>
  </div>
</template>
