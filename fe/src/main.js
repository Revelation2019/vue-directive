// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ELEMENT)
// el-select 下拉加载更多
Vue.directive('loadmore', {
  inserted (el, binding) {
    // 获取element-ui定义好的scroll盒子
    const SELECTDOWN_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
    SELECTDOWN_DOM.addEventListener('scroll', function () {
      const CONDITION = parseInt(this.scrollHeight - this.scrollTop) === this.clientHeight
      if (CONDITION) {
        binding.value()
      }
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
