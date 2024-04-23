<template>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Animal Image</th>
            <th scope="col">Animal Name</th>
            <th scope="col">Animals Region</th>
            <th scope="col">Animals Zone</th>
            <th scope="col">Animals Status</th>
            <th scope="col">Animals Category</th>
            <th scope="col">Manage</th>
        </tr>
    </thead>
    <tbody>
        <div v-if="error">
            <p>Oops! Error encountered: {{ error.message }}</p>
        </div>
        <tr v-else-if="data" v-for="(dt, index) in data" :key="index" class="col-lg-3 col-md-4 col-sm-12 mx-auto">
            <th scope="col" class='p-3'>
                <img v-bind:src="dt.animals_img_url" class="img img-fluid img-profile" style="width: 75px; height: 75px; border-width: 2.5px;">
            </th>
            <th scope="col">{{ dt.animals_name }}</th>
            <th scope="col">{{ dt.animals_region }}</th>
            <th scope="col">{{ dt.animals_zone }}</th>
            <th scope="col">{{ dt.animals_status }}</th>
            <th scope="col">{{ dt.animals_category }}</th>
            <th scope="col"><button class ="btn btn-manage">Edit</button></th>
        </tr>
        <div v-else>Loading...</div>
    </tbody>
    </table>
</template>
  
<script setup>
    import axios from 'axios'
    import { ref, onMounted } from 'vue'
    import { ucFirstWord } from '../../../helpers/Converter.js'
    
    let data = ref([]);
    const error = ref(null);
    
    onMounted(async () => {
        try {
            const response = await axios.get('http://127.0.0.1:1323/api/v1/animal/desc?page=1')
            data.value = response.data.data.data
        } catch (error) {
            console.error('Error fetching data:', error);
            error.value = error
        }
    });
</script>
  
<style>
    

</style>