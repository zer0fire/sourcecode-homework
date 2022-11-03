export function isObject(val: Object) {
  return typeof val === "object";
}

export function isOn(key: string) {
  return key[0] === "o" && key[1] === "n";
}
