import { r as reactExports, _ as _extends, j as jsxRuntimeExports, b as basePath, s as scenePath } from "./index-CqQfns4w.js";
import { O as OrthographicCamera, P as PlaneGeometry, M as Mesh, a as MathUtils, S as ShaderMaterial, U as UniformsUtils, R as REVISION, u as useThree, W as WebGLRenderTarget, L as LinearFilter, H as HalfFloatType, D as DepthTexture, F as FloatType, b as addEffect, c as addAfterEffect, d as Scene, e as Object3D, f as createPortal, g as useFrame, h as extend, i as MeshBasicMaterial, B as Box3, j as LinearMipmapLinearFilter, k as RedFormat, N as NearestFilter, V as Vector2, l as useGLTF, Q as Quaternion, m as Vector3, T as TextureLoader, E as Euler, C as Color, G as Group, n as Canvas, o as Stats, p as HamburgerMenu } from "./HamburgerMenu-DYNrQx9u.js";
import { u as useSpring, a as animated, B as BackButton } from "./BackButton-Dm2sR9G8.js";
import { T as Text, D as DynamicCameraFov } from "./DynamicCameraFov-BWQ23ehV.js";
function useCursor(hovered, onPointerOver = "pointer", onPointerOut = "auto", container = document.body) {
  reactExports.useEffect(() => {
    if (hovered) {
      container.style.cursor = onPointerOver;
      return () => void (container.style.cursor = onPointerOut);
    }
  }, [hovered]);
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class FullScreenQuad {
  constructor(material) {
    __publicField(this, "camera", new OrthographicCamera(-1, 1, 1, -1, 0, 1));
    __publicField(this, "geometry", new PlaneGeometry(2, 2));
    __publicField(this, "mesh");
    this.mesh = new Mesh(this.geometry, material);
  }
  get material() {
    return this.mesh.material;
  }
  set material(value) {
    this.mesh.material = value;
  }
  dispose() {
    this.mesh.geometry.dispose();
  }
  render(renderer) {
    renderer.render(this.mesh, this.camera);
  }
}
function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
  const material = class material extends ShaderMaterial {
    constructor(parameters = {}) {
      const entries = Object.entries(uniforms);
      super({
        uniforms: entries.reduce((acc, [name, value]) => {
          const uniform = UniformsUtils.clone({
            [name]: {
              value
            }
          });
          return {
            ...acc,
            ...uniform
          };
        }, {}),
        vertexShader,
        fragmentShader
      });
      this.key = "";
      entries.forEach(([name]) => Object.defineProperty(this, name, {
        get: () => this.uniforms[name].value,
        set: (v) => this.uniforms[name].value = v
      }));
      Object.assign(this, parameters);
    }
  };
  material.key = MathUtils.generateUUID();
  return material;
}
const getVersion = () => parseInt(REVISION.replace(/\D+/g, ""));
const version = /* @__PURE__ */ getVersion();
function useFBO(width, height, settings) {
  const size = useThree((state) => state.size);
  const viewport = useThree((state) => state.viewport);
  const _width = typeof width === "number" ? width : size.width * viewport.dpr;
  const _height = typeof height === "number" ? height : size.height * viewport.dpr;
  const _settings = (typeof width === "number" ? settings : width) || {};
  const {
    samples = 0,
    depth,
    ...targetSettings
  } = _settings;
  const target = reactExports.useMemo(() => {
    const target2 = new WebGLRenderTarget(_width, _height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      type: HalfFloatType,
      ...targetSettings
    });
    if (depth) {
      target2.depthTexture = new DepthTexture(_width, _height, FloatType);
    }
    target2.samples = samples;
    return target2;
  }, []);
  reactExports.useLayoutEffect(() => {
    target.setSize(_width, _height);
    if (samples) target.samples = samples;
  }, [samples, target, _width, _height]);
  reactExports.useEffect(() => {
    return () => target.dispose();
  }, []);
  return target;
}
function useIntersect(onChange) {
  const ref = reactExports.useRef(null);
  const check = reactExports.useRef(false);
  const temp = reactExports.useRef(false);
  const callback = reactExports.useRef(onChange);
  reactExports.useLayoutEffect(() => void (callback.current = onChange), [onChange]);
  reactExports.useEffect(() => {
    const obj = ref.current;
    if (obj) {
      const unsub1 = addEffect(() => {
        check.current = false;
        return true;
      });
      const oldOnRender = obj.onBeforeRender;
      obj.onBeforeRender = () => check.current = true;
      const unsub2 = addAfterEffect(() => {
        if (check.current !== temp.current) callback.current == null || callback.current(temp.current = check.current);
        return true;
      });
      return () => {
        obj.onBeforeRender = oldOnRender;
        unsub1();
        unsub2();
      };
    }
  }, []);
  return ref;
}
const RenderTexture = /* @__PURE__ */ reactExports.forwardRef(({
  children,
  compute,
  width,
  height,
  samples = 8,
  renderPriority = 0,
  eventPriority = 0,
  frames = Infinity,
  stencilBuffer = false,
  depthBuffer = true,
  generateMipmaps = false,
  ...props
}, forwardRef) => {
  const {
    size,
    viewport
  } = useThree();
  const fbo = useFBO((width || size.width) * viewport.dpr, (height || size.height) * viewport.dpr, {
    samples,
    stencilBuffer,
    depthBuffer,
    generateMipmaps
  });
  const [vScene] = reactExports.useState(() => new Scene());
  const uvCompute = reactExports.useCallback((event, state, previous) => {
    var _fbo$texture, _previous$previousRoo;
    let parent = (_fbo$texture = fbo.texture) == null ? void 0 : _fbo$texture.__r3f.parent;
    while (parent && !(parent instanceof Object3D)) {
      parent = parent.__r3f.parent;
    }
    if (!parent) return false;
    if (!previous.raycaster.camera) previous.events.compute(event, previous, (_previous$previousRoo = previous.previousRoot) == null ? void 0 : _previous$previousRoo.getState());
    const [intersection] = previous.raycaster.intersectObject(parent);
    if (!intersection) return false;
    const uv = intersection.uv;
    if (!uv) return false;
    state.raycaster.setFromCamera(state.pointer.set(uv.x * 2 - 1, uv.y * 2 - 1), state.camera);
  }, []);
  reactExports.useImperativeHandle(forwardRef, () => fbo.texture, [fbo]);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, createPortal(/* @__PURE__ */ reactExports.createElement(Container, {
    renderPriority,
    frames,
    fbo
  }, children, /* @__PURE__ */ reactExports.createElement("group", {
    onPointerOver: () => null
  })), vScene, {
    events: {
      compute: compute || uvCompute,
      priority: eventPriority
    }
  }), /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    object: fbo.texture
  }, props)));
});
function Container({
  frames,
  renderPriority,
  children,
  fbo
}) {
  let count = 0;
  let oldAutoClear;
  let oldXrEnabled;
  let oldRenderTarget;
  let oldIsPresenting;
  useFrame((state) => {
    if (frames === Infinity || count < frames) {
      oldAutoClear = state.gl.autoClear;
      oldXrEnabled = state.gl.xr.enabled;
      oldRenderTarget = state.gl.getRenderTarget();
      oldIsPresenting = state.gl.xr.isPresenting;
      state.gl.autoClear = true;
      state.gl.xr.enabled = false;
      state.gl.xr.isPresenting = false;
      state.gl.setRenderTarget(fbo);
      state.gl.render(state.scene, state.camera);
      state.gl.setRenderTarget(oldRenderTarget);
      state.gl.autoClear = oldAutoClear;
      state.gl.xr.enabled = oldXrEnabled;
      state.gl.xr.isPresenting = oldIsPresenting;
      count++;
    }
  }, renderPriority);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, children);
}
const PortalMaterialImpl = /* @__PURE__ */ shaderMaterial({
  blur: 0,
  map: null,
  sdf: null,
  blend: 0,
  size: 0,
  resolution: /* @__PURE__ */ new Vector2()
}, `varying vec2 vUv;
   void main() {
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
     vUv = uv;
   }`, `uniform sampler2D sdf;
   uniform sampler2D map;
   uniform float blur;
   uniform float size;
   uniform float time;
   uniform vec2 resolution;
   varying vec2 vUv;
   #include <packing>
   void main() {
     vec2 uv = gl_FragCoord.xy / resolution.xy;
     vec4 t = texture2D(map, uv);
     float k = blur;
     float d = texture2D(sdf, vUv).r/size;
     float alpha = 1.0 - smoothstep(0.0, 1.0, clamp(d/k + 1.0, 0.0, 1.0));
     gl_FragColor = vec4(t.rgb, blur == 0.0 ? t.a : t.a * alpha);
     #include <tonemapping_fragment>
     #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
   }`);
