<template>
  <div class="recommend">
      推荐
  </div>
</template>

<script>
import {getRecommend} from '@/api/recommend'
export default {
  name: "Recommend",
  components: {},
  data() {
    return {
      sliders:[],
      albums: []
    }
  },
  async created() {
   const res = await getRecommend()
   this.sliders = res.sliders
   this.albums = res.albums
  },
}
</script>
<style scoped>

</style>