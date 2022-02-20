import { mount } from "@vue/test-utils";
import SingleProduct from "./SingleProduct.vue";

describe("SingleProduct", () => {
  // Inspect the raw component options
  it("has data", () => {
    expect(typeof SingleProduct.data).toBe("undefined");
  });
});
