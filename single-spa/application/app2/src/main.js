import { createApp  } from 'vue'
import App from './App.vue'

let vueInstance
  
if (!window.__SINGLE_SPA__) {
    createApp(App).mount('#app')
}
  
export function bootstrap () {
    console.log('bootstrap')
    return Promise.resolve().then(() => {
        //
    })
}
  
export function mount (props) {
    console.log('app2 mount', props)
    return Promise.resolve().then(() => {
        vueInstance = createApp(App);
        vueInstance.mount('#microApp');
    });
}
  
export function unmount () {
    console.log('app2 unmount')
    return Promise.resolve().then(() => {
        vueInstance.unmount();
    });
}
  
export function update () {
    console.log('app2 update');
}

