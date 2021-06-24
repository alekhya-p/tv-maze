import { shallowMount, createLocalVue } from '@vue/test-utils';
import Details from '@/components/Details.vue';
import VueRouter from 'vue-router';

 const localVue = createLocalVue();
 localVue.use(VueRouter);

jest.mock('@/services/api', () => ({
  getTvShowDetails: () => {
    return Promise.resolve({
      data: {
        "id": 50, "name": "The Lottery", "rating": { "average": 6.5 },
        "image": { "original":"https://static.tvmaze.com/uploads/images/original_untouched/146/366444.jpg" },
        "genres": ["Drama", "Science-Fiction", "Thriller"]
      }
    })
  },
}));

describe('Details.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Details, {
      localVue,
      propsData:{
        id:2,
      },
      data() {
        return {
          details: {
            "id": 50, "name": "The Lottery", "rating": { "average": 6.5 },
            "image": { "original":"https://static.tvmaze.com/uploads/images/original_untouched/146/366444.jpg" },
            "genres": ["Drama", "Science-Fiction", "Thriller"]
          },
          detailsCheck: true,
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

  it('Should load the shows data properly when mounted', async () => {
    let mockedResponse = {
      "id": 50, "name": "The Lottery", "rating": { "average": 6.5 },
      "image": { "original":"https://static.tvmaze.com/uploads/images/original_untouched/146/366444.jpg" },
      "genres": ["Drama", "Science-Fiction", "Thriller"]
    }
    wrapper.vm.getTvShowDetails = jest.fn()
    await wrapper.vm.getTvShowDetails()
    expect(wrapper.vm.details).toEqual(mockedResponse);
  });
});