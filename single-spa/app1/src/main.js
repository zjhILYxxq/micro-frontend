import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const appOptions = {
  render: (h) => h(App)
};

let vueInstance;

if (!window.__SINGLE_SPA__) {
  new Vue(appOptions).$mount('#app')
}

export function bootstrap () {
  console.log('app1 bootstrap')
  return Promise.resolve().then(() => {

  });
}

export function mount (props) {
  console.log('app1 mount', props)
  return Promise.resolve().then(() => {
    vueInstance = new Vue(appOptions)
    vueInstance.$mount('#microApp')
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




