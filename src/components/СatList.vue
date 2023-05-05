<template>
<div class="container">
    <div class="cats">
        <CatItem
            v-for="cat in cats"
            :cat="cat"
            :isFavorite="isFavorite"
        />
    </div>
</div>
</template>



<script>
import CatItem from '@/components/CatItem.vue';

export default{
    components: {
        CatItem,
    },
    props: {
        cats: {
            type: Array
        },
        isFavorite: {
            type: Boolean,
        }
    },
}
</script>

<style scoped>
.cats{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>