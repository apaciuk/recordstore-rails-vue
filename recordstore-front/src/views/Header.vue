<template>
  <nav class="uk-navbar-container" uk-navbar="boundary-align: true; align: center;">
    <div class="uk-navbar-left">
    <ul class="uk-navbar-nav">
    <li>
    <router-link to="/" class="uk-navbar-item uk-logo"> Home</router-link
    </li>
         <li>
         <router-link to="/about" class="uk-navbar-item">About</router-link>
    </li>
           
        </ul>
    </div>

    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <li>
            <form class="uk-search uk-search-default">
    <span uk-search-icon></span>
    <input class="uk-search-input" type="search" placeholder="Search...">
</form>
            
             
     </li>
        </ul>
    </div>
</nav>
</div>
</template>