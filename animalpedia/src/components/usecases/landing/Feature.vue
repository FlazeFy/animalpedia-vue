<script>
import BreakLine from '../../others/BreakLine.vue';

export default {
    components: {
        BreakLine,
    },
    props: {
        ctx: {
            type: Number,
            required: true,
        },
    },
};
</script>

<template>
    <BreakLine :length="3" />
    <div class="mt-4 text-center row" :id="ctx">
        <div class="col-lg-6 col-md-6 col-sm-12">
            <BreakLine :length="3" />
            <div id="carouselExampleSlidesOnly" class="carousel slide mt-4" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="http://localhost:5173/assets/background/animalpedia.png" style="max-width: 50%; min-width: 300px;" class="img img-fluid mb-3" alt="Animalpedia Image" />
                        <h4 class="text-white">Get to know about animal profile</h4>
                    </div>
                    <div class="carousel-item">
                        <img src="http://localhost:5173/assets/background/news.png" style="max-width: 50%; min-width: 300px;" class="img img-fluid mb-3" alt="News Image" />
                        <h4 class="text-white">See every news about animal environment around the world</h4>
                    </div>
                    <div class="carousel-item">
                        <img src="http://localhost:5173/assets/wishlist.png" style="max-width: 50%; min-width: 300px;" class="img img-fluid mb-3" alt="Wishlist Image" />
                        <h4 class="text-white">See all stats to get new knowledge and insight</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <BreakLine :length="5" />
            <h1 style="font-size: var(--textXJumbo)">OUR FEATURES</h1>
            <BreakLine :length="1" />
            <h6 class="text-white" style="font-size: var(--textJumbo)">We have many features to ensure you can get information about animals as much as possible</h6>
        </div>
    </div>
    <BreakLine :length="5" />
</template>