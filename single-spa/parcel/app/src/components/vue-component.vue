<template>
  <div>
    <div>vue 组件</div>
    <div id="parcel">

    </div>
  </div>
</template>

<script>
import ReactComponent from './react-component'
// import React from 'react'
import ReactDOM from 'react-dom'
export default {
  name: 'vue',
  props: {
    msg: String
  },
  mounted() {
    const comp = ReactComponent;
    ReactDOM.render(comp(), document.getElementById('parcel'))
  }
  
}
</script>

