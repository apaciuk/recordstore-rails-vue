<template>
<div class="uk-section uk-section-primary">
<div class="uk-container uk-container-small">
<h3>Register</h3>
<form @submit.prevent="signup">
<div v-if="error">{{error}}</div>
 <div class="uk-margin">
    <input type="email" v-model="email" class="uk-input uk-form-width-large" placeholder="Email address">
</div>
 <div class="uk-margin">
    <input type="password" v-model="password" class="uk-input uk-form-width-large" placeholder="Password">
</div>
 <div class="uk-margin">
  <input type="password" v-model="password_confirmation" class="uk-input uk-form-width-large" id="password_confirmation" placeholder="Password Confirmation">
</div>
<div class="uk-margin">
<button type="submit" class="uk-button uk-button-danger">Register</button>
</div>
<div>
<br />
<router-link to="/signin" class="uk-button uk-button-secondary">Sign In</router-link>
</div>
</form>
</div>
</div>
</template>

<script>
export default {
  name: 'Signup',
  components: {
  
  }
}
</script>
