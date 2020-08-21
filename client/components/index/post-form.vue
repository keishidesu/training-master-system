<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          id="title"
          v-model="post.title"
          type="text"
          class="form-control"
          name="title"
          required
        >
      </div>

      <div class="form-group">
        <label for="content">Content</label>
        <input
          id="content"
          v-model="post.content"
          class="form-control"
          name="content"
          required
        >
      </div>
      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Successful</h4>
      <button class="btn btn-success" @click="newPost">Add new Materials</button>
    </div>
  </div>
</template>

<script>
import MaterialDataService from '../../services/MaterialDataService'

export default {
  name: 'addPost',
  data () {
    return {
      post: {
        title: '',
        content: ''
      },
      submitted: false
    }
  },
  methods: {
    savePost () {
      const data = {
        title: this.post.title,
        content: this.post.content
      }

      MaterialDataService.create(data)
        .then((response) => {
          this.post.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch((err) => {
          console.log(err)
        })
    },

    newPost () {
      this.submitted = false
      this.post = {}
    }
  }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
