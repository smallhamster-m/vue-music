<template>
  <div id="nav">
    <music-header></music-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>
<script>
import MusicHeader from '@/components/header/MusicHeader'
import Tab from '@/components/tab/Tab'
export default {
  components: {
    MusicHeader,
    Tab
  },
  data() {
    return {
      
    }
  },
}


</script>
<style lang="scss"></style>
