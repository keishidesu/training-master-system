<template>
  <div>
    <b-card>
      <h2>Submit a feedback</h2>
      <b-form @submit="onSubmit">
        <b-form-group class="mt-2">
          <label for="feedback-title">Title</label>
          <b-form-input
            v-model="title"
            type="text"
            class="form-control"
            placeholder="Feedback Title"
          />
        </b-form-group>
        <b-form-group class="mt-2">
          <label for="feedback-content">Content</label>
          <b-form-textarea
            v-model="content"
            type="text"
            class="form-control"
            placeholder="Enter your feedback"
            rows="5"
          />
        </b-form-group>
        <b-row class="justify-content-center mt-4">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </b-row>
      </b-form>
    </b-card>
    <div v-if="error" class="alert alert-danger">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: '',
      error: ''
    }
  },
  methods: {
    onSubmit (evt) {
      // evt.preventDefault()
      this.$axios.post('http://localhost:8000/feedback', {
        title: this.title,
        content: this.content
      })
        .then((res) => {
          if (res.data.status === 0) {
            this.makeToast('Success!', 'Feedback successfully sent', 'success')
          } else if (res.data.status === 1) {
            this.makeToast('Fail!', 'Error occurred while sending feedback', 'error')
          }
        })
        .catch((error) => {
          this.makeToast('Internal Error', error, 'danger')
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
