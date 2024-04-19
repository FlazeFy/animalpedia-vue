<script setup>
import { ref } from 'vue';
import Navbar from '@/components/bars/Navbar.vue';
import Welcoming from '@/components/usecases/landing/Welcoming.vue';
import DctIntro from '@/components/usecases/landing/DctIntro.vue';
import Feature from '@/components/usecases/landing/Feature.vue';

const animalRegion = ref([
  'Tundra', 'Taiga', 'Savannah', 'Rainforest', 'Desert', 'Temperate'
])
const animalZone = ref([
  'Asia','Europe','Oceania','Antartica','South America','North America','Africa'
])
const animalStatus = ref([
  'Not Evaluated','Least Concern', 'Vulnerable','Critically Endangered','Near Threatened','Endangered'
])
const animalCategory = ref([
  'Reptile','Mammal','Bird','Arthropod','Amphibian'
])
</script>

<template>
  <main>
    <Navbar active="home" subactive="null"/>
    <Welcoming></Welcoming>

    <DctIntro ctx="ANIMALS FROM VARIOUS REGION..." img="http://localhost:3000/assets/background/region.png" :items="animalRegion"></DctIntro>

    <DctIntro ctx="VARIOUS ZONE" img="http://localhost:3000/assets/background/zone.png" :items="animalZone"></DctIntro>

    <DctIntro ctx="VARIOUS STATUS" img="http://localhost:3000/assets/background/status.png" :items="animalStatus"></DctIntro>

    <DctIntro ctx="VARIOUS CATEGORY" img="http://localhost:3000/assets/background/category.png" :items="animalCategory"></DctIntro>

    <Feature ctx="feature"></Feature>
  </main>
</template>
