<template>
    <div id="public">
      <my-banner></my-banner>
      <my-search></my-search>
      <my-main></my-main>
    </div>
</template>
<script>
  import myBanner from '@/components/myBanner'
  import mySearch from '@/components/mySearch'
  import myMain from '@/components/myMain'
  export default {
    data() {
      return {}
    },
    components:{
      myBanner,
      mySearch,
      myMain,
    }
  }
</script>
<style scoped>

</style>
