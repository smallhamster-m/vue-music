<template>
  <div class="tab">
    <router-link
      class="tab-item"
      v-for="item in titles"
      :key="item.name"
      :to="item.path"
      ><span class="tab-link">{{ item.name }}</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'Tab',
  components: {},
  data() {
    return {
      titles: [
        {
          name: '推荐',
          path: '/recommend',
        },
        {
          name: '歌手',
          path: '/singer',
        },
        {
          name: '排行',
          path: '/rank',
        },
        {
          name: '搜索',
          path: '/search',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      color: $color-text-l;
      padding: 5px;
    }
    &.router-link-active {
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
