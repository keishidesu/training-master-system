<template>
  <div id="outline">
    <img id="smallLogo" src="../assets/Logo.png" alt="Training Master System">
    <Nuxt />
    <TheSideNav />
  </div>
</template>

<script>
import TheSideNav from '../components/navBar/TheSideNav'
export default {
  components: {
    TheSideNav
  }
}
</script>

<style>
  .bg-secondary {
    background-color: rgb(69, 177, 247) !important;
  }
  #smallLogo {
    position: absolute;
    bottom: 0px;
    right: 0px;
    max-width: 10%;
    height: auto;
  }
  #outline {
    margin: 1.5em;
    margin-left: 5em;
  }
</style>
