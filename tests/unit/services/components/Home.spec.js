import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Home from '@/components/Home.vue';
import VueRouter from 'vue-router';

 const localVue = createLocalVue();
 localVue.use(VueRouter);
 const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/details/:id',
    name: 'Details',
  },
  {
    path: '/search/:query',
    name: 'Search',
  },
  {
    path:'/:catchAll(.*)',
    name:"NotFound",
  }
]
const router =new VueRouter({
  routes,
})

const categories = [{
  name: 'Thriller',
  shows: [{
    id: 50,
    name: "The Lottery",
    rating: { average: 6.5 },
    image: { medium:"https://static.tvmaze.com/uploads/images/medium_portrait/146/366444.jpg" },
    genres: ["Drama", "Science-Fiction", "Thriller"]
  }]
}]

jest.mock('@/services/api', () => ({
  getAllShows: () => {
    return Promise.resolve({
      data: [{
        "id": 50, "name": "The Lottery", "rating": { "average": 6.5 },
        "image": { "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/146/366444.jpg" },
        "genres": ["Drama", "Science-Fiction", "Thriller"]
      }]
    })
  },
}));

describe('Home.vue', () => {
  let wrapper;
  beforeEach(() => {
    // const localVue = createLocalVue();
    // localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    wrapper = shallowMount(Home, {
      localVue,
      router,
      data() {
        return {
          allShows: [],
          categories: categories,
          uniqueGenres: [],
        }
      }

    });
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  //  it('Should call DetailsPage when image is clicked', () => {
  //    wrapper.vm.goToTvDetails = jest.fn();
  //    wrapper.find('img').trigger('click')
  //    expect(wrapper.vm.$router.name).toBe("Details");
  // })

  it('Testing the router', () => {
    wrapper.vm.goToTvDetails(1);
    expect(wrapper.vm.$route.name).toBe("Details");
  });
  
  it('Should load the shows data properly when mounted', async () => {
    let mockedResponse = [{
      "id": 50, "name": "The Lottery", "rating": { "average": 6.5 },
      "image": { "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/146/366444.jpg" },
      "genres": ["Drama", "Science-Fiction", "Thriller"]
    }]
    await wrapper.vm.getAllTvShows()
    expect(wrapper.vm.allShows).toEqual(mockedResponse);
  });
  afterEach(() => {
    wrapper.destroy();
  });
});