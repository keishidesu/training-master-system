<template>
  <b-form @submit="savePost" @reset="onReset" v-if="show">
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
      id="getDesc"
      label="Description: "
      label-for="Desc"
    >
      <b-form-input
        id="Desc"
        v-model="desc"
        type="text"
        placeholder="Enter Description (optional)"
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
    <div class="mt-3">
      Selected file: {{ file ? file.name: '' }}
    </div>

    <b-button type="submit" variant="primary">
      Submit
    </b-button>
  </b-form>
</template>

<script>
import MaterialDataService from '../../services/MaterialDataService'

export default {
  name: 'AddPost',
  data () {
    return {
      title: '',
      desc: '',
      file: null,
      show: true
    }
  },
  methods: {
    savePost (evt) {
      evt.preventDefault()
      const data = {
        title: this.title,
        desc: this.desc,
        fileName: this.file.name,
        content: this.file
      }

      MaterialDataService.create(data)
        .then((response) => {
          console.log(response.data)
          this.makeToast('Success!', 'Material has been uploaded', 'success')
          this.title = ''
          this.desc = ''
          this.file = null
          this.content = ''
          window.location.reload(true)
        })
        .catch((err) => {
          console.log(err)
          this.makeToast('Error while uploading file', err, 'danger')
        })
    },
    onReset (evt) {
      evt.preventDefault()
      this.title = ''
      this.desc = ''
      this.file = null
      this.content = ''

      this.show = false
      this.$nextTick(() => {
        this.show = true
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
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
