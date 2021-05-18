import { computed, ref } from 'vue'
export default function shortcut(props, groupRef) {
  const scrollRef = ref(null)
  const ANCHOR_HEIGHT = 18
  const shortcutList = computed(() => {
    return props.singers.map((group) => {
      return group.title
    })
  })

  const touch = {}

  function onShortcutTouchStart(e) {
    touch.anchorIndex = parseInt(e.target.dataset.index)
    touch.startY = e.touches[0].pageY
    scrollTo(touch.anchorIndex)
  }
  function onShortcutTouchMove(e) {
    touch.endY = e.touches[0].pageY
    const delta = Math.floor((touch.endY - touch.startY) / ANCHOR_HEIGHT)
    let index = touch.anchorIndex + delta
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    scrollTo(index)
  }
  function scrollTo(index) {
    if (isNaN(index)) {
      return
    }
    const targetEl = groupRef.value.children[index]
    scrollRef.value.scroll.scrollToElement(targetEl, 0)
  }

  return {
    shortcutList,
    onShortcutTouchStart,
    onShortcutTouchMove,
    scrollRef,
  }
}
