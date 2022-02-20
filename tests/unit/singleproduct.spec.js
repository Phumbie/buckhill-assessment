import { shallowMount } from "@vue/test-utils";
import SingleProduct from "../../src/components/Shop/Products/SingleProduct.vue";

const objectProp = {};
describe("Single Product", () => {
  let cmp;
  const createCmp = (propsData) =>
    shallowMount(SingleProduct, { propsData, stubs: ["v-img"] });
  // const wrapper = mount(SingleProduct);
  it("has a product property", () => {
    cmp = createCmp({ product: objectProp });
    expect(cmp.props().product).toBe(objectProp);
  });
});
