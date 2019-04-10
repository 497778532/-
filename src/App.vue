<template>
  <div id="app">
    <top></top>
    <my-header></my-header>
    <my-nav></my-nav>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import top from '@/components/top'
  import myHeader from '@/components/head'
  import myNav from '@/components/nav'
  import myFooter from '@/components/myFooter'
  export default {
    data() {
      return {}
    },
    components:{
      top,
      myHeader,
      myNav,
      myFooter
    }

  }
</script>

<style>

</style>
