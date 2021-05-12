<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Vue Music</h1>
  </div>
</template>

<script>
export default {
  name: 'MusicHeader',
  components: {},
}
</script>
<style scoped lang="scss">
.header {
  height: 44px;
  color: $color-theme;
  text-align: center;
  .icon {
    display: inline-block;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    vertical-align: top;
    @include bg-image('logo');
    background-size: 30px 30px;
  }
  .text {
    display: inline-block;
    // vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
}
</style>
