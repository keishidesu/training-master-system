<template>
  <b-container>
    <b-row class="align-self-center vertical-center">
      <b-col lg="6" md="12" class="mx-auto">
        <b-card class="px-sm-1 px-md-3 py-2 border-round">
          <Title class="text-center my-3 bold">
            Training Master System
          </Title>
          <AuthTab />
        </b-card>
      </b-col>
    </b-row>
    <p>Temporarily here for nav</p>
    <a href="/home">Homepage after login</a>
  </b-container>
</template>

<script>
import AuthTab from '~/components/index/auth-tabs'
import Title from '~/components/text/title'

export default {
  layout: 'registerLayout',
  components: {
    AuthTab,
    Title
  }
}
</script>
