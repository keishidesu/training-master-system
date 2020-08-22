<template>
  <div>
    <b-form @submit="savePost">
      <b-form-group
        id="getTitle"
        label="Title: "
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="title"
          type="text"
          required
          placeholder="Enter Title"
        />
      </b-form-group>

      <b-form-group
        id="getMaterial"
        label="Material: "
        label-for="material"
      >
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here"
          drop-placeholder="Drop file here..."
        />
      </b-form-group>
      <div class="mt-3">Selected file: {{ file ? file.name: '' }}</div>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import MaterialDataService from '../../services/MaterialDataService'

export default {
  name: 'addPost',
  data () {
    return {
      title: '',
      file: null
    }
  },
  methods: {
    savePost () {
      const data = {
        title: this.title,
        content: this.file
      }

      MaterialDataService.create(data)
        .then((response) => {
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
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
