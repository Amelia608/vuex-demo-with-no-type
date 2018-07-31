<template>
  <div id="app">
    <div class="header" v-show="headShow">
      <h3>我是头部信息</h3>
    </div>
    <button @click="show">显示头部信息</button>
    <button @click="hide">隐藏头部信息</button>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
   computed:mapGetters([
     "headShow"
   ]),
    methods: {
      show() {
        this.$store.dispatch("ShowHead")
      },
      hide() {
        this.$store.dispatch("HideHead")
      }
    },
    mounted() {
      console.log(this.$store);
    }
  
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
