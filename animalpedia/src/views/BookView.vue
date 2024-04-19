<script setup>
import Navbar from '@/components/bars/Navbar.vue';
import GetAllAnimalHeader from '@/components/usecases/home/GetAllAnimalHeader.vue';

</script>

<template>
  <main>
    <Navbar active="book" subactive="null"/>
    <GetAllAnimalHeader></GetAllAnimalHeader>
  </main>
</template>
