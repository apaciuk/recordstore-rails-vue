<template>
<div class="uk-section uk-section-primary">
<div class="uk-container uk-container-small">
<h3>Add a New Artist</h3>
<form @submit.prevent="addArtist">
<div v-if="error">{{error}}</div>
 <div class="uk-margin">
<input type="text" v-model="newArtist.name" autofocus autocomplete="off" class="uk-input uk-form-width-large" placeholder="Type an Artist Name">
</div>
<button type="submit" class="uk-button uk-button-danger">Add Artist</button>
<div>
</div>
</form>
<hr />
<ul>

</ul>
</div>
</div>
</template>
