<template>
  <nav class="top-navigation">
    <router-link :to="{ name: 'linechart' }" class="top-navigation-link"
      >Home</router-link
    >
    <router-link
      :to="{ name: 'orerchart', params: { lineId: 1 } }"
      class="top-navigation-link"
      >Orer</router-link
    >
  </nav>

  <div class="container">
    <div class="router-view">
      <router-view :line-id="$route.params.lineId"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        title: 'ORER'
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .router-view {
  }
  .top-navigation {
    display: flex;
    justify-content: flex-start;
    font-size: 1.2rem;
    box-shadow: 0px 2px 5px black;
    background: #252423;
    height: 50px;

    ::v-deep(.top-navigation-link) {
      display: inline-block;
      padding: 10px 15px;
      border-right: 1px solid white;
      text-align: center;
      background: #c73a3a;
      color: #f6f4f2;
      &:hover {
        background: #ff6b6b;
      }
    }
    ::v-deep(.router-link-active) {
      background: #c73a3a;
      border-bottom: #252423 2px solid;
    }
  }
</style>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    font-family: Verdana, sans-serif;
    box-sizing: border-box;
  }
  body {
    background: url('./bg.png');
  }
  h1 {
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
  }
</style>
