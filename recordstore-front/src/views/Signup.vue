<template>
<div class="uk-section uk-section-secondary">
<div class="uk-container uk-container-small">
<h3>This is the Signup page</h3>
<form @submit.prevent="signup">
<div v-if="error">{{error}}</div>
 <div class="uk-margin">
    <input type="email" v-model="email" class="uk-input uk-form-width-large" placeholder="Email address">
</div>
 <div class="uk-margin">
    <input type="password" v-model="password" class="uk-input uk-form-width-large" placeholder="Password">
</div>
<button type="submit" class="uk-button uk-button-primary uk-button-medium">Submit</button>
<div>
<router-link to="/signup" class="uk-button uk-button-link">Signup</router-link>
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