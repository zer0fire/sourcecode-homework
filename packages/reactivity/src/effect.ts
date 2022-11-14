let targetMap = new WeakMap();
let activeEffect: null | Function = null;
export function trigger(obj, key) {}

export function track(obj, key) {
  let depsMap = targetMap.get(obj);
  if (!depsMap) {
    targetMap.set(obj, new Map());
  }
  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, new Set());
  }
}

export function effect(fn: Function) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}
