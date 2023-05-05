<template>
    <CatList
      :cats="cats"
      v-if="!isCatsLoading"
    />
    <div v-else>Идет загрузка постов...</div>
    <div
      ref="observer" 
      class="observer"
    >
      ...загружаем еще котиков...
    </div>
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
      async fetchCats(){
        try{
            this.isCatsLoading = true;
  
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
              params: {
                limit: this.limit
              },
              headers: {
                'x-api-key' : 'live_PW8N8CjfJZNQzNx80MPHSEN6GcSWl8507Z7KRvdyYptBjZVobDeNwGPH7V3s2siI' 
              }
            });
            this.cats = response.data;
        }
        catch(error){
            console.log(error)
        }
        finally {
          this.isCatsLoading = false;
        }
      },
      async loadMoreCats(){
        try{
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
              params: {
                limit: this.limit
              },
              headers: {
                'x-api-key' : 'live_PW8N8CjfJZNQzNx80MPHSEN6GcSWl8507Z7KRvdyYptBjZVobDeNwGPH7V3s2siI' 
              }
            });
            this.cats = [...this.cats, ...response.data];
        }
        catch(error){
            console.log(error)
        }
      },
    },
    mounted() {
      this.fetchCats();
      
      let options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
  
      let callback = (enteries, observer) => {
        if(enteries[0].isIntersecting){
          this.loadMoreCats();
        }
      };
  
      let observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
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
  