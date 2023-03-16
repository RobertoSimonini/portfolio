<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
export default {
  name: 'App',
  components: {AppHeader, HomePage},

  
}

</script>


<template>
    <AppHeader />
    <RouterView />
</template>


<style lang="scss">

body {
  background-color: #212529 !important;
}

</style>