import { r as reactExports, j as jsxRuntimeExports } from "./index-CqQfns4w.js";
import { n as Canvas, m as Vector3, o as Stats, p as HamburgerMenu, q as CameraHelper } from "./HamburgerMenu-DYNrQx9u.js";
import { P as PoiProvider, L as LoadingSpinner, E as Environment, A as AddCameraTarget, a as EffectComposer, T as ToneMapping } from "./AddCameraTarget-C0qLm03P.js";
import { P as PoiHandler, N as N8AO, S as SoftShadows } from "./PoiHandler-zaCuhEr5.js";
import { u as useHelper } from "./Helper-JBjg3JCA.js";
import "./BackButton-Dm2sR9G8.js";
const projectData = {
  sceneTitle: "Test scene",
  description: "This is a test scene to demonstrate the capabilities of the NPG 3JS platform.",
  sceneModels: [
    {
      path: "/models/testScene.glb",
      castShadow: true,
      receiveShadow: true
    },
    {
      path: "/models/airplane.glb",
      loopAnimation: "fly_loop",
      castShadow: true,
      receiveShadow: true
    },
    {
      path: "/models/quest3.glb",
      castShadow: true,
      receiveShadow: true
    },
    {
      path: "/models/scrollTest.glb",
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
    },
    childPois: [
      {
        name: "Compressor",
        meshId: "Compressor",
        type: "productViewer",
        useOverlay: true,
        poiInfo: {
          title: "Compressor",
          description: [
            "The TMC compressor is engineered to deliver superior performance and reliability in various industrial applications.",
            "Equipped with advanced technology, the TMC compressor offers precise control and optimal energy consumption."
          ],
          image: "compressor.jpg"
        },
        cameraControls: {
          startPosition: {
            x: 0,
            y: 1,
            z: 8
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "clickable"
        },
        childPois: [
          {
            name: "Compressor 1",
            type: "product",
            modelData: [
              {
                path: "/models/compressor.glb"
              }
            ]
          },
          {
            name: "Compressor 2",
            type: "product",
            modelData: [
              {
                path: "/models/compressor.glb"
              }
            ]
          }
        ]
      },
      {
        name: "Screen",
        meshId: "Screen",
        type: "videoFrame",
        cameraControls: {
          startPosition: {
            x: 0,
            y: 1.8,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: -1
          },
          animationDuration: 1
        },
        uiElement: {
          useIcon: true,
          type: "clickable",
          positionOffset: {
            x: 0,
            y: 1.3,
            z: 0
          }
        },
        videoData: {
          isVideo: true,
          videoUrl: "npg_jul.mp4",
          fadeDuration: 500
        }
      },
      {
        name: "Quest3",
        meshId: "Quest3",
        type: "staticObject",
        poiInfo: {
          title: "Interactive Solutions",
          description: [
            "At NPG, we excel in crafting innovative and interactive solutions designed to captivate audiences.",
            "Our cutting-edge products are thoughtfully designed to boost user engagement while maintaining seamless interfaces."
          ],
          image: "npgVr.jpg"
        },
        cameraControls: {
          constraints: {
            minZoom: 0.6,
            maxZoom: 0.6
          },
          type: "fixed",
          startPosition: {
            x: 0,
            y: 0.3,
            z: 0.6
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "clickable"
        },
        childPois: [
          {
            name: "Quest3",
            meshId: "Quest3",
            type: "inspectObject",
            inspectObjectData: {
              elevation: 0.3,
              rotationSpeed: 1
            },
            cameraControls: {
              animate: false,
              type: "fixed",
              startPosition: {
                x: 0,
                y: 0.3,
                z: 0.6
              },
              targetOffset: {
                x: 0,
                y: 0,
                z: 0
              }
            },
            uiElement: {
              useIcon: true,
              type: "clickable"
            },
            poiFeatures: [
              {
                name: "VR video",
                type: "videoFrame",
                activationType: "ui",
                data: {
                  isVideo: true,
                  videoUrl: "npg_jul.mp4",
                  fadeDuration: 1e3,
                  fadeIn: true,
                  fadeOut: true
                },
                uiElement: {
                  name: "Play Video",
                  type: "icon",
                  positionOffset: {
                    x: 0,
                    y: 0.3,
                    z: 0
                  }
                }
              }
            ]
          }
        ]
      },
      {
        name: "TMC Mafyar",
        meshId: "TMC_Mafyar",
        type: "staticObject",
        poiInfo: {
          title: "TMC Maritime technology",
          description: [
            "TMC delivers high-performance equipment that ensures optimal performance and reliability.",
            "Equipped with advanced TMC technology, the ship can withstand harsh marine conditions and deliver superior performance.",
            "Engineered to deliver exceptional performance and reliability in various marine applications."
          ],
          image: "ship.jpg"
        },
        cameraControls: {
          type: "orbit",
          constraints: {
            up: 50,
            down: 0,
            minZoom: 1,
            maxZoom: 12
          },
          startPosition: {
            x: 0,
            y: 1,
            z: -2
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          },
          animationDuration: 0.6
        },
        uiElement: {
          useIcon: true,
          type: "clickable"
        }
      },
      {
        name: "Airplane",
        meshId: "airplane",
        type: "staticObject",
        cameraControls: {
          type: "orbit",
          constraints: {
            up: 90,
            down: 90,
            minZoom: 0.6,
            maxZoom: 12
          },
          startPosition: {
            x: 0,
            y: 1,
            z: 2
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          },
          follow: true
        },
        poiFeatures: [
          {
            name: "Gear animation",
            type: "animation",
            activationType: "ui",
            data: {
              isAnimation: true,
              name: "LandingGear",
              loop: false,
              reverseOnFalse: true,
              speed: 1
            },
            uiElement: {
              name: "Retract Gear",
              offName: "Extend Gear",
              type: "toggle"
            }
          }
        ],
        uiElement: {
          useIcon: true,
          type: "clickable"
        }
      },
      {
        name: "ScrollViewTest",
        meshId: "ScrollTester",
        type: "scrollView",
        cameraControls: {
          type: "fixed",
          constraints: {
            up: 90,
            down: 90,
            minZoom: 0.6,
            maxZoom: 12
          },
          startPosition: {
            x: 0,
            y: 1,
            z: 2
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "clickable"
        },
        scrollData: {
          steps: [
            {
              stepName: "ScrollCube_1",
              cameraTransform: {
                position: {
                  x: 0,
                  y: 0.2,
                  z: 0.4
                },
                target: {
                  x: 0,
                  y: 0,
                  z: 0
                }
              }
            },
            {
              stepName: "ScrollCube_2",
              editMaterial: true,
              poiInfo: {
                title: "Scroll Cube 3",
                description: ["This is the third cube."]
              },
              cameraTransform: {
                position: {
                  x: 0,
                  y: 0.2,
                  z: 0.4
                },
                target: {
                  x: 0,
                  y: 0,
                  z: 0
                }
              }
            },
            {
              stepName: "ScrollCube_3",
              poiInfo: {
                title: "Scroll Cube 3",
                description: ["This is the third cube."]
              },
              cameraTransform: {
                position: {
                  x: 0,
                  y: 0.2,
                  z: 0.4
                },
                target: {
                  x: 0,
                  y: 0,
                  z: 0
                }
              }
            },
            {
              stepName: "ScrollCube_4",
              editMaterial: true,
              cameraTransform: {
                position: {
                  x: 0,
                  y: 0.2,
                  z: 0.4
                },
                target: {
                  x: 0,
                  y: 0,
                  z: 0
                }
              }
            }
          ]
        }
      }
    ]
  },
  debugSettings: {
    allTrue: false,
    gridHelper: false,
    axesHelper: false,
    stats: false,
    lightHelpers: false
  }
};
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100vw", height: "100vh", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PoiProvider, { initialPoi: projectData.parentPoi, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Canvas,
      {
        ref: canvasRef,
        camera: {
          position: new Vector3(0, 8, 12),
          near: 0.1,
          far: 40
        },
        gl: {
          powerPreference: "high-performance",
          alpha: false,
          antialias: true
        },
        shadows: performanceMode ? false : true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("color", { attach: "background", args: ["#666666"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: "city" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Light, { debugMode }),
            showStats && /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
            !performanceMode && /* @__PURE__ */ jsxRuntimeExports.jsx(Effects, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AddCameraTarget, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PoiHandler, { projectData, canvasRef, uiRef, overlayRef })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { color: "#ffd8b1", position: [5, 5, -10], castShadow: true, intensity: 20, "shadow-mapSize": [1024, 1024], "shadow-bias": -0.01, children: /* @__PURE__ */ jsxRuntimeExports.jsx("orthographicCamera", { ref: shadowCamRef, attach: "shadow-camera", args: [-5, 5, 5, -2, 6, 16] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, 5], intensity: 0.4, "shadow-mapSize": [128, 128] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, -5], intensity: 0.4, "shadow-mapSize": [128, 128] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [0, 5, 0], intensity: 0.4, "shadow-mapSize": [128, 128] })
  ] });
};
const Effects = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(EffectComposer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToneMapping, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(N8AO, { aoRadius: 1, distanceFalloff: 1, intensity: 0.6 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SoftShadows, { size: 10, focus: 0.4, samples: 32 })
  ] });
};
export {
  App as default
};
//# sourceMappingURL=App-CLlKiLkU.js.map
