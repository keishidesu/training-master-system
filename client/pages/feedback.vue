<template>
  <b-container>
    <!-- if usertype is admin -->
    <viewFeedback />
    <div class="mt-5"></div>
    <!-- if usertype is trainer/trainee -->
    <feedbackForm />
  </b-container>
</template>

<script>
import viewFeedback from '~/components/feedback/view-feedback'
import feedbackForm from '~/components/feedback/feedback-form'

export default {
  components: {
    feedbackForm,
    viewFeedback
  }
}
</script>

<style>
</style>
