<template>
  <nav id="navbar" class="uk-navbar-container" uk-navbar="boundary-align: true; align: center;">
    <div class="uk-navbar-left">
     <ul class="uk-navbar-nav">
            <li>
            <form class="uk-search uk-search-default">
    <span uk-search-icon></span>
    <input class="uk-search-input" type="search" placeholder="Search...">
</form>
</li>
 </ul>
   
    </div>

    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
           <li>
    <router-link to="/" class="uk-navbar-item"> Sign Out</router-link>
    </li>
           <li>
    <router-link to="/" class="uk-navbar-item"> Artists</router-link>
    </li>
       <li>
    <router-link to="/" class="uk-navbar-item"> Records</router-link>
    </li>
   
    <li>
    <router-link to="/" class="uk-navbar-item"> Sign In</router-link>
    </li>
         <li>
         <router-link to="/signup" class="uk-navbar-item">Register</router-link>
    </li>
           
        </ul> 
    </div>
</nav>
</div>
</template>

<style scoped>
#navbar {
background: #494f5d;
}
form.uk-search {
margin-left: 30px;
}
a.uk-navbar-item {

}
</style>