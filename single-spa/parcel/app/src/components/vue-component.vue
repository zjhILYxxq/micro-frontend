<template>
  <div>
    <div>vue 组件: <input v-model="val" /></div>
    <div id="parcel1"></div>
    <div id="parcel2"></div>
  </div>
</template>

<script>
import ReactComponent, { bootstrap, mount, unmount, update} from './react-component'
import { mountRootParcel } from 'single-spa'
import ReactDOM from 'react-dom'
export default {
  name: 'vue',
  data() {
    return {
      val: '123'
    }
  },
  mounted() {
    this.parcel = mountRootParcel({bootstrap, mount, unmount, update}, {
      val: this.val,
      domElement: document.getElementById('parcel1')
    })
    ReactDOM.render(ReactComponent({val: this.val}), document.getElementById('parcel2'))

  },
  updated() {
    if (this.parcel && this.parcel.update) {
      this.parcel.update({
        val: this.val,
        domElement: document.getElementById('parcel1')
      })
    }
    ReactDOM.render(ReactComponent({val: this.val}), document.getElementById('parcel2'))
  },
  beforeDestory() {
    if (this.parcel && this.parcel.unmount) {
      this.parcel.unmount({
        domElement: document.getElementById('parcel1')
      })
    }
    ReactDOM.unmountComponentAtNode(document.getElementById('parcel2'));
  }
  
}
</script>

