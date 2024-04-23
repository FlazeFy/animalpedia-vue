<script setup>
import Navbar from '@/components/bars/Navbar.vue';
import GetManageDct from '@/components/usecases/manage_dct/GetManageDct.vue';
</script>

<template>
  <main>
    <Navbar active="manage" subactive="manage_dct"/>
    <GetManageDct></GetManageDct>
  </main>
</template>
