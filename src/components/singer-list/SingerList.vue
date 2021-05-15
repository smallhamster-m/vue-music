<template>
  <scroll
    class="singer-list"
    ref="scrollRef"
    :probe-type="3"
    @scroll="onScroll"
  >
    <ul ref="groupRef">
      <li class="group" v-for="group in singers" :key="group.title">
        <h2 class="title">{{ group.title }}</h2>
        <ul>
          <li class="item" v-for="item in group.list" :key="item.id">
            <img class="avatar" :src="item.pic" alt="" />
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="fixed" :style="fixedStyle" v-show="currentTitle">
      <div class="fixed-title">{{ currentTitle }}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../base/scroll/Scroll'
import fixedTitle from './fixed-title'
export default {
  name: 'SingerList',
  components: { Scroll },
  props: {
    singers: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup(props) {
    const { groupRef, onScroll, currentTitle, fixedStyle } = fixedTitle(props)

    return {
      groupRef,
      onScroll,
      currentTitle,
      fixedStyle,
    }
  },
}
</script>
<style lang="scss" scoped>
.singer-list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .group {
    padding-bottom: 30px;
    .title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
  .fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
  }
}
</style>
