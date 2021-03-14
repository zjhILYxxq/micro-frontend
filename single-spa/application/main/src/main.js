import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
const  { registerApplication, start } =  require('single-spa');

Vue.use(VueRouter)

Vue.config.productionTip = false

window.__SINGLE_SPA__ = true

const router = new VueRouter({
  mode: 'history',
  routes: []
});

// 远程加载子应用
function createScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  })
}

function loadApp(url, globalVar, entrypoints) {
  return async () => {
    for(let i = 0; i < entrypoints.length; i++) {
      await createScript(url + entrypoints[i])
    }
    return window[globalVar]
  }
}
// 子应用列表
const apps = [
  {
    // 子应用名称
    name: 'app1',
    // 子应用加载函数，是一个promise
    app: loadApp('http://localhost:8081', 'app1', [ "/js/chunk-vendors.js", "/js/app.js" ]),
    // 当路由满足条件时（返回true），激活（挂载）子应用
    activeWhen: location => location.pathname.startsWith('/app1'),
    // 传递给子应用的对象
    customProps: {}
  },
  {
    name: 'app2',
    app: loadApp('http://localhost:8082', 'app2', [ "/js/chunk-vendors.js", "/js/app.js" ]),
    activeWhen: location => location.pathname.startsWith('/app2'),
    customProps: {}
  },
  {
    // 子应用名称
    name: 'app3',
    // 子应用加载函数，是一个promise
    app: loadApp('http://localhost:3000', 'app3', ["/main.js"]),
    // 当路由满足条件时（返回true），激活（挂载）子应用
    activeWhen: location => location.pathname.startsWith('/app3'),
    // 传递给子应用的对象，这个很重要，该配置告诉react子应用自己的容器元素是什么，这块儿和vue子应用的集成不一样，官网并没有说这部分，或者我没找到，是通过看single-spa-react源码知道的
    customProps: {}
  }
]

// 注册子应用
for (let i = apps.length - 1; i >= 0; i--) {
  registerApplication(apps[i])
}

new Vue({
  router,
  render: h => h(App),
  mounted() {
    // 启动
    start()
  },
}).$mount('#app')
