<template>
  <b-card class="border-round border-0 shadow-sm">
    <div>
      <b-card-group v-for="(discussion, i) in discussions" :key="`discussion-${i}`">
        <b-card class="border-0">
          <b>{{ discussion.name }}</b>
          <div>
            {{ discussion.content }}
          </div>
        </b-card>
      </b-card-group>
    </div>
    <div>
      <b-form @submit="onSubmit">
        <b-form-group class="mt-4">
          <b-form-textarea
            v-model="content"
            type="text"
            class="form-control border-round"
            placeholder="Enter your discussions"
            rows="1"
          />
        </b-form-group>
        <b-row class="justify-content-center mt-4">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </b-row>
      </b-form>
    </div>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      nameMap: new Map(),
      discussions: [],
      content: ''
    }
  },
  created () {
    this.loadContent(0)
  },
  methods: {
    loadContent (offset) {
      this.$axios
        .get('/discussion', {
          params: {
            token: this.$store.state.session.token,
            limit: 7,
            offset
          }
        })
        .then((res) => {
          if (res.data.status === 0) {
            this.discussions = res.data.discussions.reverse()
            this.discussions.forEach(async (discussion) => {
              const id = discussion.user_id
              if (!this.nameMap.has(id)) {
                const { data } = await this.$axios.get('/name', { params: { id } })
                const name = data.name
                this.nameMap.set(id, name)
              }
              discussion.name = this.nameMap.get(id)
            })
          } else if (res.data.status === 1) {
            this.makeToast('Access denied!', 'Bad access token, please login and try again.', 'warning')
          }
        })
        .catch((error) => {
          this.makeToast('Cannot get message!', error, 'danger')
        })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.$axios
        .post('/discussion', {
          token: this.$store.state.session.token,
          user_id: this.$store.state.session.id,
          content: this.content
        })
        .then((res) => {
          if (res.data.status === 0) {
            this.makeToast('Success!', 'Discussion successfully posted', 'success')
            this.loadContent(0)
          } else if (res.data.status === 1) {
            this.makeToast('Failed!', 'Message couldn\'t be sent', 'warning')
          }
        })
        .catch((error) => {
          this.makeToast('Internal Error', error, 'danger')
        })
        .finally(() => {
          this.content = ''
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