<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
import { onMounted, ref, onUnmounted } from 'vue'
export default {
  name: 'Scroll',
  components: {},
  props: {
    click: {
      type: Boolean,
      default: true,
    },
    probeType: {
      type: Number,
      default: 0,
    },
  },
  emits:['scroll'],
  setup(props,{emit}) {
    const rootRef = ref(rootRef)
    const scroll = ref(null)
    onMounted(() => {
      const scrollVal = (scroll.value = new BScroll(rootRef.value, {
        observeDOM: true,
        ...props,
      }))

      if (props.probeType > 0) {
        scrollVal.on('scroll',(pos) => {
          emit('scroll',pos)
        })
      }
    })
    onUnmounted(() => {
      scroll.value.destroy()
    })
    return {
      rootRef,
      scroll,
    }
  },
}
</script>
<style scoped></style>
