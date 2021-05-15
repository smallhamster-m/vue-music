import { ref, computed, watch, nextTick } from 'vue'

export default function fixedTitle(props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const listHeights = ref([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distans = ref(0)
  const currentTitle = computed(() => {
    const currentGroup = props.singers[currentIndex.value]
    if (scrollY.value < 0) {
      return ''
    }
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const diff =
      distans.value > 0 && distans.value < TITLE_HEIGHT
        ? distans.value - TITLE_HEIGHT
        : 0
    return {
      transform: `translate3d(0,${diff}px,0)`,
    }
  })

  watch(
    () => props.singers,
    async () => {
      await nextTick()
      calculate()
    }
  )

  watch(scrollY, (newY) => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const topHeight = listHeightsVal[i]
      const bottomHeight = listHeightsVal[i + 1]
      if (newY >= topHeight && newY <= bottomHeight) {
        currentIndex.value = i
        distans.value = bottomHeight - newY
      }
    }
  })
  
  function calculate() {
    const list = groupRef.value.children
    const listHeightsVal = listHeights.value
    listHeightsVal.length = 0
    let heigth = 0
    listHeightsVal.push(heigth)
    for (let i = 0; i < list.length; i++) {
      heigth += list[i].clientHeight
      listHeightsVal.push(heigth)
    }
  }

  function onScroll(pos) {
    scrollY.value = -pos.y
  }
  return {
    groupRef,
    listHeights,
    onScroll,
    currentTitle,
    currentIndex,
    fixedStyle,
  }
}
