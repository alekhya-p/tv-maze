import { shallowMount, createLocalVue } from "@vue/test-utils";
import PageNotFound from "../../../../src/components/PageNotFound.vue";

describe("Testing Page Not Found Component", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(PageNotFound, {
      localVue,
      data() {
        return {
          errorMessage: "Page Not Found",
        };
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
