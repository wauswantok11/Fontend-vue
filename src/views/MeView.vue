<template>
  <div>
    <DetailMe />
  </div>
</template>

<!-- <script setup> 
import Router from '../router/index.js';
import DetailMe from "../components/DetailMe.vue"
</script> -->

<script>
import DetailMe from "../components/DetailMe.vue"

export default {
  name: 'me',
  components: {
    DetailMe,
  }
}
</script>

<style></style>