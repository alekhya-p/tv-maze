import { shallowMount, createLocalVue } from '@vue/test-utils';
import search from '@/components/Search.vue';
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

 jest.mock('@/services/api', () => ({
   searchForShows: () => {
     return Promise.resolve({
       data: {
         "score": 0.909443, "show": {
           "id": 139, "name": "Girls", "rating": { "average": 6.6 },
           "image": { "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" },
           "genres": [ "Drama","Romance"]
         }
       }
     })
   },
 }));

describe('Search.vue', () => {
  let wrapper;
  beforeEach(() => {
     wrapper  = shallowMount(search, {
      localVue,
      router,
      propsData:{
        query:2,
      },
      data() { 
        return {
          searchShows: {
            "score": 0.909443, "show": {
              "id": 139, "name": "Girls", "rating": { "average": 6.6 },
              "image": { "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" },
              "genres": [ "Drama","Romance"]
          },
          searchCheck: true,
          }
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it('Testing the router', () => {
    wrapper.vm.goToTvDetails(1);
    expect(wrapper.vm.$route.name).toBe("Details");
  });

   it('Should search the shows properly when mounted', async () => {
     let mockedResponse = {
       "score": 0.909443, "show": {
         "id": 139, "name": "Girls", "rating": { "average": 6.6 },
         "image": { "medium":"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg" },
          "genres": [ "Drama","Romance"]
       }
     }
     wrapper.vm.searchTvShow = jest.fn()
     await wrapper.vm.searchTvShow()
     expect(wrapper.vm.searchShows).toEqual(mockedResponse);
   })

});
