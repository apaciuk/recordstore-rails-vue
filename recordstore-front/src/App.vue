<template>
<div class="uk-container" id="app">
<Header />
<router-view></router-view>
</div>
</template>
<script>
import Header from './views/Header'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
export default {
  name: 'App',
  components: {
  Header
  }
};
</script>
<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>