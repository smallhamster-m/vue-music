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
    <div
      class="shortcut"
      @touchstart.stop.prevent="onShortcutTouchStart"
      @touchmove.stop.prevent="onShortcutTouchMove"
      @touchend.stop.prevent="onShortcutTouchEnd"
    >
      <ul>
        <li
          class="item"
          v-for="(item, index) in shortcutList"
          :data-index="index"
          :key="item"
          :class="{ current: currentIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../base/scroll/Scroll'
import fixedTitle from './fixed-title'
import shortcut from './shortcut'
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
    const { groupRef, onScroll, currentTitle,currentIndex, fixedStyle } = fixedTitle(props)

    const { shortcutList, onShortcutTouchStart, scrollRef,onShortcutTouchMove } = shortcut(props,groupRef)

    return {
      groupRef,
      onScroll,
      currentTitle,
      currentIndex,
      fixedStyle,
      shortcutList,
      onShortcutTouchStart,
      scrollRef,
      onShortcutTouchMove
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
  .shortcut {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;
      &.current {
        color: $color-theme;
      }
    }
  }
}
</style>
