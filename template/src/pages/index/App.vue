<template>
  <div id="wrapper" v-if="isShow">
      <h1>hello,world</h1>
      {{#router}}
      <router-view></router-view>
      {{/router}}
    </div>
</template>

<script>
  export default {

  };
</script>

<style lang="less" type="text/less">
  @import "~styles/base";
  @import "~styles/main";
</style>
