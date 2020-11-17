<template>
  <div id="app">
    <button>按钮</button>
    <div class="test"></div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view></router-view> -->
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  .test {
    width: 50px;
    height: 50px;
    background: linear-gradient(to right bottom, transparent 48%, #f69d3c 49%);
  }
}
</style>
