import Vue from 'vue'

Vue.config.productionTip = false


let vueInstance;

if (!window.__SINGLE_SPA__) {
  import('./App').then(res => {
    new Vue({
      render: h => h(res.default)
    }).$mount('#app')
  })
  
}

export function bootstrap () {
  console.log('app1 bootstrap')
  return Promise.resolve().then(() => {

  });
}

export function mount (props) {
  console.log('app1 mount', props)
  return Promise.resolve().then(() => {
    import('./App').then(res => {
      vueInstance = new Vue({
        render: h => h(res.default)
      })
      vueInstance.$mount('#microApp')
    })
  })
}

export function unmount () {
  console.log('app1 unmount')
  return Promise.resolve().then(() => {
    if (!vueInstance.$el.id) {
      vueInstance.$el.id = 'microApp'
    }
    vueInstance.$destroy()
    vueInstance.$el.innerHTML = ''
  })
}

export function update () {
  console.log('app1 update');
}




