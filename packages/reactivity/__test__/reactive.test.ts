import { describe, it, expect } from "vitest";
import { effect } from "../src/effect";
import { reactive } from "../src/reactive";

describe("响应式", () => {
  it("reactive", () => {
    let obj = reactive({ count: 1 });
    let val;
    effect(() => {
      val = obj.count;
    });

    expect(val).toBe(1);

    obj.count++;
    expect(val).toBe(2);
  });
  it("ref", () => {
    let obj = reactive({ count: 1 });
    let val;
    effect(() => {
      val = obj.count;
    });

    expect(val).toBe(1);

    obj.count++;
    expect(val).toBe(2);
  });
});
