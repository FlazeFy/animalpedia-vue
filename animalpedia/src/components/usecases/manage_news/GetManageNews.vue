<template>
    <table class="table">
    <thead>
        <tr>
            <th scope="col" style="width: 230px;">Image</th>
            <th scope="col" style="width: 180px;">Title</th>
            <th scope="col" style="width: 180px;">Tag</th>
            <th scope="col">Body</th>
            <th scope="col" style="width: 80px;">Time Read</th>
            <th scope="col">Manage</th>
        </tr>
    </thead>
    <tbody>
        <div v-if="error">
            <p>Oops! Error encountered: {{ error.message }}</p>
        </div>
        <tr v-else-if="data" v-for="(dt, index) in data" :key="index" class="col-lg-3 col-md-4 col-sm-12 mx-auto">
            <th scope="col">
                <img v-bind:src="dt.news_img_url" class="img img-fluid rounded" style="width: 220px; border-width: 2.5px;">
            </th>
            <th scope="col">{{ ucFirstChar(dt.news_name) }}</th>
            <th scope="col">
                <button v-for="(tag, i) in JSON.parse(dt.news_tag)" :key="i" :href="`/news/tag/${tag.slug_name}`" :title="`Open news with tag: ${tag.tag_name}`" class="button btn_tag">{{ tag.tag_name }}</button>
            </th>
            <th scope="col">{{ ucFirstChar(removeHTMLTags(dt.news_body)) }}</th>
            <th scope="col">{{ dt.news_time_read }} min</th>
            <th scope="col"><button class ="btn btn-manage">Edit</button></th>
        </tr>
        <div v-else>Loading...</div>
    </tbody>
    </table>
</template>
  
<script setup>
    import axios from 'axios'
    import { ref, onMounted } from 'vue'
    import { ucFirstWord, removeHTMLTags, convertDatetime, ucFirstChar } from '../../../helpers/Converter.js'
    
    let data = ref([]);
    const error = ref(null);
    
    onMounted(async () => {
        try {
            const response = await axios.get('http://127.0.0.1:1323/api/v1/news/desc?page=1')
            data.value = response.data.data.data
        } catch (error) {
            console.error('Error fetching data:', error);
            error.value = error
        }
    });
</script>
  
<style>
    

</style>