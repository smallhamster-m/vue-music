<template>
  <div class="singer">
    <singer-list :singers="singers"></singer-list>
  </div>
</template>

<script>
import { getSingerList } from '@/api/singer'
import SingerList from '@/components/singer-list/SingerList'
export default {
  name: 'Singer',
  components: { SingerList },
  data() {
    return {
      singers: [],
    }
  },
  async created() {
    const res = await getSingerList()
    this.singers = res.singers
  },
}
</script>
<style scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
