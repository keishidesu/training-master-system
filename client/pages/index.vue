<template>
  <div class="container">
    <div>
      <h1 class="title">Training Master System
      </h1>
      <div class="links">
        <nuxt-link to="/register_login">Register Or Login</nuxt-link>
        <nuxt-link to="/postMaterial">postMaterial</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

body {
  background-color: rgb(69, 177, 247);
}
</style>
