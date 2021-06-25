<template>
  <div>
    <div class="container">
        <div class="row">
          <div class="heading">Popular Shows</div>
          <div class="scroll">
            <div
              class="tvShow col-lg-3 col-md-4 col-sm-6" v-for="shows in popularShows" :key="shows.id"
            >
              <div class="movies">
                <img class="popularImage" :src="shows.image.original" width="200" height="300" hspace="5" @click="goToTvDetails(shows.id)"/>
                <div>
                  <span>
                    <b-icon icon="star-fill" class="popularStar"></b-icon>
                  </span>
                  <span class="show-rating">
                    {{ shows.rating.average }}
                  </span>
                </div>
                <p class="showName">{{ shows.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Categories -->
        <div
          class="tvShowLists row"
          v-for="itemList in categories"
          :key="itemList.id"
        >
          <p class="heading">{{ itemList.name }}</p>

          <div class="scroll">
            <div
              class="col-lg-3 col-md-4 col-sm-6"
              v-for="showGenres in itemList.filterShows" :key="showGenres.id"
            >
              <img
                id="images" :src="showGenres.image.medium"
                width="200"
                height="300"
                hspace="5"
                @click="goToTvDetails(show.id)"
              />
              <div>
                <span>
                  <b-icon icon="star-fill" class="star-icon"></b-icon>
                </span>
                <span class="show-rating">
                  {{ showGenres.rating.average }}
                </span>
              </div>
              <p class="showName">{{ showGenres.name }}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { getAllShows } from "@/services/api";

export default {
  name: "Home",
  data() {
    return {
      allShows: [],
      popularShows: [],
      categories: [],
      uniqueGenres: [],
    };
  },
  mounted() {
    this.getAllTvShows();
  },

  methods: {
    getAllTvShows() {
      getAllShows().then((res) => {
        this.allShows = res.data;
          this.allShows.forEach((showsList) => {
            if (showsList.rating.average >= 9) {
              this.popularShows.push(showsList);
            }
          });
          const allGenres = this.allShows.map(show => show.genres).flat();
          this.uniqueGenres = [...new Set(allGenres)];
           this.categories = this.uniqueGenres.map((genre) => {
             const filterShows = this.allShows.filter((show) => show.genres.includes(genre))
              return  {name: genre, filterShows};
           });
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
};
</script>
<style scoped>
.popularStar{
  color:yellow
}
.spinner-border {
  width: 65px;
  height: 65px;
  margin-top: 120px;
}
.popularImage{
  border:4px solid green;
  margin-top: 10px;
}
img {
  cursor: pointer;
  border-radius:1%;
}
.heading {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 30px;
  color: black;
}

.showName {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 15px;
  color: black;
}
.scroll {
  display: flex;
  overflow-x:auto ;
}
</style>
