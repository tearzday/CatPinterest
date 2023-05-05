<template>
<div class="cat__item" :class="{'like--active': isFavorite}">
    <img class="cat__img" :src="cat.url" alt="" :id="cat.id">
    <button class="cat__like" @click="likeCat($event.target, cat.id)">
        <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="like" d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" fill="none"/>
            <path d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z" fill="#F24E1E"/>
        </svg>
    </button>
</div>
</template>


<script>
export default{
    props: {
        cat: {
            type: Object,         
        },
        isFavorite: {
            type: Boolean,
        }
    },
    methods: {
        likeCat(event, id){
            let item = event.parentNode.parentNode.parentNode;
            if(item.classList == "cat__item" || item.className == "cat__item like--active"){
                item.classList.toggle("like--active")
            }
            this.putLikeCats(id)
        },

        getLikeCats(){
            const catsLocalStorage = localStorage.getItem('cats');
            if (catsLocalStorage !== null){
                return JSON.parse(catsLocalStorage);
            }
            return [];
        },
        putLikeCats(id){
            let cats = this.getLikeCats();
            const index = cats.indexOf(id);


            if (index === -1) {
                cats.push(id);

            }
            else{
                cats.splice(index, 1)
            }

            localStorage.setItem('cats', JSON.stringify(cats));

            return {
                cats
            }
        },
    }
}
</script>

<style scoped>
.cat__item{
    width: 225px;
    height: 225px;
    margin-top: 50px;
}


.cat__item:hover, .like--active{
    outline: 15px solid #fff;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
}

.cat__item:hover .cat__like, .like--active .cat__like{
    display: block;
}

.cat__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cat__like{
    display: none;
    position: relative;
    top: -50px;
    left: 182px;
    background-color: transparent;
    border: none;
    transition: 0.5s;
}

.cat__like:hover{
    cursor: pointer;
}

.cat__like:hover .like, .like--active .like{
    fill: #F24E1E;
}
</style>