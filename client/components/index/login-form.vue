<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <label for="login-email-input">Email address</label>
        <input v-model="credentials.email" type="email" class="form-control" placeholder="Enter email">
      </b-form-group>
      <b-form-group>
        <label for="login-password-input">Password</label>
        <input v-model="credentials.password" type="password" class="form-control" placeholder="Password">
      </b-form-group>
      <b-row class="justify-content-center mt-4">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </b-row>
      <b-row class="justify-content-center mt-4">
        <p>Need Help? <a href="/help">Click here</a></p>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$axios.post('http://localhost:8000/login/', {
        email: this.credentials.email,
        password: this.credentials.password
      })
        .then((res) => {
          // action after successfully login
          this.makeToast('Login success!', 'Successful to login', 'success')
        })
        .catch((error) => {
          this.makeToast('Cannot login', error, 'danger')
        })
    },
    makeToast (title, message, variant) {
      this.$bvToast.toast(message, {
        title,
        variant,
        autoHideDelay: 2500,
        appendToast: true
      })
    }
  }
}
</script>

<style>

</style>
