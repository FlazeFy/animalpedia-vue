<script>
export default {
    props: {
        length: {
        type: [Number, String], 
        required: true,
        },
    },
}
</script>

<template>
    <div>
      <br v-for="index in +length" :key="index" />
    </div>
</template>
  
