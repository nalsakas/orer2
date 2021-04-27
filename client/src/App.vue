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
  .container {
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .router-view {
  }
  .top-navigation {
    display: flex;
    justify-content: flex-start;
    font-size: 1.2rem;
    box-shadow: 0px 2px 5px black;
    background: rgba(255, 255, 255, 1);
    height: 50px;

    .top-navigation-link {
      display: inline-block;
      padding: 10px 15px;
      border-right: 1px solid white;
      text-align: center;
      background: rgb(218, 93, 71);
      color: rgb(255, 255, 255);
    }
    .router-link-active {
      color: white;
      border-right: 1px solid black;
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
