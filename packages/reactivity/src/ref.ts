import { trigger } from "./effect";
import {} from "@wm/util";

export function ref(value: any) {
  return new RefImpl();
}

interface ref {
  _isRef: boolean;
  _val: any;
}

class RefImpl {
  isRef: boolean;
  _val: any;
  constructor(val) {
    this.isRef = true;
    this._val = val;
  }
  get value() {
    return this._val;
  }
  set value(newVal) {
    if (newVal !== this._val) {
      this._val = newVal;
      trigger(this, "ref-set", "value");
    }
  }
}

// let v = new RefImpl();
function convert() {}
