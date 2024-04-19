<template>
    <div>
        <div v-if="error">
            <p>Oops! Error encountered: {{ error.message }}</p>
        </div>
    
        <div v-else-if="data" class="row">
            <div v-for="(dt, index) in data" :key="index" class="col-lg-3 col-md-4 col-sm-12 mx-auto">
                <a class="container animal_gridbox" :href="'book/' + dt.animals_slug">
                    <div class="container animal_hebox">
                    <div class="container animal_hebox_props">
                        <img
                            v-if="dt.animals_zone === 'Africa'"
                            :src="'http://localhost:3000/assets/icons/zone_africa.png'"
                            class="container animal_zone_icon"
                            title="Africa"
                        />
                        <img
                            v-else-if="dt.animals_zone === 'Asia & Oceania'"
                            :src="'http://localhost:3000/assets/icons/zone_asia.png'"
                            class="container animal_zone_icon"
                            title="Asia & Oceania"
                        />
                        <img
                            v-else-if="dt.animals_zone === 'Europe'"
                            :src="'http://localhost:3000/assets/icons/zone_europe.png'"
                            class="container animal_zone_icon"
                            title="Europe"
                        />
                        <img
                            v-else-if="dt.animals_zone === 'America'"
                            :src="'http://localhost:3000/assets/icons/zone_america.png'"
                            class="container animal_zone_icon"
                            title="America"
                        />
                        <template v-if="dt.animals_status !== 'Near Threatened' && dt.animals_status !== 'Least Concern'">
                        <font-awesome-icon
                            v-if="dt.animals_status === 'Vulnerable' || dt.animals_status === 'Endangered' || dt.animals_status === 'Critically Endangered'"
                            :icon="faWarning"
                            size="2x"
                            :title="dt.animals_status"
                            style="margin-left: 10px; margin-bottom: -7.5px;"
                        />
                        <font-awesome-icon
                            v-else-if="dt.animals_status === 'Extinct' || dt.animals_status === 'Extinct in the Wild'"
                            :icon="faSkull"
                            size="2x"
                            :title="dt.animals_status"
                            style="margin-left: 10px; margin-bottom: -7.5px;"
                        />
                        </template>
                    </div>
                    <img class="container animal_hebox_img" :src="dt.animals_img_url" />
                    </div>
                    <h4>{{ ucFirstWord(dt.animals_name) }}</h4>
                    <h6>{{ ucFirstWord(dt.animals_latin_name) }}</h6>
                </a>
            </div>
        </div>
    
        <div v-else>Loading...</div>
    </div>
</template>
  
<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { ucFirstWord } from '../../../helpers/Converter.js'; 
    
    let data = ref([]);
    const error = ref(null);
    
    onMounted(async () => {
        try {
            const response = await axios.get('http://127.0.0.1:1323/api/v1/animal/desc?page=1');
            data.value = response.data.data.data
        } catch (error) {
            console.error('Error fetching data:', error);
            error.value = error
        }
    });
</script>
  
<style>
    .animal_gridbox {
        text-align: center;
        width: 280px;
        height: 280px;
        text-decoration: none;
        margin-bottom: calc(var(--spaceJumbo) * 3.5);
    }
    .animal_hebox {
        border-radius: var(--roundedCircle);
        border: var(--spaceXXSM) solid var(--primaryColor);
        cursor: pointer;
        margin-bottom: var(--spaceLG);
        position: relative;
        -webkit-transition: all 0.4s !important;
        -o-transition: all 0.4s !important;
        transition: all 0.4s !important;
    }
    .animal_hebox_img {
        width: 280px;
        height: 280px;
        border-radius: var(--roundedCircle);
    }
    .animal_gridbox:hover .animal_hebox {
        transform: scale(1.075);
        box-shadow: rgba(249, 170, 12, 0.35) 0px 5px 15px;
    }
    .animal_gridbox h4 {
        font-weight: bold;
        color: var(--primaryColor);
        margin-bottom: var(--spaceMini);
    }
    .animal_gridbox h6 {
        font-weight: 500;
        font-size: var(--textLG);
        color: var(--whiteColor) !important;
    }
    .animal_hebox_props {
        position: absolute;
        top: -5px;
        left: -5px;
        background: var(--successBG);
        padding: var(--spaceXSM) var(--spaceSM);
        border-radius: var(--roundedMD);
        border: 3.5px solid var(--primaryColor);
    }
    .animal_zone_icon {
        height: 36px;
    }

</style>