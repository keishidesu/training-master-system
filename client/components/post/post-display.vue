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
  </b-container>
</template>

<script>
import MaterialDataService from '../../services/MaterialDataService'
export default {
  name: 'MaterialList',
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
      })
    }
  }
}
</script>
