<template>
    <div>
        <div v-if="searchCheck">
        <div v-if="searchShows.length>0" >
            <div class="row">
                <div class="details col-lg-3 col-md-4 col-sm-6" v-for="eachShow in searchShows" :key="eachShow.show.id">
                    <div class="shows">
                        <img 
                            :src="eachShow.show.image?eachShow.show.image.medium: ''" 
                            width="200" 
                            height="300" 
                            v-if="eachShow.show.image"
                            @click="goToTvDetails(eachShow.show.id)">
                        <div v-else>
                            <img
                            :src="images.sample"
                            width="200"
                            height="300"
                            @click="goToTvDetails(eachShow.show.id)">
                    </div>    
                    </div>
                    <p class="showName">{{ eachShow.show.name }}</p>
                </div>
            </div>
        </div>
        </div>
        <div v-else><h1>Shows Not Found!</h1></div>
    </div>
    
</template>
<script>
import { searchForShows } from "@/services/api.js";

export default {
    name: "Search",
    data() {
        return {
            searchCheck :true,
            searchShows: [],
            images: {
                sample: require('../assets/defaultImage.jpg')
            }
        };
    },
    props: ["query"],
    mounted() {
         if(this.query !== undefined){
             this.search_List();
         }
         else {
             this.searchCheck = false;
         }
    },
     methods: {
        search_List() {
            searchForShows(this.query).then((res) => {
                this.searchShows = res.data;
            });            
        },
         goToTvDetails(id) {
            this.$router.push({
                name: "Details",
                params: {
                id,
                },
            });
        },
    },
}

</script>
<style scoped>
.scoll{
    display: flex;
   flex-wrap: wrap; 
}
img {
  padding-top: 10px;
  cursor: pointer;
  border-radius:1%;
}
</style>