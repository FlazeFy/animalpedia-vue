<script>
import BreakLine from '../../others/BreakLine.vue';

export default {
    components: {
        BreakLine,
    },
    props: {
        length: {
            type: Number,
            required: true,
        },
    },
};
</script>

<template>
    <div class="mt-4 text-center row" :id="ctx">
        <div class="col-lg-6 col-md-6 col-sm-12 py-5">
            <BreakLine :length="2" />
            <h1 style="font-size: var(--textXJumbo)">WELCOME, TO</h1>
            <h1 style="font-size: var(--textHuge)" class="fw-bold">ANIMALPEDIA</h1>
            <h5 style="font-size: var(--textJumbo)" class="text-white">Animal Encyclopedia, News, & Stats</h5>
            <BreakLine :length="2" />
            <button class="btn btn-primary rounded-pill py-3 px-5 fw-bold" style="font-size: var(--textXLG)">Let's Explore!</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <img src="http://localhost:5173/assets/background/animalpedia.png" class="img img-fluid" alt="Animalpedia Image">
        </div>
    </div>
</template>