<template>
<div class="uk-section uk-section-primary">
<div class="uk-container uk-container-small">
<h3>This is the Signin page</h3>
<form @submit.prevent="signin">
<div v-if="error">{{error}}</div>
 <div class="uk-margin">
    <input type="email" v-model="email" class="uk-input uk-form-width-large" type="text" placeholder="Email address">
</div>
</form>
</div>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Signin',
  components: {
  
  }
}
</script>
