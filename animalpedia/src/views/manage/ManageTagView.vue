<script setup>
import Navbar from '@/components/bars/Navbar.vue';
import GetManageTag from '@/components/usecases/manage_tag/GetManageTag.vue';
</script>

<template>
  <main>
    <Navbar active="manage" subactive="manage_tag"/>
    <GetManageTag></GetManageTag>
  </main>
</template>
