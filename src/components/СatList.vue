<template>
<div class="container">
    <div class="cats">
        <div class="cats__item" v-for="cat in cats">
            <img class="cats__img" :src="cat.url" alt="">
            <button class="cats__like">
                <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="like" d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z" fill="none"/>
                    <path d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z" fill="#F24E1E"/>
                </svg>
            </button>
        </div>
    </div>
</div>
</template>



<script>
export default{
    data(){
        return{
            cats: [
                {"id":"1js","url":"https://cdn2.thecatapi.com/images/1js.jpg","width":500,"height":334},
                {"id":"9ed","url":"https://cdn2.thecatapi.com/images/9ed.jpg","width":560,"height":438},
                {"id":"a31","url":"https://cdn2.thecatapi.com/images/a31.jpg","width":560,"height":504},
                {"id":"b4g","url":"https://cdn2.thecatapi.com/images/b4g.jpg","width":500,"height":731},
                {"id":"c31","url":"https://cdn2.thecatapi.com/images/c31.jpg","width":500,"height":375},
                {"id":"ctq","url":"https://cdn2.thecatapi.com/images/ctq.gif","width":800,"height":536},
                {"id":"e7v","url":"https://cdn2.thecatapi.com/images/e7v.jpg","width":192,"height":213},
                {"id":"MTgzMzc3NA","url":"https://cdn2.thecatapi.com/images/MTgzMzc3NA.jpg","width":1440,"height":1080},
                {"id":"cruhNBsv1","url":"https://cdn2.thecatapi.com/images/cruhNBsv1.jpg","width":1024,"height":768},
                {"id":"5Kx7zbLN0","url":"https://cdn2.thecatapi.com/images/5Kx7zbLN0.jpg","width":1280,"height":960}
        ]
        }
    }
}
</script>

<style scoped>
.cats{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.cats__item{
    width: 225px;
    height: 225px;
    margin-top: 50px;
}


.cats__item:hover{
    outline: 15px solid #fff;
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
}

.cats__item:hover .cats__like{
    display: block;
}

.cats__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cats__like{
    display: none;
    position: relative;
    top: -50px;
    left: 182px;
    background-color: transparent;
    border: none;
    transition: 0.5s;
}

.cats__like:hover{
    cursor: pointer;
}

.cats__like:hover .like{
    fill: #F24E1E;
}


</style>