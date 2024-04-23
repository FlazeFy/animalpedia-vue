<script setup>
import Navbar from '@/components/bars/Navbar.vue';
import GetManageAnimal from '@/components/usecases/manage_book/GetManageAnimal.vue';
</script>

<template>
  <main>
    <Navbar active="manage" subactive="manage_book"/>
    <GetManageAnimal></GetManageAnimal>
  </main>
</template>
