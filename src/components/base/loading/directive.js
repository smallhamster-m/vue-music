//自定义指令
import Loading from './Loading.vue'
import { createApp } from 'vue'
const relativeCls = 'g-relative'
const directives = {
  mounted(el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    //动态参数
    const title = binding.arg
    if (typeof title !== undefined) {
      el.instance.setTitle(title)
    }
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    //动态参数
    const title = binding.arg
    if (typeof title !== undefined) {
      el.instance.setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}

function append(el) {
  const style = getComputedStyle(el)
  if (['fixed', 'absolute,', 'relative'].indexOf(style.position) === -1) {
    el.classList.add(relativeCls)
  }
  el.appendChild(el.instance.$el)
}
function remove(el) {
  el.removeChild(el.instance.$el)
  el.classList.remove(relativeCls)
}

export default directives
