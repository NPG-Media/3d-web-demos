import { j as jsxRuntimeExports, T as Typography, s as scenePath, r as reactExports } from "./index-CqQfns4w.js";
import { r as Button, n as Canvas, m as Vector3, o as Stats, p as HamburgerMenu } from "./HamburgerMenu-DYNrQx9u.js";
import { P as PoiProvider, L as LoadingSpinner, E as Environment, A as AddCameraTarget, a as EffectComposer, T as ToneMapping } from "./AddCameraTarget-C0qLm03P.js";
import { P as PoiHandler, N as N8AO, S as SoftShadows } from "./PoiHandler-zaCuhEr5.js";
import "./BackButton-Dm2sR9G8.js";
const FullscreenButton = ({ fullScreen, setFullScreen }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      onClick: () => setFullScreen(!fullScreen),
      sx: {
        position: "absolute",
        bottom: 0,
        left: "30%",
        width: "40%",
        height: "6%",
        opacity: 0.2,
        "&:hover": {
          opacity: 0.5,
          fontWeight: "bold"
        },
        pointerEvents: "auto",
        textAlign: "center"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "button", color: "black", children: fullScreen ? "Exit Fullscreen" : "Enter Fullscreen" })
    }
  );
};
const projectData = {
  sceneTitle: "Nammo demo",
  description: "A demo Three.js scene for showcasing a digital ammunition catalogue.",
  containerSettings: {
    image: "/images/NAMMO-04.png",
    type: "none",
    bgStyles: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%"
    },
    fsStyles: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(128, 128, 128, 0.5)",
      backdropFilter: "blur(10px)"
    },
    styles: {
      position: "absolute",
      top: "10.5%",
      left: "17.4%",
      width: "36.8%",
      height: "83.8%"
    },
    useFullscreenButton: true
  },
  canvasSettings: {
    alpha: true,
    cameraSettings: {
      fov: 40,
      near: 0.01,
      far: 10,
      position: {
        x: 0,
        y: 0,
        z: 0.12
      }
    },
    usePostEffects: true,
    environmentProps: {
      preset: "studio",
      background: false
    },
    lights: [
      {
        isShowcaseLighting: true,
        preset: "showcaseWarm"
      }
    ]
  },
  parentPoi: {
    name: "Ammunition showcaser",
    description: "Placeholder ammunition POI.",
    type: "productViewer",
    cameraControls: {
      type: "fixed",
      startPosition: {
        x: 0,
        y: 0,
        z: 0.12
      }
    },
    childPois: [
      {
        name: "Ammunition 1",
        type: "product",
        modelData: [
          {
            path: "/models/bulletCrossSection.glb",
            format: "glb",
            materialSettings: {
              materialType: "physical",
              colorMap: "/textures/556_baseColor.png",
              normalMap: "/textures/556_normal.png",
              metalnessMap: "/textures/556_orm.png",
              roughnessMap: "/textures/556_orm.png",
              aoMap: "/textures/556_orm.png"
            },
            xView: {
              enabled: true,
              standardMesh: [
                {
                  nodeId: "Casing",
                  materialId: "Bullet"
                }
              ],
              xViewMesh: [
                {
                  nodeId: "CasingHalf1",
                  materialId: "Bullet"
                },
                {
                  nodeId: "Bullet",
                  materialId: "Bullet"
                },
                {
                  nodeId: "Gunpowder",
                  materialId: "Gunpowder"
                }
              ],
              fadeMesh: [
                {
                  nodeId: "CasingHalf2",
                  materialId: "Bullet"
                }
              ]
            }
          }
        ]
      },
      {
        name: "Ammunition 2",
        type: "product",
        modelData: [
          {
            path: "/models/bulletCrossSection.glb",
            format: "glb",
            materialSettings: {
              materialType: "physical",
              colorMap: "/textures/556_baseColor.png",
              normalMap: "/textures/556_normal.png",
              metalnessMap: "/textures/556_orm.png",
              roughnessMap: "/textures/556_orm.png",
              aoMap: "/textures/556_orm.png"
            },
            xView: {
              enabled: true,
              standardMesh: [
                {
                  nodeId: "Casing",
                  materialId: "Bullet"
                }
              ],
              xViewMesh: [
                {
                  nodeId: "CasingHalf1",
                  materialId: "Bullet"
                },
                {
                  nodeId: "Bullet",
                  materialId: "Bullet"
                },
                {
                  nodeId: "Gunpowder",
                  materialId: "Gunpowder"
                }
              ],
              fadeMesh: [
                {
                  nodeId: "CasingHalf2",
                  materialId: "Bullet"
                }
              ]
            }
          }
        ]
      }
    ]
  },
  debugSettings: {
    gridHelper: false,
    axesHelper: false,
    stats: false,
    lightHelpers: false
  }
};
const CanvasContainer = ({ containerSettings, fullScreen, children }) => {
  const inlineStyles = getBgClass(containerSettings);
  const canvasStyles = getCSSProperties((containerSettings == null ? void 0 : containerSettings.styles) || { position: "relative", width: "100%", height: "100%" });
  const fsCanvasStyles = getCSSProperties((containerSettings == null ? void 0 : containerSettings.fsStyles) || { position: "fixed", top: 0, left: 0, zIndex: 0 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "background", style: inlineStyles, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "canvas-container", style: fullScreen ? fsCanvasStyles : canvasStyles, children }) });
};
const getCSSProperties = (styles) => {
  const inlineStyles = {};
  Object.assign(inlineStyles, styles);
  return inlineStyles;
};
function getBgClass(bgSettings) {
  let inlineStyles = {};
  if (bgSettings == null ? void 0 : bgSettings.bgStyles) {
    inlineStyles = getCSSProperties(bgSettings.bgStyles);
  }
  inlineStyles.width = "100%";
  inlineStyles.height = "100%";
  switch (bgSettings == null ? void 0 : bgSettings.type) {
    case "contain":
      inlineStyles.backgroundSize = "contain";
      break;
    case "auto":
      inlineStyles.backgroundSize = "auto";
      break;
    case "cover":
      inlineStyles.backgroundSize = "cover";
      break;
    default:
    case "none":
      break;
  }
  if (bgSettings == null ? void 0 : bgSettings.image) {
    inlineStyles.backgroundImage = `url(${scenePath}${bgSettings.image})`;
  } else if (bgSettings == null ? void 0 : bgSettings.color) {
    inlineStyles.backgroundColor = bgSettings.color;
  }
  console.log(inlineStyles);
  return inlineStyles;
}
const App = () => {
  var _a;
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
  const [fullScreen, setFullScreen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CanvasContainer, { containerSettings: projectData.containerSettings, fullScreen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PoiProvider, { initialPoi: projectData.parentPoi, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Canvas,
      {
        ref: canvasRef,
        camera: {
          position: new Vector3(0, 8, 12),
          near: 0.05,
          far: 5
        },
        gl: {
          powerPreference: "high-performance",
          alpha: true,
          antialias: true
        },
        shadows: performanceMode ? false : true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: "studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Light, {}),
          showStats && /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
          !performanceMode && /* @__PURE__ */ jsxRuntimeExports.jsx(Effects, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddCameraTarget, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PoiHandler, { projectData, canvasRef, uiRef, overlayRef })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: "overlay",
        ref: overlayRef,
        style: { position: "absolute", left: 0, top: 0, height: "100%", width: "100%", pointerEvents: "none", overflow: "hidden" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: uiRef,
        id: "ui-overlay",
        style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            HamburgerMenu,
            {
              showStats,
              onToggleStats: handleToggleStats,
              usePerformanceMode: performanceMode,
              onTogglePerformanceMode: handlePerformanceMode
            }
          ),
          ((_a = projectData.containerSettings) == null ? void 0 : _a.useFullscreenButton) && /* @__PURE__ */ jsxRuntimeExports.jsx(FullscreenButton, { fullScreen, setFullScreen })
        ]
      }
    )
  ] }) });
};
function Light() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 5, -10], intensity: 40 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, 5], intensity: 0.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, -5], intensity: 0.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [0, 5, 0], intensity: 0.4 })
  ] });
}
const Effects = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(EffectComposer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToneMapping, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(N8AO, { aoRadius: 1, distanceFalloff: 1, intensity: 0.6 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SoftShadows, { size: 4, focus: 0.4, samples: 32 })
  ] });
};
export {
  App as default
};
//# sourceMappingURL=App-Bd16A0Ps.js.map
