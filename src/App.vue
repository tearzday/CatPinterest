<template>
    <Header/>
    <router-view></router-view>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    components: {
      Header
    },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
  width: 1320px;
  margin: 0 auto;
}
  
</style>