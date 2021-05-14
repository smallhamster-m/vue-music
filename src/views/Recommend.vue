<template>
  <div class="recommend">
    <scroll class="recommend-content" >
      <div>
        <div class="swiper-content">
          <swiper :sliders="sliders"></swiper>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="list-item" v-for="item in albums" :key="item.id">
              <div class="icon">
                <img
                  width="60"
                  height="60"
                  src="../assets/images/default.png"
                  alt=""
                />
              </div>
              <div class="text">
                <h2 class="name">{{ item.username }}</h2>
                <p class="title">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getRecommend } from '@/api/recommend'
import Swiper from '@/components/base/swiper/Swiper'
import Scroll from '@/components/base/scroll/Scroll'
export default {
  name: 'Recommend',
  components: { Swiper, Scroll },
  data() {
    return {
      sliders: [],
      albums: [],
    }
  },
  async created() {
    const res = await getRecommend()
    this.sliders = res.sliders
    this.albums = res.albums
  },
}
</script>
<style lang="scss" scoped>
.recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .recommend-list {
      .list-title {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .list-item {
        display: flex;
        padding: 0 20px 20px 20px;
        .icon {
          flex: 0 0 60px;
          padding-right: 20px;
        }
        .text {
          font-size: $font-size-medium;
          display: flex;
          flex: 1;
          justify-content: center;
          flex-direction: column;
          line-height: 20px;
          overflow: hidden;
          .name {
            color: $color-text;
            margin-bottom: 10px;
          }
          .title {
            color: $color-text-d;
            @include no-wrap();
          }
        }
      }
    }
  }
}
</style>
