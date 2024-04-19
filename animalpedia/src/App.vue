<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/bars/Footer.vue';
</script>

<template>
  <div class="content-grid">
    <div style="min-height: 100vh;">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
</style>
