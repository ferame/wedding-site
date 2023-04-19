import { describe, expect, it } from "vitest";

import AppVue from "@/App.vue";
import { mount } from "@vue/test-utils";

describe("App", () => {
  it("renders properly", () => {
    const wrapper = mount(AppVue);
    expect(wrapper.exists()).toBe(true);
  });
});
