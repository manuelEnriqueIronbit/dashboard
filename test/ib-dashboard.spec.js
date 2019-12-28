/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-dashboard.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-dashboard></ib-dashboard>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