const MeshPortalMaterial = /* @__PURE__ */ reactExports.forwardRef(({
  children,
  events = void 0,
  blur = 0,
  eventPriority = 0,
  renderPriority = 0,
  worldUnits = false,
  resolution = 512,
  ...props
}, fref) => {
  extend({
    PortalMaterialImpl
  });
  const ref = reactExports.useRef(null);
  const {
    scene,
    gl,
    size,
    viewport,
    setEvents
  } = useThree();
  const maskRenderTarget = useFBO(resolution, resolution);
  const [priority, setPriority] = reactExports.useState(0);
  useFrame(() => {
    const p = ref.current.blend > 0 ? Math.max(1, renderPriority) : 0;
    if (priority !== p) setPriority(p);
  });
  reactExports.useEffect(() => {
    if (events !== void 0) setEvents({
      enabled: !events
    });
  }, [events]);
  const [visible, setVisible] = reactExports.useState(true);
  const parent = useIntersect(setVisible);
  reactExports.useLayoutEffect(() => {
    var _ref$current;
    parent.current = (_ref$current = ref.current) == null ? void 0 : _ref$current.__r3f.parent;
  }, []);
  reactExports.useLayoutEffect(() => {
    if (!parent.current) return;
    if (blur && ref.current.sdf === null) {
      const tempMesh = new Mesh(parent.current.geometry, new MeshBasicMaterial());
      const boundingBox = new Box3().setFromBufferAttribute(tempMesh.geometry.attributes.position);
      const orthoCam = new OrthographicCamera(boundingBox.min.x * (1 + 2 / resolution), boundingBox.max.x * (1 + 2 / resolution), boundingBox.max.y * (1 + 2 / resolution), boundingBox.min.y * (1 + 2 / resolution), 0.1, 1e3);
      orthoCam.position.set(0, 0, 1);
      orthoCam.lookAt(0, 0, 0);
      gl.setRenderTarget(maskRenderTarget);
      gl.render(tempMesh, orthoCam);
      const sg = makeSDFGenerator(resolution, resolution, gl);
      const sdf = sg(maskRenderTarget.texture);
      const readSdf = new Float32Array(resolution * resolution);
      gl.readRenderTargetPixels(sdf, 0, 0, resolution, resolution, readSdf);
      let min = Infinity;
      for (let i = 0; i < readSdf.length; i++) {
        if (readSdf[i] < min) min = readSdf[i];
      }
      min = -min;
      ref.current.size = min;
      ref.current.sdf = sdf.texture;
      gl.setRenderTarget(null);
    }
  }, [resolution, blur]);
  reactExports.useImperativeHandle(fref, () => ref.current);
  const compute = reactExports.useCallback((event, state, previous) => {
    var _ref$current2;
    if (!parent.current) return false;
    state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
    state.raycaster.setFromCamera(state.pointer, state.camera);
    if (((_ref$current2 = ref.current) == null ? void 0 : _ref$current2.blend) === 0) {
      const [intersection] = state.raycaster.intersectObject(parent.current);
      if (!intersection) {
        state.raycaster.camera = void 0;
        return false;
      }
    }
  }, []);
  return /* @__PURE__ */ reactExports.createElement("portalMaterialImpl", _extends({
    ref,
    blur,
    blend: 0,
    resolution: [size.width * viewport.dpr, size.height * viewport.dpr],
    attach: "material"
  }, props), /* @__PURE__ */ reactExports.createElement(RenderTexture, {
    attach: "map",
    frames: visible ? Infinity : 0,
    eventPriority,
    renderPriority,
    compute
  }, children, /* @__PURE__ */ reactExports.createElement(ManagePortalScene, {
    events,
    rootScene: scene,
    priority,
    material: ref,
    worldUnits
  })));
});
function ManagePortalScene({
  events = void 0,
  rootScene,
  material,
  priority,
  worldUnits
}) {
  const scene = useThree((state) => state.scene);
  const setEvents = useThree((state) => state.setEvents);
  const buffer1 = useFBO();
  const buffer2 = useFBO();
  reactExports.useLayoutEffect(() => {
    scene.matrixAutoUpdate = false;
  }, []);
  reactExports.useEffect(() => {
    if (events !== void 0) setEvents({
      enabled: events
    });
  }, [events]);
  const [quad, blend] = reactExports.useMemo(() => {
    const blend2 = {
      value: 0
    };
    const quad2 = new FullScreenQuad(new ShaderMaterial({
      uniforms: {
        a: {
          value: buffer1.texture
        },
        b: {
          value: buffer2.texture
        },
        blend: blend2
      },
      vertexShader: (
        /*glsl*/
        `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }`
      ),
      fragmentShader: (
        /*glsl*/
        `
          uniform sampler2D a;
          uniform sampler2D b;
          uniform float blend;
          varying vec2 vUv;
          #include <packing>
          void main() {
            vec4 ta = texture2D(a, vUv);
            vec4 tb = texture2D(b, vUv);
            gl_FragColor = mix(tb, ta, blend);
            #include <tonemapping_fragment>
            #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
          }`
      )
    }));
    return [quad2, blend2];
  }, []);
  useFrame((state) => {
    var _material$current;
    let parent = material == null || (_material$current = material.current) == null ? void 0 : _material$current.__r3f.parent;
    if (parent) {
      if (!worldUnits) {
        var _material$current2;
        if (priority && ((_material$current2 = material.current) == null ? void 0 : _material$current2.blend) === 1) parent.updateWorldMatrix(true, false);
        scene.matrixWorld.copy(parent.matrixWorld);
      } else scene.matrixWorld.identity();
      if (priority) {
        var _material$current3, _material$current4, _material$current5;
        if (((_material$current3 = material.current) == null ? void 0 : _material$current3.blend) > 0 && ((_material$current4 = material.current) == null ? void 0 : _material$current4.blend) < 1) {
          blend.value = material.current.blend;
          state.gl.setRenderTarget(buffer1);
          state.gl.render(scene, state.camera);
          state.gl.setRenderTarget(buffer2);
          state.gl.render(rootScene, state.camera);
          state.gl.setRenderTarget(null);
          quad.render(state.gl);
        } else if (((_material$current5 = material.current) == null ? void 0 : _material$current5.blend) === 1) {
          state.gl.render(scene, state.camera);
        }
      }
    }
  }, priority);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null);
}
const makeSDFGenerator = (clientWidth, clientHeight, renderer) => {
  let finalTarget = new WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: LinearMipmapLinearFilter,
    magFilter: LinearFilter,
    type: FloatType,
    format: RedFormat,
    generateMipmaps: true
  });
  let outsideRenderTarget = new WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: NearestFilter,
    magFilter: NearestFilter
  });
  let insideRenderTarget = new WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: NearestFilter,
    magFilter: NearestFilter
  });
  let outsideRenderTarget2 = new WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: NearestFilter,
    magFilter: NearestFilter
  });
  let insideRenderTarget2 = new WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: NearestFilter,
    magFilter: NearestFilter
  });
  let outsideRenderTargetFinal = new WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    type: FloatType,
    format: RedFormat
  });
  let insideRenderTargetFinal = new WebGLRenderTarget(clientWidth, clientHeight, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    type: FloatType,
    format: RedFormat
  });
  const uvRender = new FullScreenQuad(new ShaderMaterial({
    uniforms: {
      tex: {
        value: null
      }
    },
    vertexShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`
    ),
    fragmentShader: (
      /*glsl*/
      `
        uniform sampler2D tex;
        varying vec2 vUv;
        #include <packing>
        void main() {
          gl_FragColor = pack2HalfToRGBA(vUv * (round(texture2D(tex, vUv).x)));
        }`
    )
  }));
  const uvRenderInside = new FullScreenQuad(new ShaderMaterial({
    uniforms: {
      tex: {
        value: null
      }
    },
    vertexShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`
    ),
    fragmentShader: (
      /*glsl*/
      `
        uniform sampler2D tex;
        varying vec2 vUv;
        #include <packing>
        void main() {
          gl_FragColor = pack2HalfToRGBA(vUv * (1.0 - round(texture2D(tex, vUv).x)));
        }`
    )
  }));
  const jumpFloodRender = new FullScreenQuad(new ShaderMaterial({
    uniforms: {
      tex: {
        value: null
      },
      offset: {
        value: 0
      },
      level: {
        value: 0
      },
      maxSteps: {
        value: 0
      }
    },
    vertexShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`
    ),
    fragmentShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        uniform sampler2D tex;
        uniform float offset;
        uniform float level;
        uniform float maxSteps;
        #include <packing>
        void main() {
          float closestDist = 9999999.9;
          vec2 closestPos = vec2(0.0);
          for (float x = -1.0; x <= 1.0; x += 1.0) {
            for (float y = -1.0; y <= 1.0; y += 1.0) {
              vec2 voffset = vUv;
              voffset += vec2(x, y) * vec2(${1 / clientWidth}, ${1 / clientHeight}) * offset;
              vec2 pos = unpackRGBATo2Half(texture2D(tex, voffset));
              float dist = distance(pos.xy, vUv);
              if(pos.x != 0.0 && pos.y != 0.0 && dist < closestDist) {
                closestDist = dist;
                closestPos = pos;
              }
            }
          }
          gl_FragColor = pack2HalfToRGBA(closestPos);
        }`
    )
  }));
  const distanceFieldRender = new FullScreenQuad(new ShaderMaterial({
    uniforms: {
      tex: {
        value: null
      },
      size: {
        value: new Vector2(clientWidth, clientHeight)
      }
    },
    vertexShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`
    ),
    fragmentShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        uniform sampler2D tex;
        uniform vec2 size;
        #include <packing>
        void main() {
          gl_FragColor = vec4(distance(size * unpackRGBATo2Half(texture2D(tex, vUv)), size * vUv), 0.0, 0.0, 0.0);
        }`
    )
  }));
  const compositeRender = new FullScreenQuad(new ShaderMaterial({
    uniforms: {
      inside: {
        value: insideRenderTargetFinal.texture
      },
      outside: {
        value: outsideRenderTargetFinal.texture
      },
      tex: {
        value: null
      }
    },
    vertexShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`
    ),
    fragmentShader: (
      /*glsl*/
      `
        varying vec2 vUv;
        uniform sampler2D inside;
        uniform sampler2D outside;
        uniform sampler2D tex;
        #include <packing>
        void main() {
          float i = texture2D(inside, vUv).x;
          float o =texture2D(outside, vUv).x;
          if (texture2D(tex, vUv).x == 0.0) {
            gl_FragColor = vec4(o, 0.0, 0.0, 0.0);
          } else {
            gl_FragColor = vec4(-i, 0.0, 0.0, 0.0);
          }
        }`
    )
  }));
  return (image) => {
    let ft = finalTarget;
    image.minFilter = NearestFilter;
    image.magFilter = NearestFilter;
    uvRender.material.uniforms.tex.value = image;
    renderer.setRenderTarget(outsideRenderTarget);
    uvRender.render(renderer);
    const passes = Math.ceil(Math.log(Math.max(clientWidth, clientHeight)) / Math.log(2));
    let lastTarget = outsideRenderTarget;
    let target = null;
    for (let i = 0; i < passes; i++) {
      const offset = Math.pow(2, passes - i - 1);
      target = lastTarget === outsideRenderTarget ? outsideRenderTarget2 : outsideRenderTarget;
      jumpFloodRender.material.uniforms.level.value = i;
      jumpFloodRender.material.uniforms.maxSteps.value = passes;
      jumpFloodRender.material.uniforms.offset.value = offset;
      jumpFloodRender.material.uniforms.tex.value = lastTarget.texture;
      renderer.setRenderTarget(target);
      jumpFloodRender.render(renderer);
      lastTarget = target;
    }
    renderer.setRenderTarget(outsideRenderTargetFinal);
    distanceFieldRender.material.uniforms.tex.value = target.texture;
    distanceFieldRender.render(renderer);
    uvRenderInside.material.uniforms.tex.value = image;
    renderer.setRenderTarget(insideRenderTarget);
    uvRenderInside.render(renderer);
    lastTarget = insideRenderTarget;
    for (let i = 0; i < passes; i++) {
      const offset = Math.pow(2, passes - i - 1);
      target = lastTarget === insideRenderTarget ? insideRenderTarget2 : insideRenderTarget;
      jumpFloodRender.material.uniforms.level.value = i;
      jumpFloodRender.material.uniforms.maxSteps.value = passes;
      jumpFloodRender.material.uniforms.offset.value = offset;
      jumpFloodRender.material.uniforms.tex.value = lastTarget.texture;
      renderer.setRenderTarget(target);
      jumpFloodRender.render(renderer);
      lastTarget = target;
    }
    renderer.setRenderTarget(insideRenderTargetFinal);
    distanceFieldRender.material.uniforms.tex.value = target.texture;
    distanceFieldRender.render(renderer);
    renderer.setRenderTarget(ft);
    compositeRender.material.uniforms.tex.value = image;
    compositeRender.render(renderer);
    renderer.setRenderTarget(null);
    return ft;
  };
};
const LoadPortalScene = ({ portalId, maxScroll, children }) => {
  console.log(`Loading portal scene ${portalId}`);
  const groupRef = reactExports.useRef(null);
  const [scrollOffset, setScrollOffset] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const handleWheel = (event) => {
      setScrollOffset((prevOffset) => MathUtils.clamp(prevOffset + event.deltaY * 3e-3, 0, maxScroll));
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [maxScroll]);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y = +scrollOffset;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref: groupRef, children });
};
const NpgPortalCube = ({ cubeModelPath, portalData, rotationSpeed = 0.01 }) => {
  var _a, _b;
  const { camera, scene } = useThree();
  const { nodes } = useGLTF(cubeModelPath);
  const [currentPortal, setCurrentPortal] = reactExports.useState(null);
  const [isInPortal, setIsInPortal] = reactExports.useState(false);
  const [visiblePortals, setVisiblePortals] = reactExports.useState([]);
  const isAnimating = reactExports.useRef(false);
  const animatingTransition = reactExports.useRef(false);
  const groupRef = reactExports.useRef(null);
  const quaternion = reactExports.useRef(new Quaternion());
  const isDragging = reactExports.useRef(false);
  const lastMousePosition = reactExports.useRef({ x: 0, y: 0 });
  const cameraLocation = useThree((state) => state.camera.position.clone());
  const xAxis = reactExports.useRef(new Vector3(1, 0, 0));
  const yAxis = reactExports.useRef(new Vector3(0, 1, 0));
  const tempQuatX = reactExports.useRef(new Quaternion());
  const tempQuatY = reactExports.useRef(new Quaternion());
  const portals = reactExports.useMemo(() => {
    const textureLoader = new TextureLoader();
    return portalData.map((data, index) => ({
      id: index,
      node: nodes[data.meshId],
      texture: textureLoader.load(data.texturePath, (texture) => texture.flipY = false),
      normal: data.normal,
      header: data.header,
      tagline: data.tagline
    }));
  }, []);
  const [rotation, api] = useSpring(() => ({
    springRotation: groupRef.current ? [groupRef.current.rotation.x, groupRef.current.rotation.y, groupRef.current.rotation.z] : [0, 0, 0],
    config: { mass: 2, tension: 300, friction: 40, precision: 0.01 },
    onStart: () => {
      isAnimating.current = true;
    },
    onRest: () => {
      isAnimating.current = false;
    }
  }));
  const calculateVisiblePortals = () => {
    if (!groupRef.current) return;
    const worldMatrix = groupRef.current.matrixWorld;
    const updatedVisiblePortals = [];
    portals.forEach(({ id, normal }) => {
      const worldNormal = normal.clone().applyMatrix4(worldMatrix).normalize();
      const toCamera = cameraLocation.clone().sub(groupRef.current.position).normalize();
      if (worldNormal.dot(toCamera) > 0) {
        updatedVisiblePortals.push(id);
      }
    });
    setVisiblePortals(updatedVisiblePortals);
  };
  const handlePointerDown = (e) => {
    if (animatingTransition.current) return;
    isDragging.current = true;
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };
  const handlePointerMove = (e) => {
    if (!isDragging.current || !groupRef.current) return;
    if (animatingTransition.current) return;
    const deltaX = e.clientX - lastMousePosition.current.x;
    const deltaY = e.clientY - lastMousePosition.current.y;
    tempQuatX.current.setFromAxisAngle(xAxis.current, deltaY * rotationSpeed);
    tempQuatY.current.setFromAxisAngle(yAxis.current, deltaX * rotationSpeed);
    quaternion.current.multiplyQuaternions(tempQuatY.current, quaternion.current);
    quaternion.current.multiplyQuaternions(tempQuatX.current, quaternion.current);
    groupRef.current.quaternion.copy(quaternion.current);
    const euler = new Euler().setFromQuaternion(quaternion.current);
    api.start({
      from: { springRotation: [groupRef.current.rotation.x, groupRef.current.rotation.y, groupRef.current.rotation.z] },
      to: { springRotation: [euler.x, euler.y, euler.z] }
    });
    lastMousePosition.current = { x: e.clientX, y: e.clientY };
  };
  const handlePointerUp = () => {
    isDragging.current = false;
    alignCubeToClosestFace();
  };
  const alignCubeToClosestFace = () => {
    if (!groupRef.current) return;
    const closestFace = portals.reduce(
      (closest, portal) => {
        const normal = portal.normal.clone().applyQuaternion(groupRef.current.quaternion);
        const dot = normal.dot(cameraLocation.clone().sub(groupRef.current.position).normalize());
        return dot > closest.dot ? { id: portal.id, dot } : closest;
      },
      { id: -1, dot: -Infinity }
    );
    function normalizeRotation(targetValue, currentValue) {
      const diff = targetValue - currentValue;
      if (diff > Math.PI + Math.PI / 2) return targetValue - Math.PI * 2;
      if (diff > Math.PI / 2) return targetValue - Math.PI;
      if (diff < -Math.PI - Math.PI / 2) return targetValue + Math.PI * 2;
      if (diff < -Math.PI / 2) return targetValue + Math.PI;
      return targetValue;
    }
    const isCubeUpright = (targetRotation2, upVector) => {
      const targetQuaternion = new Quaternion().setFromEuler(targetRotation2);
      upVector.applyQuaternion(targetQuaternion);
      const dot = upVector.dot(new Vector3(0, 1, 0));
      return dot > 0;
    };
    let targetRotation = new Euler();
    switch (closestFace.id) {
      case 0:
        quaternion.current.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI);
        targetRotation = new Euler(0, Math.PI, 0);
        targetRotation.x = normalizeRotation(targetRotation.x, groupRef.current.rotation.x);
        targetRotation.y = normalizeRotation(targetRotation.y, groupRef.current.rotation.y);
        targetRotation.z = normalizeRotation(targetRotation.z, groupRef.current.rotation.z);
        if (!isCubeUpright(targetRotation, new Vector3(0, 1, 0))) {
          targetRotation.z += Math.PI;
        }
        break;
      case 1:
        quaternion.current.setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2);
        targetRotation = new Euler(-Math.PI / 2, 0, 0);
        targetRotation.x = normalizeRotation(targetRotation.x, groupRef.current.rotation.x);
        targetRotation.y = normalizeRotation(targetRotation.y, groupRef.current.rotation.y);
        targetRotation.z = normalizeRotation(targetRotation.z, groupRef.current.rotation.z);
        if (!isCubeUpright(targetRotation, new Vector3(0, 0, 1))) {
          targetRotation.y += Math.PI;
        }
        break;
      case 2:
        quaternion.current.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2);
        targetRotation = new Euler(Math.PI / 2, 0, 0);
        targetRotation.x = normalizeRotation(targetRotation.x, groupRef.current.rotation.x);
        targetRotation.y = normalizeRotation(targetRotation.y, groupRef.current.rotation.y);
        targetRotation.z = normalizeRotation(targetRotation.z, groupRef.current.rotation.z);
        if (!isCubeUpright(targetRotation, new Vector3(0, 0, -1))) {
          targetRotation.y += Math.PI;
        }
        break;
      case 3:
        quaternion.current.setFromAxisAngle(new Vector3(0, 1, 0), -Math.PI / 2);
        targetRotation = new Euler(0, -Math.PI / 2, 0);
        targetRotation.x = normalizeRotation(targetRotation.x, groupRef.current.rotation.x);
        targetRotation.y = normalizeRotation(targetRotation.y, groupRef.current.rotation.y);
        targetRotation.z = normalizeRotation(targetRotation.z, groupRef.current.rotation.z);
        if (!isCubeUpright(targetRotation, new Vector3(0, 1, 0))) {
          targetRotation.z -= Math.PI / 2;
          targetRotation.y += Math.PI;
          targetRotation.x += Math.PI / 2;
        }
        break;
      case 4:
        quaternion.current.set(0, 0, 0, 1);
        targetRotation = new Euler(0, 0, 0);
        break;
      case 5:
        quaternion.current.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
        targetRotation = new Euler(0, Math.PI / 2, 0);
        targetRotation.x = normalizeRotation(targetRotation.x, groupRef.current.rotation.x);
        targetRotation.y = normalizeRotation(targetRotation.y, groupRef.current.rotation.y);
        targetRotation.z = normalizeRotation(targetRotation.z, groupRef.current.rotation.z);
        if (!isCubeUpright(targetRotation, new Vector3(0, 1, 0))) {
          targetRotation.z += Math.PI / 2;
          targetRotation.y += Math.PI;
          targetRotation.x += Math.PI / 2;
        }
        break;
      default:
        targetRotation = new Euler(0, 0, 0);
    }
    api.start({
      from: { springRotation: [groupRef.current.rotation.x, groupRef.current.rotation.y, groupRef.current.rotation.z] },
      to: { springRotation: [targetRotation.x, targetRotation.y, targetRotation.z] }
    });
  };
  const cameraParentRef = scene.children.find((child) => child.name === "Camera Parent");
  if (!cameraParentRef) {
    throw new Error("Camera parent not found in the scene");
  } else {
    cameraParentRef.add(camera);
  }
  const [portalTransitionSpring, transitionApi] = useSpring(() => ({
    cameraPosition: [0, 0, 0],
    backgroundColor: "#ffffff",
    // Initial background color
    config: { mass: 1, tension: 300, friction: 80, precision: 0.01, clamp: true }
  }));
  const enterPortal = (portalId) => {
    setCurrentPortal(portals[portalId]);
    transitionApi.start({
      to: { cameraPosition: [0, 0.5, -2], backgroundColor: "#000000" },
      onStart: () => {
        animatingTransition.current = true;
      },
      onRest: () => {
        animatingTransition.current = false;
        setIsInPortal(true);
      }
    });
  };
  const exitPortal = () => {
    setIsInPortal(false);
    setCurrentPortal(null);
    transitionApi.start({
      to: { cameraPosition: [0, 0, 0], backgroundColor: "#ffffff" },
      onStart: () => {
        animatingTransition.current = true;
      },
      onRest: () => {
        animatingTransition.current = false;
        calculateVisiblePortals();
      }
    });
  };
  useFrame(() => {
    if (!isInPortal) {
      calculateVisiblePortals();
    }
    if (animatingTransition.current) {
      const [x, y, z] = portalTransitionSpring.cameraPosition.get();
      cameraParentRef.position.set(x, y, z);
      scene.background = new Color(portalTransitionSpring.backgroundColor.get());
    }
  });
  reactExports.useEffect(() => {
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);
    calculateVisiblePortals();
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    !isInPortal && /* @__PURE__ */ jsxRuntimeExports.jsx(
      animated.group,
      {
        ref: groupRef,
        rotation: rotation.springRotation,
        children: visiblePortals.map((id) => {
          const { node, texture, header, tagline } = portals[id];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            PortalObject,
            {
              node,
              texture,
              header,
              tagline,
              inTransition: animatingTransition.current,
              onEnterPortal: () => enterPortal(id)
            },
            id
          );
        })
      }
    ),
    isInPortal && currentPortal && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BackButton, { onClick: exitPortal, children: "Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("group", { position: (_a = groupRef.current) == null ? void 0 : _a.position, rotation: (_b = groupRef.current) == null ? void 0 : _b.rotation, children: /* @__PURE__ */ jsxRuntimeExports.jsx("group", { position: currentPortal.node.position, rotation: currentPortal.node.rotation, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LoadPortalScene, { portalId: currentPortal.id, maxScroll: 1e3, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PortalText, { header: currentPortal.header, tagline: currentPortal.tagline || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("mesh", { geometry: currentPortal.node.geometry, position: [0, -0.5, -3], scale: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { map: currentPortal.texture }) })
      ] }) }) })
    ] })
  ] });
};
function PortalObject({
  node,
  texture,
  header,
  inTransition,
  onEnterPortal,
  tagline = ""
}) {
  const { geometry, position, rotation } = node;
  const [animateOpacity, setAnimateOpacity] = reactExports.useState(false);
  const [showText, setShowText] = reactExports.useState(false);
  const [hovered, setHovered] = reactExports.useState(false);
  const [Opacity, setOpacity] = reactExports.useState(0);
  useCursor(hovered);
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { mass: 2, tension: 400, friction: 40 }
  });
  const { textOpacity } = useSpring({
    textOpacity: showText ? 1 : 0,
    config: { duration: 500 },
    onStart: () => {
      setAnimateOpacity(true);
    },
    onRest: () => {
      setAnimateOpacity(false);
    }
  });
  useFrame(() => {
    if (animateOpacity) {
      setOpacity(textOpacity.get());
    }
  });
  const fontSize = header === "Sport &\nCommunication" ? 0.3 : 0.4;
  const textHeight = header === "Sport &\nCommunication" ? 1.2 : 1.4;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    animated.mesh,
    {
      geometry,
      position,
      rotation,
      scale,
      onPointerOver: () => {
        setHovered(true);
        setShowText(true);
      },
      onPointerOut: () => {
        setHovered(false);
        if (!inTransition) {
          setShowText(false);
        }
      },
      onClick: () => {
        setShowText(true);
        setHovered(false);
        onEnterPortal();
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MeshPortalMaterial, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Text,
          {
            font: `${basePath || ""}/fonts/RedHatDisplay-SemiBold.ttf`,
            color: "#ffffff",
            anchorY: "top",
            anchorX: "left",
            position: [-1.1, 2, 1],
            fontSize,
            children: header
          }
        ),
        tagline && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Text,
          {
            font: `${basePath || ""}/fonts/RedHatDisplay-Regular.ttf`,
            color: "#ffffff",
            fillOpacity: Opacity,
            anchorY: "top",
            anchorX: "left",
            position: [-1, textHeight, 1],
            fontSize: 0.1,
            maxWidth: 2,
            lineHeight: 1.2,
            overflowWrap: "break-word",
            children: tagline
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("mesh", { geometry, position: [0, -0.5, -3], scale: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { map: texture }) })
      ] })
    }
  );
}
const PortalText = ({ header, tagline }) => {
  const fontSize = header === "Sport &\nCommunication" ? 0.3 : 0.4;
  const textHeight = header === "Sport &\nCommunication" ? 1.2 : 1.4;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Text,
      {
        font: `${basePath || ""}/fonts/RedHatDisplay-SemiBold.ttf`,
        color: "#ffffff",
        anchorY: "top",
        anchorX: "left",
        position: [-1.1, 2, 1],
        fontSize,
        children: header
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Text,
      {
        font: `${basePath || ""}/fonts/RedHatDisplay-Regular.ttf`,
        color: "#ffffff",
        anchorY: "top",
        anchorX: "left",
        position: [-1, textHeight, 1],
        fontSize: 0.1,
        maxWidth: 2,
        lineHeight: 1.2,
        overflowWrap: "break-word",
        children: tagline
      }
    )
  ] });
};
const CameraController = () => {
  const { camera } = useThree();
  const targetOffset = reactExports.useRef(new Vector3());
  const originalPosition = reactExports.useRef(camera.position.clone());
  const dampingFactor = 0.01;
  const maxOffset = 1.5;
  const returnSpeed = 0.02;
  const lastGamma = reactExports.useRef(0);
  const lastBeta = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const handleMouseMove = (event) => {
      const movementX = event.movementX * 0.01 || 0;
      const movementY = event.movementY * 0.01 || 0;
      targetOffset.current.x = MathUtils.clamp(targetOffset.current.x + movementX, -1.5, maxOffset);
      targetOffset.current.y = MathUtils.clamp(targetOffset.current.y - movementY, -1.5, maxOffset);
    };
    const handleDeviceOrientation = (event) => {
      if (event.gamma === null || event.beta === null) return;
      const gammaDiff = event.gamma - lastGamma.current;
      const betaDiff = event.beta - lastBeta.current;
      targetOffset.current.x = MathUtils.clamp(targetOffset.current.x + gammaDiff * 0.06, -1.5, maxOffset);
      targetOffset.current.y = MathUtils.clamp(targetOffset.current.y - betaDiff * 0.06, -1.5, maxOffset);
      lastGamma.current = event.gamma;
      lastBeta.current = event.beta;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);
  useFrame(() => {
    camera.position.lerp(originalPosition.current.clone().add(targetOffset.current), dampingFactor);
    targetOffset.current.lerp(new Vector3(0, 0, 0), returnSpeed);
    camera.lookAt(0, 0, 0);
  });
  return null;
};
const AddCameraParent = () => {
  const { scene } = useThree();
  const cameraParent = new Group();
  cameraParent.position.set(0, 0, 0);
  cameraParent.name = "Camera Parent";
  scene.add(cameraParent);
  return null;
};
const npgPortalCubeData = {
  cubeModelPath: scenePath + "/models/npgCube.glb",
  rotationSpeed: 0.01,
  portalData: [
    {
      meshId: "design",
      texturePath: scenePath + "/images/design.jpg",
      normal: new Vector3(0, 0, -1),
      header: "Design",
      tagline: "NPG Design utvikler kreative løsninger innen konseptutvikling, 3D-visualisering, grafisk design og merkevareopplevelser.\n\nVårt designteam støtter alt vi gjør her på NPG. La oss skape visuelle og strategiske løsninger som hever din merkevare."
    },
    // Back
    {
      meshId: "event",
      texturePath: scenePath + "/images/event.jpg",
      normal: new Vector3(0, -1, 0),
      header: "Event",
      tagline: "I NPG Event skaper vi ikke bare event; vi skaper minneverdige opplevelser som binder mennesker og ideer sammen. \n\nVi utvikler unike eventer og møteplasser som skaper meningsfulle opplevelser som fremmer kunnskap, innovasjon, samarbeid og bærekraft. Ditt eventbyrå for næringslivet!"
    },
    // Bottom
    {
      meshId: "exibition",
      texturePath: scenePath + "/images/exibition.jpg",
      normal: new Vector3(0, 1, 0),
      header: "Exibition",
      tagline: "Bli synlig med NPG Exhibition. Vi er det mest erfarne byrået i Norge innen messer, med over 30 års ekspertise nasjonalt og internasjonalt. \n\nPlanlegger du å delta på messer i Norge eller internasjonalt? Benytt NPG, Norges ledende byrå innen messestands."
    },
    // Top
    {
      meshId: "interactive",
      texturePath: scenePath + "/images/interactive.jpg",
      normal: new Vector3(1, 0, 0),
      header: "Interactive",
      tagline: "NPG Interactive skaper engasjerende digitale opplevelser med teknologi og kreativitet, og tilbyr nye måter å oppleve produkter og tjenester på. \n\nHos NPG Interactive kombinerer vi teknologi og kreativitet for å skape engasjerende, digitale opplevelser."
    },
    // Right
    {
      meshId: "marketing",
      texturePath: scenePath + "/images/marketing.jpg",
      normal: new Vector3(0, 0, 1),
      header: "Marketing",
      tagline: "NPG Marketing er et markedsføringsbyrå som tilbyr skreddersydde strategier og kreative løsninger for å styrke din merkevares synlighet og engasjement. \n\nNPG Marketing bistår bedrifter med markedsføringsstrategier, innholdsproduksjon og digitale kampanjer."
    },
    // Front
    {
      meshId: "sport",
      texturePath: scenePath + "/images/sport.jpg",
      normal: new Vector3(-1, 0, 0),
      header: "Sport &\nCommunication",
      tagline: "NPG Sport & Communication er Norges ledende sportsbyrå. Vi skal være det fremste rådgivermiljøet for virksomheter, profiler og forbund. \n\nNPG Sport & Communication er Norges ledende sportsbyrå. Vi rådgir virksomheter, profiler og forbund i skjæringspunktet mellom idrett og næringsliv, både nasjonalt og internasjonalt – og tar også oppdrag utenfor idretten."
    }
    // Left
  ]
};
const App = () => {
  const [showStats, setShowStats] = reactExports.useState(false);
  const handleToggleStats = () => {
    setShowStats((prev) => !prev);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: "100vw", height: "100vh", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Canvas,
      {
        camera: {
          position: new Vector3(0, 0, 6),
          fov: 50,
          near: 0.2,
          far: 20
        },
        gl: {
          powerPreference: "high-performance",
          alpha: false,
          antialias: true,
          shadowMapEnabled: false
        },
        shadows: false,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("color", { attach: "background", args: ["#ffffff"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DynamicCameraFov, { frameSize: 3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddCameraParent, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NpgPortalCube, { ...npgPortalCubeData }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CameraController, {}),
          showStats && /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {})
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "ui-overlay", style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HamburgerMenu, { showStats, onToggleStats: handleToggleStats }) })
  ] });
};
export {
  App as default
};
//# sourceMappingURL=App-B9wLXuR-.js.map
