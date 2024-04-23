<template>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Dictionary Type</th>
            <th scope="col">Dictionary Name</th>
            <th scope="col">Manage</th>
        </tr>
    </thead>
    <tbody>
        <div v-if="error">
            <p>Oops! Error encountered: {{ error.message }}</p>
        </div>
        <tr v-else-if="data" v-for="(dt, index) in data" :key="index" class="col-lg-3 col-md-4 col-sm-12 mx-auto">
            <th scope="col">{{ dt.dictionary_type }}</th>
            <th scope="col">{{ dt.dictionary_name}}</th>
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
            const response = await axios.get('http://127.0.0.1:1323/api/v1/dct/all?page=1')
            data.value = response.data.data.data
        } catch (error) {
            console.error('Error fetching data:', error);
            error.value = error
        }
    });
</script>
  
<style>
    

</style>