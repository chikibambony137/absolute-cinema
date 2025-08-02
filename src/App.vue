<script>
  import Menu from './components/Menu.vue';

  export default {
    components: { Menu },
  }
</script>

<template>
  <div class="main">
    
    <Menu/>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
