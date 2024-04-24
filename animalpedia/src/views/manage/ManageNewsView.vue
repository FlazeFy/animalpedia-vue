<script setup>
import Navbar from '@/components/bars/Navbar.vue';
import GetManageNews from '@/components/usecases/manage_news/GetManageNews.vue';
</script>

<template>
  <main>
    <Navbar active="manage" subactive="manage_news"/>
    <GetManageNews></GetManageNews>
  </main>
</template>
