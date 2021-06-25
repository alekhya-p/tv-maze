<template>
<div class="body" >
    <div v-if="detailsCheck">
            <div class="container">
            <h2 class="heading">Movie Details</h2>
            <div class="img">
                <img class="image" :src="details.image.original" height = "300" width="300" >
            </div>
            <div class="showDetails">
                <div class="details" v-if="details.name">
                    <b>Name: {{details.name}}</b>
                </div>
                <span class="details" v-else>Not Available</span>
                <div class="details">
                    <b>Language: {{details.language}}</b>
                </div>
                <div class="details">
                    <b>Status: {{details.status}}</b>
                </div>
                <div class="details">
                    <b>Genres: {{details.genres}}</b>
                </div>
                <div class="details">
                    <p class="summary" v-html="details.summary"></p>
                </div>
            </div>
        </div>
    </div>
    <div v-else><h1>Details Not Found!</h1></div>
</div>
    
</template>

<script>
import { getTvShowDetails } from "@/services/api.js";

export default {
    name: "Details",
    props: ["id"],
    data() {
        return {
            details: [],
            detailsCheck: true,
        };
    },
    
    mounted() {
        if(this.id !== undefined){
            this.get_ShowDetails();
        }
        else{
            this.detailsCheck = false;
        }
    },
    methods: {
        get_ShowDetails() {
            getTvShowDetails(this.id).then((res) => {this.details = res.data;});
        },
    },
};
</script>
<style scoped>
.heading {
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 30px;
    color: black;
    font-weight:bolder;
}

.details{
    font-family: "Lucida Console", "Courier New", monospace;
}
</style>