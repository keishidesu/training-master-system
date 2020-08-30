<template>
  <b-container>
    <b-list-group>
      <b-list-group-item
        v-for="(post, index) in posts"
        :key="index"
        :class="{ active: index == currentIndex }"
        @click="setActiveNDownload(post, index)"
      >
        <h4>{{ post.title }}</h4>
        {{ post.desc }}
      </b-list-group-item>
    </b-list-group>
    <!-- Should only be displayed for the trainer -->
    <b-button-group class="mt-2">
      <b-button @click="deleteAll">Delete All</b-button>
      <b-button v-b-modal.postFormModal>
        Add Material
      </b-button>
    </b-button-group>
    <b-modal id="postFormModal" hide-footer title="Add Material">
      <postForm />
    </b-modal>
  </b-container>
</template>

<script>
import MaterialDataService from '../../services/MaterialDataService'
import postForm from './post-form'
export default {
  name: 'MaterialList',
  components: {
    postForm
  },
  data () {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: '',
      description: '',
      id: ''
    }
  },
  mounted () {
    this.retrieveMaterials()
  },
  methods: {
    retrieveMaterials () {
      MaterialDataService.getAll()
        .then((res) => {
          this.posts = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteAll () {
      const dltConfirm = confirm('Are you sure to delete all materials?')
      if (dltConfirm) {
        MaterialDataService.deleteAll()
          .then((res) => {
            this.makeToast('Success!', 'Materials have been deleted', 'success')
            this.refreshList()
          })
          .catch((err) => {
            console.log(err)
            this.makeToast('Error while deleting Material', err, 'danger')
          })
      }
    },
    makeToast (title, message, variant) {
      this.$bvToast.toast(message, {
        title,
        variant,
        autoHideDelay: 2500,
        appendToast: true
      })
    },
    refreshList () {
      this.retrieveMaterials()
      this.currentPost = null
      this.currentIndex = -1
    },
    setActiveNDownload (post, index) {
      this.currentPost = post
      this.currentIndex = index
      this.id = post.id
      console.log(this.id)
      this.$axios({
        url: `http://localhost:8000/post/${this.id}`,
        method: 'GET',
        responseType: 'blob'
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', post.fileName)
        document.body.appendChild(link)
        link.click()
        this.makeToast('Downloading...', 'Please wait to download', 'success')
      }).catch((err) => {
        this.makeToast(`Error occurred while downloading material with id = ${this.id}`, err, 'danger')
      })
    }
  }
}
</script>
