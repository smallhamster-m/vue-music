<template>
  <div id="nav">
    <music-header></music-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import MusicHeader from '@/components/header/MusicHeader'
import Tab from '@/components/tab/Tab'
export default {
  components: {
    MusicHeader,
    Tab,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss"></style>
