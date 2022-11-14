import { track, trigger } from "./effect";
export function reactive(obj: any) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value, receiver) {
      //   target[key] = value;
      const ret = Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return ret;
    },
  });
}
