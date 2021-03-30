<template>
  <div id="app">
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
<ul class="uk-navbar-nav">
            <li class="uk-active"> <router-link to="/">Home</router-link> |</li>
            <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
<li> <router-link to="/about">About</router-link></li>
</ul>
</div>
</nav>
</div>
</template>
<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
export default {
  name: 'App',
};
</script>
<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>