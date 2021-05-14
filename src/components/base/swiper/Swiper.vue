<template>
  <div class="swiper">
    <van-swipe
      class="swiper-content"
      :stop-propagation="false"
      :autoplay="2000"
      @change="onChange"
    >
      <van-swipe-item
        class="swiper-item"
        v-for="item in sliders"
        :key="item.id"
      >
        <a :href="item.link">
          <img :src="item.pic" />
        </a>
      </van-swipe-item>
      <template #indicator>
        <div class="dots-wrapper">
          <span
            class="dot"
            v-for="(item, index) in sliders"
            :key="item.id"
            :class="{ active: currentPageIndex === index }"
          >
          </span>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import { ref } from 'vue'
export default {
  name: 'Swiper',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props: {
    sliders: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup() {
    const currentPageIndex = ref(0)
    const onChange = (index) => {
      currentPageIndex.value = index
    }

    return {
      currentPageIndex,
      onChange,
    }
  },
}
</script>
<style lang="scss" scoped>
.swiper {
  .swiper-content {
    .swiper-item {
      width: 100%;
      a {
        display: inline-block;
        width: 100%;
        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
    .dots-wrapper {
      position: absolute;
      left: 50%;
      bottom: 12px;
      line-height: 12px;
      transform: translateX(-50%);
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $color-text-l;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: $color-text-ll;
        }
      }
    }
  }
}
</style>
