<template>
  <div id="gongsi_main">
    <div class="gongsi_main_inner">
      <router-view></router-view>
       <my-left></my-left>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import myLeft from '@/components/list/myLeft'
  export default {
    data() {
      return {}
    },
    components:{
       myLeft
    }

  }
</script>

<style scoped>
  #gongsi_main {
    width: 100%;
    padding-top: 10px;
  }
  #gongsi_main .gongsi_main_inner {
    width: 960px;
    margin: auto;
  }
</style>
