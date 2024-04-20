<script setup>
import Navbar from '@/components/bars/Navbar.vue';
import GetAllNewsHeader from '@/components/usecases/news/GetAllNewsHeaders.vue';
</script>

<template>
  <main>
    <Navbar active="news" subactive="null"/>
    <GetAllNewsHeader></GetAllNewsHeader>
  </main>
</template>
