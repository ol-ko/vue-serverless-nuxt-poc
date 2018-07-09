<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Details</router-link> |
      <router-link to="/location">Location</router-link>
    </div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  *, :after, :before {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px 0;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
         color: #42b983;
      }
    }
  }

  article {
    max-width: 800px;
    margin: 2em auto;
    display: block;
  }

  .article-body {
    figure {
      float: left;
      margin: 0 2em 2em 0;
      padding: 0;
    }
  }

  img {
    max-width: 100%;
  }
</style>
