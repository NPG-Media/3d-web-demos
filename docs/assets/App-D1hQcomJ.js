import { r as reactExports, s as scenePath, j as jsxRuntimeExports, T as Typography, c as clientExports, B as Box } from "./index-CDkiqvN7.js";
import { V as Vector2, C as Color, m as Vector3, Q as Quaternion, r as Matrix4, s as Vector4, E as Euler, t as Spherical, u as useThree, g as useFrame, e as Object3D, A as AnimationMixer, v as useTheme, l as useGLTF, M as Mesh, w as MeshStandardMaterial, T as TextureLoader, a as MathUtils, x as RepeatWrapping, n as Canvas, o as Stats, p as HamburgerMenu, q as CameraHelper } from "./HamburgerMenu-HvGsvgbZ.js";
import { u as useMediaQuery, C as Card, b as CardContent, P as PoiProvider, L as LoadingSpinner, c as LoadModels, E as Environment, A as AddCameraTarget, a as EffectComposer, T as ToneMapping } from "./AddCameraTarget-CkL1hVCT.js";
import { T as Text, D as DynamicCameraFov } from "./DynamicCameraFov-CX8nCism.js";
import { u as useHelper } from "./Helper-OuO6zV8T.js";
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
new Vector2();
new Vector2();
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function repeat(t, length) {
  return clamp(t - Math.floor(t / length) * length, 0, length);
}
function deltaAngle(current, target) {
  var delta = repeat(target - current, Math.PI * 2);
  if (delta > Math.PI) delta -= Math.PI * 2;
  return delta;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Grad = function Grad2(x, y, z) {
  var _this = this;
  _classCallCheck(this, Grad2);
  _defineProperty(this, "dot2", function(x2, y2) {
    return _this.x * x2 + _this.y * y2;
  });
  _defineProperty(this, "dot3", function(x2, y2, z2) {
    return _this.x * x2 + _this.y * y2 + _this.z * z2;
  });
  this.x = x;
  this.y = y;
  this.z = z;
};
var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
var perm = new Array(512);
var gradP = new Array(512);
var seed = function seed2(_seed) {
  if (_seed > 0 && _seed < 1) {
    _seed *= 65536;
  }
  _seed = Math.floor(_seed);
  if (_seed < 256) {
    _seed |= _seed << 8;
  }
  for (var i = 0; i < 256; i++) {
    var v;
    if (i & 1) {
      v = p[i] ^ _seed & 255;
    } else {
      v = p[i] ^ _seed >> 8 & 255;
    }
    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
};
seed(0);
function normalizeSeed(seed3) {
  if (typeof seed3 === "number") {
    seed3 = Math.abs(seed3);
  } else if (typeof seed3 === "string") {
    var string = seed3;
    seed3 = 0;
    for (var i = 0; i < string.length; i++) {
      seed3 = (seed3 + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
    }
  }
  if (seed3 === 0) {
    seed3 = 311;
  }
  return seed3;
}
function lcgRandom(seed3) {
  var state = normalizeSeed(seed3);
  return function() {
    var result = state * 48271 % 2147483647;
    state = result;
    return result / 2147483647;
  };
}
var Generator = function Generator2(_seed) {
  var _this = this;
  _classCallCheck(this, Generator2);
  _defineProperty(this, "seed", 0);
  _defineProperty(this, "init", function(seed3) {
    _this.seed = seed3;
    _this.value = lcgRandom(seed3);
  });
  _defineProperty(this, "value", lcgRandom(this.seed));
  this.init(_seed);
};
new Generator(Math.random());
var rsqw = function rsqw2(t) {
  var delta = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.01;
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1 / (2 * Math.PI);
  return a / Math.atan(1 / delta) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};
var exp = function exp2(t) {
  return 1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);
};
var linear = function linear2(t) {
  return t;
};
var sine = {
  "in": function _in(x) {
    return 1 - Math.cos(x * Math.PI / 2);
  },
  out: function out(x) {
    return Math.sin(x * Math.PI / 2);
  },
  inOut: function inOut(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }
};
var cubic = {
  "in": function _in2(x) {
    return x * x * x;
  },
  out: function out2(x) {
    return 1 - Math.pow(1 - x, 3);
  },
  inOut: function inOut2(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
};
var quint = {
  "in": function _in3(x) {
    return x * x * x * x * x;
  },
  out: function out3(x) {
    return 1 - Math.pow(1 - x, 5);
  },
  inOut: function inOut3(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }
};
var circ = {
  "in": function _in4(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  },
  out: function out4(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  },
  inOut: function inOut4(x) {
    return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  }
};
var quart = {
  "in": function _in5(t) {
    return t * t * t * t;
  },
  out: function out5(t) {
    return 1 - --t * t * t * t;
  },
  inOut: function inOut5(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }
};
var expo = {
  "in": function _in6(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  },
  out: function out6(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  },
  inOut: function inOut6(x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
  }
};
function damp(current, prop, target) {
  var smoothTime = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25;
  var delta = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.01;
  var maxSpeed = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Infinity;
  var easing2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : exp;
  var eps = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1e-3;
  var vel = "velocity_" + prop;
  if (current.__damp === void 0) current.__damp = {};
  if (current.__damp[vel] === void 0) current.__damp[vel] = 0;
  if (Math.abs(current[prop] - target) <= eps) {
    current[prop] = target;
    return false;
  }
  smoothTime = Math.max(1e-4, smoothTime);
  var omega = 2 / smoothTime;
  var t = easing2(omega * delta);
  var change = current[prop] - target;
  var originalTo = target;
  var maxChange = maxSpeed * smoothTime;
  change = Math.min(Math.max(change, -maxChange), maxChange);
  target = current[prop] - change;
  var temp = (current.__damp[vel] + omega * change) * delta;
  current.__damp[vel] = (current.__damp[vel] - omega * temp) * t;
  var output = target + (change + temp) * t;
  if (originalTo - current[prop] > 0 === output > originalTo) {
    output = originalTo;
    current.__damp[vel] = (output - originalTo) / delta;
  }
  current[prop] = output;
  return true;
}
var isCamera = function isCamera2(v) {
  return v && v.isCamera;
};
var isLight = function isLight2(v) {
  return v && v.isLight;
};
var vl3d = /* @__PURE__ */ new Vector3();
var _q1 = /* @__PURE__ */ new Quaternion();
var _q2 = /* @__PURE__ */ new Quaternion();
var _m1 = /* @__PURE__ */ new Matrix4();
var _position = /* @__PURE__ */ new Vector3();
function dampLookAt(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") vl3d.setScalar(target);
  else if (Array.isArray(target)) vl3d.set(target[0], target[1], target[2]);
  else vl3d.copy(target);
  var parent = current.parent;
  current.updateWorldMatrix(true, false);
  _position.setFromMatrixPosition(current.matrixWorld);
  if (isCamera(current) || isLight(current)) _m1.lookAt(_position, vl3d, current.up);
  else _m1.lookAt(vl3d, _position, current.up);
  dampQ(current.quaternion, _q2.setFromRotationMatrix(_m1), smoothTime, delta, maxSpeed, easing2, eps);
  if (parent) {
    _m1.extractRotation(parent.matrixWorld);
    _q1.setFromRotationMatrix(_m1);
    dampQ(current.quaternion, _q2.copy(current.quaternion).premultiply(_q1.invert()), smoothTime, delta, maxSpeed, easing2, eps);
  }
}
function dampAngle(current, prop, target, smoothTime, delta, maxSpeed, easing2, eps) {
  return damp(current, prop, current[prop] + deltaAngle(current[prop], target), smoothTime, delta, maxSpeed, easing2, eps);
}
var v2d = /* @__PURE__ */ new Vector2();
var a2, b2;
function damp2(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v2d.setScalar(target);
  else if (Array.isArray(target)) v2d.set(target[0], target[1]);
  else v2d.copy(target);
  a2 = damp(current, "x", v2d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b2 = damp(current, "y", v2d.y, smoothTime, delta, maxSpeed, easing2, eps);
  return a2 || b2;
}
var v3d = /* @__PURE__ */ new Vector3();
var a3, b3, c3;
function damp3(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v3d.setScalar(target);
  else if (Array.isArray(target)) v3d.set(target[0], target[1], target[2]);
  else v3d.copy(target);
  a3 = damp(current, "x", v3d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b3 = damp(current, "y", v3d.y, smoothTime, delta, maxSpeed, easing2, eps);
  c3 = damp(current, "z", v3d.z, smoothTime, delta, maxSpeed, easing2, eps);
  return a3 || b3 || c3;
}
var v4d = /* @__PURE__ */ new Vector4();
var a4, b4, c4, d4;
function damp4(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v4d.setScalar(target);
  else if (Array.isArray(target)) v4d.set(target[0], target[1], target[2], target[3]);
  else v4d.copy(target);
  a4 = damp(current, "x", v4d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b4 = damp(current, "y", v4d.y, smoothTime, delta, maxSpeed, easing2, eps);
  c4 = damp(current, "z", v4d.z, smoothTime, delta, maxSpeed, easing2, eps);
  d4 = damp(current, "w", v4d.w, smoothTime, delta, maxSpeed, easing2, eps);
  return a4 || b4 || c4 || d4;
}
var rot = /* @__PURE__ */ new Euler();
var aE, bE, cE;
function dampE(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (Array.isArray(target)) rot.set(target[0], target[1], target[2], target[3]);
  else rot.copy(target);
  aE = dampAngle(current, "x", rot.x, smoothTime, delta, maxSpeed, easing2, eps);
  bE = dampAngle(current, "y", rot.y, smoothTime, delta, maxSpeed, easing2, eps);
  cE = dampAngle(current, "z", rot.z, smoothTime, delta, maxSpeed, easing2, eps);
  return aE || bE || cE;
}
var col = /* @__PURE__ */ new Color();
var aC, bC, cC;
function dampC(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (target instanceof Color) col.copy(target);
  else if (Array.isArray(target)) col.setRGB(target[0], target[1], target[2]);
  else col.set(target);
  aC = damp(current, "r", col.r, smoothTime, delta, maxSpeed, easing2, eps);
  bC = damp(current, "g", col.g, smoothTime, delta, maxSpeed, easing2, eps);
  cC = damp(current, "b", col.b, smoothTime, delta, maxSpeed, easing2, eps);
  return aC || bC || cC;
}
var qt = /* @__PURE__ */ new Quaternion();
var v4result = /* @__PURE__ */ new Vector4();
var v4velocity = /* @__PURE__ */ new Vector4();
var v4error = /* @__PURE__ */ new Vector4();
var aQ, bQ, cQ, dQ;
function dampQ(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  var cur = current;
  if (Array.isArray(target)) qt.set(target[0], target[1], target[2], target[3]);
  else qt.copy(target);
  var multi = current.dot(qt) > 0 ? 1 : -1;
  qt.x *= multi;
  qt.y *= multi;
  qt.z *= multi;
  qt.w *= multi;
  aQ = damp(current, "x", qt.x, smoothTime, delta, maxSpeed, easing2, eps);
  bQ = damp(current, "y", qt.y, smoothTime, delta, maxSpeed, easing2, eps);
  cQ = damp(current, "z", qt.z, smoothTime, delta, maxSpeed, easing2, eps);
  dQ = damp(current, "w", qt.w, smoothTime, delta, maxSpeed, easing2, eps);
  v4result.set(current.x, current.y, current.z, current.w).normalize();
  v4velocity.set(cur.__damp.velocity_x, cur.__damp.velocity_y, cur.__damp.velocity_z, cur.__damp.velocity_w);
  v4error.copy(v4result).multiplyScalar(v4velocity.dot(v4result) / v4result.dot(v4result));
  cur.__damp.velocity_x -= v4error.x;
  cur.__damp.velocity_y -= v4error.y;
  cur.__damp.velocity_z -= v4error.z;
  cur.__damp.velocity_w -= v4error.w;
  current.set(v4result.x, v4result.y, v4result.z, v4result.w);
  return aQ || bQ || cQ || dQ;
}
var spherical = /* @__PURE__ */ new Spherical();
var aS, bS, cS;
function dampS(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (Array.isArray(target)) spherical.set(target[0], target[1], target[2]);
  else spherical.copy(target);
  aS = damp(current, "radius", spherical.radius, smoothTime, delta, maxSpeed, easing2, eps);
  bS = dampAngle(current, "phi", spherical.phi, smoothTime, delta, maxSpeed, easing2, eps);
  cS = dampAngle(current, "theta", spherical.theta, smoothTime, delta, maxSpeed, easing2, eps);
  return aS || bS || cS;
}
var mat = /* @__PURE__ */ new Matrix4();
var mPos = /* @__PURE__ */ new Vector3();
var mRot = /* @__PURE__ */ new Quaternion();
var mSca = /* @__PURE__ */ new Vector3();
var aM, bM, cM;
function dampM(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  var cur = current;
  if (cur.__damp === void 0) {
    cur.__damp = {
      position: new Vector3(),
      rotation: new Quaternion(),
      scale: new Vector3()
    };
    current.decompose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
  }
  if (Array.isArray(target)) mat.set.apply(mat, _toConsumableArray(target));
  else mat.copy(target);
  mat.decompose(mPos, mRot, mSca);
  aM = damp3(cur.__damp.position, mPos, smoothTime, delta, maxSpeed, easing2, eps);
  bM = dampQ(cur.__damp.rotation, mRot, smoothTime, delta, maxSpeed, easing2, eps);
  cM = damp3(cur.__damp.scale, mSca, smoothTime, delta, maxSpeed, easing2, eps);
  current.compose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
  return aM || bM || cM;
}
var easing = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  rsqw,
  exp,
  linear,
  sine,
  cubic,
  quint,
  circ,
  quart,
  expo,
  damp,
  dampLookAt,
  dampAngle,
  damp2,
  damp3,
  damp4,
  dampE,
  dampC,
  dampQ,
  dampS,
  dampM
});
const context = /* @__PURE__ */ reactExports.createContext(null);
function useScroll() {
  return reactExports.useContext(context);
}
function ScrollControls({
  eps = 1e-5,
  enabled = true,
  infinite,
  horizontal,
  pages = 1,
  distance = 1,
  damping = 0.25,
  maxSpeed = Infinity,
  prepend = false,
  style = {},
  children
}) {
  const {
    get,
    setEvents,
    gl,
    size,
    invalidate,
    events
  } = useThree();
  const [el] = reactExports.useState(() => document.createElement("div"));
  const [fill] = reactExports.useState(() => document.createElement("div"));
  const [fixed] = reactExports.useState(() => document.createElement("div"));
  const target = gl.domElement.parentNode;
  const scroll = reactExports.useRef(0);
  const state = reactExports.useMemo(() => {
    const state2 = {
      el,
      eps,
      fill,
      fixed,
      horizontal,
      damping,
      offset: 0,
      delta: 0,
      scroll,
      pages,
      // 0-1 for a range between from -> from + distance
      range(from, distance2, margin = 0) {
        const start = from - margin;
        const end = start + distance2 + margin * 2;
        return this.offset < start ? 0 : this.offset > end ? 1 : (this.offset - start) / (end - start);
      },
      // 0-1-0 for a range between from -> from + distance
      curve(from, distance2, margin = 0) {
        return Math.sin(this.range(from, distance2, margin) * Math.PI);
      },
      // true/false for a range between from -> from + distance
      visible(from, distance2, margin = 0) {
        const start = from - margin;
        const end = start + distance2 + margin * 2;
        return this.offset >= start && this.offset <= end;
      }
    };
    return state2;
  }, [eps, damping, horizontal, pages]);
  reactExports.useEffect(() => {
    el.style.position = "absolute";
    el.style.width = "100%";
    el.style.height = "100%";
    el.style[horizontal ? "overflowX" : "overflowY"] = "auto";
    el.style[horizontal ? "overflowY" : "overflowX"] = "hidden";
    el.style.top = "0px";
    el.style.left = "0px";
    for (const key in style) {
      el.style[key] = style[key];
    }
    fixed.style.position = "sticky";
    fixed.style.top = "0px";
    fixed.style.left = "0px";
    fixed.style.width = "100%";
    fixed.style.height = "100%";
    fixed.style.overflow = "hidden";
    el.appendChild(fixed);
    fill.style.height = horizontal ? "100%" : `${pages * distance * 100}%`;
    fill.style.width = horizontal ? `${pages * distance * 100}%` : "100%";
    fill.style.pointerEvents = "none";
    el.appendChild(fill);
    if (prepend) target.prepend(el);
    else target.appendChild(el);
    el[horizontal ? "scrollLeft" : "scrollTop"] = 1;
    const oldTarget = events.connected || gl.domElement;
    requestAnimationFrame(() => events.connect == null ? void 0 : events.connect(el));
    const oldCompute = get().events.compute;
    setEvents({
      compute(event, state2) {
        const {
          left,
          top
        } = target.getBoundingClientRect();
        const offsetX = event.clientX - left;
        const offsetY = event.clientY - top;
        state2.pointer.set(offsetX / state2.size.width * 2 - 1, -(offsetY / state2.size.height) * 2 + 1);
        state2.raycaster.setFromCamera(state2.pointer, state2.camera);
      }
    });
    return () => {
      target.removeChild(el);
      setEvents({
        compute: oldCompute
      });
      events.connect == null || events.connect(oldTarget);
    };
  }, [pages, distance, horizontal, el, fill, fixed, target]);
  reactExports.useEffect(() => {
    if (events.connected === el) {
      const containerLength = size[horizontal ? "width" : "height"];
      const scrollLength = el[horizontal ? "scrollWidth" : "scrollHeight"];
      const scrollThreshold = scrollLength - containerLength;
      let current = 0;
      let disableScroll = true;
      let firstRun = true;
      const onScroll = () => {
        if (!enabled || firstRun) return;
        invalidate();
        current = el[horizontal ? "scrollLeft" : "scrollTop"];
        scroll.current = current / scrollThreshold;
        if (infinite) {
          if (!disableScroll) {
            if (current >= scrollThreshold) {
              const damp5 = 1 - state.offset;
              el[horizontal ? "scrollLeft" : "scrollTop"] = 1;
              scroll.current = state.offset = -damp5;
              disableScroll = true;
            } else if (current <= 0) {
              const damp5 = 1 + state.offset;
              el[horizontal ? "scrollLeft" : "scrollTop"] = scrollLength;
              scroll.current = state.offset = damp5;
              disableScroll = true;
            }
          }
          if (disableScroll) setTimeout(() => disableScroll = false, 40);
        }
      };
      el.addEventListener("scroll", onScroll, {
        passive: true
      });
      requestAnimationFrame(() => firstRun = false);
      const onWheel = (e) => el.scrollLeft += e.deltaY / 2;
      if (horizontal) el.addEventListener("wheel", onWheel, {
        passive: true
      });
      return () => {
        el.removeEventListener("scroll", onScroll);
        if (horizontal) el.removeEventListener("wheel", onWheel);
      };
    }
  }, [el, events, size, infinite, state, invalidate, horizontal, enabled]);
  let last = 0;
  useFrame((_, delta) => {
    last = state.offset;
    easing.damp(state, "offset", scroll.current, damping, delta, maxSpeed, void 0, eps);
    easing.damp(state, "delta", Math.abs(last - state.offset), damping, delta, maxSpeed, void 0, eps);
    if (state.delta > eps) invalidate();
  });
  return /* @__PURE__ */ reactExports.createElement(context.Provider, {
    value: state
  }, children);
}
function useAnimations(clips, root) {
  const ref = reactExports.useRef();
  const [actualRef] = reactExports.useState(() => root ? root instanceof Object3D ? {
    current: root
  } : root : ref);
  const [mixer] = reactExports.useState(() => new AnimationMixer(void 0));
  reactExports.useLayoutEffect(() => {
    if (root) actualRef.current = root instanceof Object3D ? root : root.current;
    mixer._root = actualRef.current;
  });
  const lazyActions = reactExports.useRef({});
  const api = reactExports.useMemo(() => {
    const actions = {};
    clips.forEach((clip) => Object.defineProperty(actions, clip.name, {
      enumerable: true,
      get() {
        if (actualRef.current) {
          return lazyActions.current[clip.name] || (lazyActions.current[clip.name] = mixer.clipAction(clip, actualRef.current));
        }
      },
      configurable: true
    }));
    return {
      ref: actualRef,
      clips,
      actions,
      names: clips.map((c) => c.name),
      mixer
    };
  }, [clips]);
  useFrame((state, delta) => mixer.update(delta));
  reactExports.useEffect(() => {
    const currentRoot = actualRef.current;
    return () => {
      lazyActions.current = {};
      mixer.stopAllAction();
      Object.values(api.actions).forEach((action) => {
        if (currentRoot) {
          mixer.uncacheAction(action, currentRoot);
        }
      });
    };
  }, [clips]);
  return api;
}
const scrollStops = [
  {
    offset: 0,
    name: "Boat window",
    type: "2D",
    poiInfo: {
      title: "3D Web Experiences are Here!",
      description: ["Start scrolling to get a taste of what 3D web experiences can offer."],
      image: scenePath + "/images/interactive.jpg",
      parentStyling: { fontFamily: "Red Hat Display" },
      globalPath: true,
      imageStyling: { objectFit: "cover", height: "auto" }
    }
  },
  {
    name: "Boat front",
    offset: 0.25,
    poiInfo: {
      title: "A New Way to Visualize Web Content",
      description: [
        "Wether it's for showcasing products, visualizing data, staff training, or just for fun, 3D web experiences are an exciting new way to engage with web content."
      ],
      parentStyling: { fontFamily: "Red Hat Display" },
      image: scenePath + "/images/ship.jpg",
      imageStyling: { objectFit: "cover", height: "auto" },
      globalPath: true
    }
  },
  {
    name: "Windmill",
    offset: 0.707,
    component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ThreeDText, { text: "Animations, Interactions and More!", position: [-0.08, 0.23, 0.18], rotation: [0, Math.PI, 0], scale: [0.08, 0.08, 0.08] })
  },
  {
    name: "Boat end",
    offset: 0.85,
    poiInfo: {
      title: "Interactive 3D models in browser",
      description: [
        "This is a test of the ScrollControls component.",
        "Scroll to move the camera to different stops.",
        "The camera will lock to each stop for a short delay.",
        "The camera will unlock after the delay and allow scrolling to the next stop."
      ],
      image: scenePath + "/images/ship.jpg",
      imageStyling: { objectFit: "cover", height: "auto" },
      globalPath: true
    }
  },
  {
    name: "Boat end",
    offset: 1,
    poiInfo: {
      title: "Interactive 3D models in browser",
      description: [
        "This is a test of the ScrollControls component.",
        "Scroll to move the camera to different stops.",
        "The camera will lock to each stop for a short delay.",
        "The camera will unlock after the delay and allow scrolling to the next stop."
      ],
      image: scenePath + "/images/ship.jpg",
      imageStyling: { objectFit: "cover", height: "auto" },
      globalPath: true
    }
  }
];
const InfoWindow = ({ title, description, image, parentStyling, globalPath = false, imageStyling, buttons }) => {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down("md"));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "25rem",
        height: "25rem",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        pointerEvents: "auto",
        borderRadius: "5rem",
        padding: "3rem",
        ...parentStyling
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { sx: { flex: 1 }, children: [
        title && /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h5", component: "div", sx: { fontFamily: "Red Hat Display", fontWeight: 700, color: "white", paddingBottom: 1 }, children: title }),
        description && description.map((desc, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", sx: { fontFamily: "Red Hat Display", fontWeight: 400, color: "white", paddingTop: 1 }, children: desc }, index))
      ] })
    }
  );
};
const ScrollDemo = ({ modelData, scrollLength = 1 }) => {
  return (
    // Wrap the scene in ScrollControls. Adjust pages as needed.
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollControls, { pages: scrollLength, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollModel, { modelData, stopDelay: 600 }) })
  );
};
function ScrollModel({ modelData, stopDelay = 1e3 }) {
  var _a, _b;
  const { camera } = useThree();
  const scroll = useScroll();
  const modelPath = scenePath + modelData.path;
  const { scene, animations } = useGLTF(modelPath);
  const RS_Camera = scene.getObjectByName("RS_Camera");
  const Rotor = scene.getObjectByName("Rotor");
  const { actions } = useAnimations(animations, scene);
  const [targetOffset, setTargetOffset] = reactExports.useState(0);
  reactExports.useEffect(() => void (actions["Animation"].play().paused = true), [actions]);
  const stops = scrollStops;
  const stopThreshold = 0.08;
  const [activeStop, setActiveStop] = reactExports.useState(0);
  const [scrollLocked, setScrollLock] = reactExports.useState(false);
  const [isAtStop, setIsAtStop] = reactExports.useState(true);
  const [preventLock, setPreventLock] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (scroll.el) {
      scroll.el.style.overflow = "scroll";
      scroll.el.style.scrollbarWidth = "none";
      scroll.el.style.msOverflowStyle = "none";
    }
  }, [scroll]);
  const texturePaths = {
    RobotArm: `${scenePath}/textures/M_RobotArm_occlusionRoughnessMetallic.png`,
    WindTurbine_Base: `${scenePath}/textures/M_Windmill_occlusionRoughnessMetallic.png`,
    WindTurbine_Base2: `${scenePath}/textures/M_WindmillBase_occlusionRoughnessMetallic.png`,
    Tanker: `${scenePath}/textures/M_Tanker_occlusionRoughnessMetallic.png`
  };
  const usePreloadedTextures = () => {
    const [textures, setTextures] = reactExports.useState({});
    const loadedRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      if (loadedRef.current) return;
      const loader = new TextureLoader();
      const loadTexture = (path) => new Promise((resolve) => {
        loader.load(path, (texture) => {
          texture.wrapS = RepeatWrapping;
          texture.wrapT = RepeatWrapping;
          texture.flipY = false;
          resolve(texture);
        });
      });
      Promise.all(
        Object.entries(texturePaths).map(async ([key, path]) => {
          const texture = await loadTexture(path);
          return { key, texture };
        })
      ).then((loadedTextures) => {
        const textureMap = Object.fromEntries(loadedTextures.map(({ key, texture }) => [key, texture]));
        setTextures(textureMap);
        loadedRef.current = true;
      });
    }, []);
    return textures;
  };
  const ApplyTextures = ({ scene: scene2 }) => {
    const textures = usePreloadedTextures();
    reactExports.useEffect(() => {
      if (!scene2 || Object.keys(textures).length === 0) return;
      const RobotArm = scene2.getObjectByName("RobotArm");
      if (RobotArm) {
        RobotArm.traverse((child) => {
          if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
            child.material.aoMap = textures.RobotArm;
            child.material.needsUpdate = true;
          }
        });
      }
      const WindTurbine_Base = scene2.getObjectByName("WindTurbine_Base");
      if (WindTurbine_Base) {
        WindTurbine_Base.traverse((child) => {
          if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
            child.material.aoMap = textures.WindTurbine_Base;
            child.material.needsUpdate = true;
          }
        });
      }
      if (WindTurbine_Base instanceof Mesh && WindTurbine_Base.material instanceof MeshStandardMaterial) {
        WindTurbine_Base.material.aoMap = textures.WindTurbine_Base2;
        WindTurbine_Base.material.needsUpdate = true;
      }
      const Tanker = scene2.getObjectByName("Tanker");
      if (Tanker) {
        Tanker.traverse((child) => {
          if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
            child.material.aoMap = textures.Tanker;
            child.material.needsUpdate = true;
          }
        });
      }
    }, [scene2, textures]);
    return null;
  };
  scene.traverse((child) => {
    if (child.name.includes("Placeholder")) {
      child.visible = false;
    }
    if (child.name.includes("PlaneToHide")) {
      child.visible = false;
    }
  });
  const checkScroll = () => {
    for (let i = 0; i < stops.length; i++) {
      if (Math.abs(scroll.offset - stops[i].offset) < stopThreshold) {
        if (i === activeStop) {
          return;
        }
        setScrollLock(true);
        setIsAtStop(true);
        scroll.el.style.touchAction = "none";
        setActiveStop(i);
        console.log("Scroll locked to stop: ", i);
        setTimeout(() => {
          setScrollLock(false);
          scroll.el.style.touchAction = "auto";
          console.log("Scroll unlocked");
        }, stopDelay);
        break;
      }
    }
  };
  const handleScrollEvent = (e) => {
    if (scrollLocked) {
      e.preventDefault();
    } else {
      if (isAtStop && !preventLock) {
        setPreventLock(true);
        setTimeout(() => {
          setIsAtStop(false);
          setPreventLock(false);
        }, 1e3);
      }
    }
  };
  const updateCamera = () => {
    if (RS_Camera) {
      const worldPos = RS_Camera.getWorldPosition(new Vector3());
      const worldQuat = RS_Camera.getWorldQuaternion(new Quaternion());
      camera.position.set(worldPos.x, worldPos.y, worldPos.z);
      camera.quaternion.set(worldQuat.x, worldQuat.y, worldQuat.z, worldQuat.w);
      if (targetOffset < 0.2) {
        camera.near = 2e-6;
        camera.far = 0.1;
      } else if (targetOffset < 0.6) {
        camera.near = 1e-5;
        camera.far = 0.5;
      } else {
        camera.near = 0.01;
        camera.far = 8;
      }
      camera.updateProjectionMatrix();
    } else {
      console.warn("RS_Camera not found in scene.");
    }
  };
  const scrollOverlayRef = reactExports.useRef(null);
  const rootRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!scrollOverlayRef.current) {
      const uiOverlay = document.getElementById("ui-overlay");
      if (!uiOverlay) {
        console.error("UI overlay not found!");
        return;
      }
      const scrollOverlay = document.createElement("div");
      scrollOverlay.id = "scrollOverlay";
      scrollOverlay.style.position = "absolute";
      scrollOverlay.style.top = "0vh";
      scrollOverlay.style.left = "0";
      scrollOverlay.style.width = "100%";
      scrollOverlay.style.height = `${200 * scrollStops.length}vh`;
      uiOverlay.appendChild(scrollOverlay);
      scrollOverlayRef.current = scrollOverlay;
      rootRef.current = clientExports.createRoot(scrollOverlay);
      rootRef.current.render(
        /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: scrollStops.map(
          (stop, index) => stop.poiInfo && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              sx: {
                position: "absolute",
                top: `${stop.offset * (scrollStops.length - 1) * 200 + 50}vh`,
                left: "2rem",
                transform: "translateY(-50%)",
                pointerEvents: "auto"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                InfoWindow,
                {
                  title: stop.poiInfo.title,
                  description: stop.poiInfo.description,
                  image: stop.poiInfo.image,
                  globalPath: stop.poiInfo.globalPath
                }
              )
            },
            index
          )
        ) })
      );
    }
    return () => {
      var _a2;
      if (rootRef.current) {
        rootRef.current.unmount();
      }
      (_a2 = scrollOverlayRef.current) == null ? void 0 : _a2.remove();
    };
  }, []);
  reactExports.useEffect(() => {
    scroll.el.addEventListener("wheel", handleScrollEvent, { passive: false });
    scroll.el.addEventListener("touchmove", handleScrollEvent, { passive: false });
    return () => {
      scroll.el.removeEventListener("wheel", handleScrollEvent);
      scroll.el.removeEventListener("touchmove", handleScrollEvent);
    };
  });
  useFrame((state, delta) => {
    const action = actions["Animation"];
    if (!scrollLocked && !isAtStop) {
      if (!useDebug) {
        checkScroll();
      }
    }
    if (Rotor) {
      Rotor.rotateZ(delta * -1.6);
    }
    if (scrollLocked) {
      scroll.el.scrollTop = stops[activeStop].offset * (scroll.el.scrollHeight - scroll.el.clientHeight);
      setTargetOffset(stops[activeStop].offset);
    } else {
      setTargetOffset(scroll.offset);
    }
    if (Math.abs(action.time / action.getClip().duration - targetOffset) > 1e-4) {
      action.time = MathUtils.damp(action.time, action.getClip().duration * targetOffset, 3, delta);
    } else {
      action.time = action.getClip().duration * targetOffset;
    }
    if (scrollOverlayRef.current) {
      scrollOverlayRef.current.style.top = -(action.time / action.getClip().duration * 200 * (stops.length - 1)) + "vh";
    }
    updateCamera();
    if (useDebug) {
      console.log("Scroll offset: ", scroll.offset);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("primitive", { object: scene, dispose: null }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApplyTextures, { scene }),
    activeStop !== null && ((_a = stops[activeStop]) == null ? void 0 : _a.component) && ((_b = stops[activeStop]) == null ? void 0 : _b.component())
  ] });
}
const ThreeDText = ({ text, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Text,
    {
      font: "fonts/RedHatDisplay-SemiBold.ttf",
      color: "#ffffff",
      anchorY: "top",
      anchorX: "left",
      fontSize: 0.5,
      position,
      rotation,
      scale,
      maxWidth: 3,
      lineHeight: 1.2,
      fillOpacity: 1,
      children: text
    }
  );
};
const projectData = {
  sceneTitle: "Scroll Demo",
  sceneModels: [
    {
      path: "/models/scrollDemo2.glb",
      castShadow: true,
      receiveShadow: true
    }
  ],
  canvasSettings: {
    backgroundColor: "#666666",
    antialias: true,
    environmentProps: {
      preset: "studio",
      background: false,
      environmentIntensity: 0.1,
      backgroundBlurriness: 0.1
    },
    usePostEffects: true
  },
  parentPoi: {
    name: "Test scene parent POI",
    description: "The parent POI for the test scene, encompassing all child POIs.",
    type: "staticObject",
    isMaster: true,
    cameraControls: {
      type: "orbit",
      enablePan: false,
      startPosition: {
        x: 0,
        y: 2,
        z: 10
      },
      targetOffset: {
        x: 0,
        y: 1,
        z: 0
      },
      constraints: {
        up: 50,
        down: -1,
        minZoom: 1,
        maxZoom: 12
      }
    }
  },
  debugSettings: {
    allTrue: false,
    gridHelper: false,
    axesHelper: false,
    stats: false,
    lightHelpers: false
  }
};
let useDebug = false;
const App = () => {
  const canvasRef = reactExports.useRef(null);
  const overlayRef = reactExports.useRef(null);
  const uiRef = reactExports.useRef(null);
  const [showStats, setShowStats] = reactExports.useState(false);
  const handleToggleStats = () => {
    setShowStats((prev) => !prev);
  };
  const [performanceMode, setPerformanceMode] = reactExports.useState(false);
  const handlePerformanceMode = () => {
    setPerformanceMode((prev) => !prev);
  };
  const [debugMode, setDebugMode] = reactExports.useState(false);
  const handleDebugMode = () => {
    setDebugMode((prev) => !prev);
  };
  reactExports.useEffect(() => {
    useDebug = debugMode;
  }, [debugMode]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#333333" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PoiProvider, { initialPoi: projectData.parentPoi, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Canvas,
      {
        ref: canvasRef,
        camera: {
          position: new Vector3(0, 2, 10),
          near: 2e-6,
          far: 0.1
        },
        gl: {
          powerPreference: "high-performance",
          alpha: false,
          antialias: true
        },
        shadows: performanceMode ? false : true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("color", { attach: "background", args: ["#333333"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoadModels, { modelData: projectData.sceneModels }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: "city" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Light, { debugMode }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicCameraFov, { frameSize: 6 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AddCameraTarget, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollDemo, { modelData: projectData.sceneModels[0], scrollLength: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("fog", { attach: "fog", args: ["#333333", 4, 6] }),
            showStats && /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
            !performanceMode && /* @__PURE__ */ jsxRuntimeExports.jsx(Effects, {})
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "overlay", ref: overlayRef, className: "absolute left-0 top-0 h-full w-full pointer-events-none overflow-hidden" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: uiRef,
        id: "ui-overlay",
        style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          HamburgerMenu,
          {
            showStats,
            onToggleStats: handleToggleStats,
            usePerformanceMode: performanceMode,
            onTogglePerformanceMode: handlePerformanceMode,
            debugMode,
            onToggleDebugMode: handleDebugMode
          }
        )
      }
    )
  ] }) });
};
const Light = ({ debugMode }) => {
  const shadowCamRef = reactExports.useRef();
  useHelper(debugMode ? shadowCamRef : null, CameraHelper);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { color: "#ffe0cc", position: [5, 5, -10], castShadow: true, intensity: 20, "shadow-mapSize": [1024, 1024], "shadow-bias": -0.01, children: /* @__PURE__ */ jsxRuntimeExports.jsx("orthographicCamera", { ref: shadowCamRef, attach: "shadow-camera", args: [-5, 5, 5, -2, 10, 16] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, 5], intensity: 0.4, "shadow-mapSize": [128, 128] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, -5], intensity: 0.4, "shadow-mapSize": [128, 128] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [0, 5, 0], intensity: 0.4, "shadow-mapSize": [128, 128] })
  ] });
};
const Effects = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(EffectComposer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToneMapping, {}) }) });
};
export {
  App as default,
  useDebug
};
//# sourceMappingURL=App-D1hQcomJ.js.map
