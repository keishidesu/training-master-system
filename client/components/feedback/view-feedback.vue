<template>
  <b-container>
    <h2 id="title">Feedback List</h2>
    <b-list-group>
      <b-list-group-item
        v-for="(feedback, index) in feedbacks"
        :key="index"
        :class="{ active: index == currentIndex }"
      >
        <h4>{{ feedback.title }}</h4>
        {{ feedback.content }}
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      feedbacks: [],
      title: '',
      description: ''
    }
  },
  mounted () {
    this.retrieveFeedbacks()
  },
  methods: {
    retrieveFeedbacks () {
      this.$axios.get('http://localhost:8000/feedback/')
        .then((res) => {
          this.feedbacks = res.data
        })
        .catch((error) => {
          this.content = error
        })
    }
  }
}
</script>

<style>
  #title {
    color: #ffffff;
  }
</style>
