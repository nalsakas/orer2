<template>
  <nav class="top-navigation">
    <router-link :to="{ name: 'linemap' }" class="top-navigation-link"
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
    margin-top: 50px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .router-view {
  }
  .top-navigation {
    display: flex;
    justify-content: flex-start;
    font-size: 2rem;

    .top-navigation-link {
      font-size: inherit;
      display: inline-block;
      padding: 10px 15px;
      margin-left: 10px;
      text-align: center;
      border-left: 1px solid grey;
      background: white;
      color: black;
      box-shadow: 1 1 2px black;

      &:nth-child(1) {
        margin-left: 0;
        border-left: none;
      }
    }
  }
</style>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: Verdana, sans-serif;
    box-sizing: border-box;
  }
  body {
    height: 100vw;
    background: url('./bg.png');
  }
  h1 {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }
</style>
