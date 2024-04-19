<script>
    import BreakLine from '../../others/BreakLine.vue'
    
    export default {
        components: {
            BreakLine,
        },
        props: {
            ctx: String,
            img: String,
            items: Array,
        },
    };
</script>
<template>
    <div>
        <BreakLine :length="4" />
        <div class="mt-4 text-center" :id="ctx">
            <h1 :style="{ fontSize: 'var(--textXJumbo)' }">{{ ctx }}</h1>
            <img class="img img-fluid mb-3" :src="img" :style="{ maxWidth: '30%', minWidth: '300px' }" />
            <BreakLine :length="2" />
            <div class="d-inline" v-for="(val, i) in items" :key="i">
            <a class="btn btn-primary rounded-pill me-2 px-4 py-3" :style="{ fontWeight: '500' }">{{ val }}</a>
            </div>
        </div>
        <BreakLine :length="5" />
    </div>
</template>
  