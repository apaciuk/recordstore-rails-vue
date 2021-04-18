<template>
<div class="uk-section uk-section-primary">
<div class="uk-container uk-container-small">
<h3>Sign In</h3>
<form @submit.prevent="signin">
<div v-if="error">{{error}}</div>
 <div class="uk-margin">
<input type="email" v-model="email" class="uk-input uk-form-width-large" placeholder="Email address">
</div>
 <div class="uk-margin">
<input type="password" v-model="password" class="uk-input uk-form-width-large" placeholder="Password">
</div>
<button type="submit" class="uk-button uk-button-danger">Sign In</button>
<div>
<br />
<router-link to="/signup" class="uk-button uk-button-secondary">Register</router-link>
</div>
</form>
</div>
</div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      this.$http.plain.post('/signin', { email: this.email, password: this.password })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error))
    },
    signinSuccessful (response) {
      if (!response.data.csrf) {
        this.signinFailed(response)
        return
      }
      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/records')
    },
    signinFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || ''
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
      this.$router.replace('/records')
      }
    }
  }
  }
</script>
