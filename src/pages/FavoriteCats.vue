<template>
    <CatList
      :cats = "cats"
      :isFavorite = "true"
      v-if="!isCatsLoading"
    />
    <div v-else>Идет загрузка постов...</div>
  </template>
  
  <script>
  import CatList from '@/components/СatList.vue';
  import axios from 'axios';
  
  
  export default {
    components: {
      CatList
    },
    data(){
      return {
        cats: [],
        isCatsLoading: false,
        limit: 15,
        totalPages: 10,
      } 
    },
    methods: {
      async fetchFavoriteCats(){
        try{
            this.isCatsLoading = true;

            let likeCats = JSON.parse(localStorage.getItem('cats')) 
            for(const cat of likeCats){
                const response = await axios.get(`https://api.thecatapi.com/v1/images/${cat}`, {
                    headers: {
                        'x-api-key' : 'live_PW8N8CjfJZNQzNx80MPHSEN6GcSWl8507Z7KRvdyYptBjZVobDeNwGPH7V3s2siI' 
                    }
                });
                this.cats.push(response.data);
            }

        }
        catch(error){
            console.log(error)
        }
        finally {
          this.isCatsLoading = false;
        }
      },
    },
    mounted() {
      this.fetchFavoriteCats();
    },
  }
  </script>
  
  <style>
  .page__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .page {
   border: 1px solid black;
   padding: 10px;
   margin: 5px;
  }
  
  .page:hover {
    cursor: pointer;
  }
  
  .current--page {
    border: 2px solid green;
  }
  
  .observer {
    height: 30px;
    text-align: center;
  }
  </style>
  