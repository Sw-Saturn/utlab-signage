<template>
  <div id="app">
    <section class="hero-1 is-fullheight has-background-grey" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN);">
      <div class="hero-body">
        <div class="tile is-parent is-vertical">
            <Clock/>
            <Weather city-name="Kyoto" country-name="jp"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Clock from "@/components/Clock";
  import Weather from "@/components/Weather";

  export default {
    name: 'App',
    components: {
        Weather,
        Clock
    },
  }
</script>

<style lang="scss">
    $hero-body-padding: 100rem 15rem;
    $size-1: 5rem;
    $size-2: 4.5rem;
    @import "~bulma/bulma";
    #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    touch-action: none;
    color: #2c3e50;
    }
    .hero-1{
    @extend .hero;
    background-size: cover;
    background-position: center;
    }
    .widget{
        background: rgba(0, 0, 0, 0.5);
        width: 475px;
        height: 194px;
    }
</style>
