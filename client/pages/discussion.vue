<template>
  <b-container>
    <b-row class="align-self-center center">
      <b-col lg="12" md="6" class="mx-auto">
        <b-card class="px-sm-1 px-md-3 py-2 border-round">
          <Title class="text-center my-3 bold">
            Discussion Forum
          </Title>
          <ForumContent />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ForumContent from '~/components/discussion/forum-tabs'
import Title from '~/components/text/title'

export default {
  components: {
    ForumContent,
    Title
  }
}
</script>

<style>
</style>
