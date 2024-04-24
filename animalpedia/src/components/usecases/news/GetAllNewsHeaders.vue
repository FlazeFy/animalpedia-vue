<template>
    <div>
        <div v-if="error">
            <p>Oops! Error encountered: {{ error.message }}</p>
        </div>
    
        <div v-else-if="data" class="row">
            <div v-for="(dt, index) in data" :key="index" class="">
                <div class="container news_gridbox">
                    <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img :src="dt.news_img_url" class="container news_nebox_image" :title="dt.news_img_url" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <h4>{{ ucFirstWord(dt.news_name) }}</h4>
                        <div class="mt-3 mb-4 d-inline-block w-100">
                            <button v-for="(tag, i) in JSON.parse(dt.news_tag)" :key="i" :href="`/news/tag/${tag.slug_name}`" :title="`Open news with tag: ${tag.tag_name}`" class="button btn_tag">{{ tag.tag_name }}</button>
                        </div>
                        <div class="container news_content_box">
                            <p class="container news_header_desc">{{ ucFirstChar(removeHTMLTags(dt.news_body)) }}</p>
                        </div>
                        <div class="container news_nebox_props">
                            <span class="me-3"><font-awesome-icon :icon="faCalendar"></font-awesome-icon> Posted at {{ convertDatetime(dt.created_at, 'calendar') }}</span>
                            <span class="me-3" title="Author"><font-awesome-icon :icon="faUser"></font-awesome-icon> {{ dt.created_by }}</span>
                            <span><font-awesome-icon :icon="faClock"></font-awesome-icon> {{ dt.news_time_read }} min Read</span>
                        </div>
                        <button class="btn btn-success py-3 w-100" style="border-radius:var(--roundedLG)">See News</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div v-else>Loading...</div>
    </div>
</template>
  
<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { ucFirstWord, removeHTMLTags, convertDatetime, ucFirstChar } from '../../../helpers/Converter.js'; 
    
    let data = ref([]);
    const error = ref(null);
    
    onMounted(async () => {
        try {
            const response = await axios.get('http://127.0.0.1:1323/api/v1/news/desc?page=1');
            data.value = response.data.data.data
        } catch (error) {
            console.error('Error fetching data:', error);
            error.value = error
        }
    });
</script>
  
<style>
    .news_gridbox {
        width: 100%;
        border: var(--spaceMini) solid var(--primaryColor);
        border-radius: var(--roundedJumbo);
        padding: var(--spaceMD);
        margin-bottom: var(--spaceLG);
        -webkit-transition: all 0.4s !important;
        -o-transition: all 0.4s !important;
        transition: all 0.4s !important;
    }
    .news_gridbox:hover {
        transform: scale(1.035);
        box-shadow: rgba(249, 170, 12, 0.35) 0px 5px 15px;
    }
    .news_nebox_image {
        width: 100%;
        height: 100%;
        border-radius: var(--roundedJumbo);
    }
    .news_nebox_props {
        padding-bottom: var(--spaceLG);
        color: var(--darkColor);
        font-size: var(--textXMD);
    }
    .news_content_box {
        min-height: 230px;
    }
    .news_header_desc {
        overflow: hidden;
        color: var(--whiteColor);
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        line-clamp: 9;
        -webkit-box-orient: vertical;
    }
</style>