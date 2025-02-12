import { j as jsxRuntimeExports, r as reactExports } from "./index-DYVXPcKz.js";
import { l as useGLTF, n as Canvas, m as Vector3, o as Stats, p as HamburgerMenu } from "./HamburgerMenu-B5YvAaBa.js";
import { P as PoiProvider, L as LoadingSpinner, E as Environment, A as AddCameraTarget, a as EffectComposer, T as ToneMapping } from "./AddCameraTarget-TmSBFjaC.js";
import { P as PoiHandler, N as N8AO, S as SoftShadows } from "./PoiHandler-Dl01ZsBe.js";
import "./BackButton-CQAO1D7p.js";
const projectData = {
  sceneTitle: "Trox Demo",
  description: "Demo for Trox Ox products",
  sceneModels: [],
  canvasSettings: {
    backgroundColor: "#103366",
    shadows: true,
    antialias: true,
    environmentProps: {
      preset: "city"
    },
    cameraSettings: {
      position: {
        x: 0,
        y: 8,
        z: 12
      },
      lookAt: {
        x: 0,
        y: 5,
        z: 0
      }
    },
    fogSettings: {
      enabled: true,
      color: "#103366",
      near: 1,
      far: 80
    },
    lights: [
      {
        isShowcaseLighting: true,
        lights: [
          {
            type: "ambient",
            color: "#ffffff",
            intensity: 0.4,
            on: true
          }
        ]
      }
    ],
    usePostEffects: true
  },
  parentPoi: {
    name: "Test scene parent POI",
    description: "The parent POI for the test scene, encompassing all child POIs.",
    type: "staticObject",
    isMaster: true,
    cameraControls: {
      enablePan: false,
      type: "elevator",
      startPosition: {
        x: 0,
        y: 5,
        z: 10
      },
      targetOffset: {
        x: 0,
        y: 5,
        z: 0
      },
      constraints: {
        up: 50,
        down: -1,
        minZoom: 6,
        maxZoom: 16
      }
    },
    childPois: [
      {
        name: "Troxbox 1",
        meshId: "TroxBox_1",
        type: "staticObject",
        poiInfo: {
          title: "Trox-Box Room Controller",
          description: [
            "The Trox-Box room controller communicates wirelessly with the room sensor and the system controller.",
            "It only needs a wired connection to the units it controls and to the power supply. It can be serially or parallelly connected to the units.",
            "This solution saves time and money by drastically reducing the amount of cabling and work required for installation."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 170,
            right: -10
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "/projects/trox/images/TroxBox.png",
          iconSize: 60
        }
      },
      {
        name: "Troxbox 2",
        meshId: "TroxBox_2",
        type: "staticObject",
        poiInfo: {
          title: "Trox-Box Room Controller",
          description: [
            "The Trox-Box room controller communicates wirelessly with the room sensor and the system controller.",
            "It only needs a wired connection to the units it controls and to the power supply. It can be serially or parallelly connected to the units.",
            "This solution saves time and money by drastically reducing the amount of cabling and work required for installation."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: -10,
            right: 170
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "/projects/trox/images/TroxBox.png",
          iconSize: 60
        }
      },
      {
        name: "Troxbox 3",
        meshId: "TroxBox_3",
        type: "staticObject",
        poiInfo: {
          title: "Trox-Box Room Controller",
          description: [
            "The Trox-Box room controller communicates wirelessly with the room sensor and the system controller.",
            "It only needs a wired connection to the units it controls and to the power supply. It can be serially or parallelly connected to the units.",
            "This solution saves time and money by drastically reducing the amount of cabling and work required for installation."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 170,
            right: -10
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "/projects/trox/images/TroxBox.png",
          iconSize: 60
        }
      },
      {
        name: "Troxbox 4",
        meshId: "TroxBox_4",
        type: "staticObject",
        poiInfo: {
          title: "Trox-Box Room Controller",
          description: [
            "The Trox-Box room controller communicates wirelessly with the room sensor and the system controller.",
            "It only needs a wired connection to the units it controls and to the power supply. It can be serially or parallelly connected to the units.",
            "This solution saves time and money by drastically reducing the amount of cabling and work required for installation."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: -10,
            right: 170
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "/projects/trox/images/TroxBox.png",
          iconSize: 60
        }
      },
      {
        name: "Troxbox 5",
        meshId: "TroxBox_5",
        type: "staticObject",
        poiInfo: {
          title: "Trox-Box Room Controller",
          description: [
            "The Trox-Box room controller communicates wirelessly with the room sensor and the system controller.",
            "It only needs a wired connection to the units it controls and to the power supply. It can be serially or parallelly connected to the units.",
            "This solution saves time and money by drastically reducing the amount of cabling and work required for installation."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 170,
            right: -10
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "/projects/trox/images/TroxBox.png",
          iconSize: 60
        }
      },
      {
        name: "Troxbox 6",
        meshId: "TroxBox_6",
        type: "staticObject",
        poiInfo: {
          title: "Trox-Box Room Controller",
          description: [
            "The Trox-Box room controller communicates wirelessly with the room sensor and the system controller.",
            "It only needs a wired connection to the units it controls and to the power supply. It can be serially or parallelly connected to the units.",
            "This solution saves time and money by drastically reducing the amount of cabling and work required for installation."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: -10,
            right: 170
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "/projects/trox/images/TroxBox.png",
          iconSize: 60
        }
      },
      {
        name: "Leo-C 1",
        meshId: "Leo-C_1",
        type: "staticObject",
        poiInfo: {
          title: "Leo-C VAV-Regulator",
          description: ["The Leo-C VAV-Regulator is a compact and versatile VAV-Regulator for variable air volume systems."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 1.4,
            up: 60,
            down: 60,
            left: 80,
            right: 80
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 0,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/LeoC.png",
          iconSize: 60
        }
      },
      {
        name: "Leo-C 2",
        meshId: "Leo-C_2",
        type: "staticObject",
        poiInfo: {
          title: "Leo-C VAV-Regulator",
          description: ["The Leo-C VAV-Regulator is a compact and versatile VAV-Regulator for variable air volume systems."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 80,
            right: 80
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 0,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/LeoC.png",
          iconSize: 60
        }
      },
      {
        name: "Leo-C 3",
        meshId: "Leo-C_3",
        type: "staticObject",
        poiInfo: {
          title: "Leo-C VAV-Regulator",
          description: ["The Leo-C VAV-Regulator is a compact and versatile VAV-Regulator for variable air volume systems."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 80,
            right: 80
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 0,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/LeoC.png",
          iconSize: 60
        }
      },
      {
        name: "Leo-C 4",
        meshId: "Leo-C_4",
        type: "staticObject",
        poiInfo: {
          title: "Leo-C VAV-Regulator",
          description: ["The Leo-C VAV-Regulator is a compact and versatile VAV-Regulator for variable air volume systems."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 80,
            right: 80
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 0,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/LeoC.png",
          iconSize: 60
        }
      },
      {
        name: "Leo-C 5",
        meshId: "Leo-C_5",
        type: "staticObject",
        poiInfo: {
          title: "Leo-C VAV-Regulator",
          description: ["The Leo-C VAV-Regulator is a compact and versatile VAV-Regulator for variable air volume systems."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 80,
            right: 80
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 0,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/LeoC.png",
          iconSize: 60
        }
      },
      {
        name: "Leo-C 6",
        meshId: "Leo-C_6",
        type: "staticObject",
        poiInfo: {
          title: "Leo-C VAV-Regulator",
          description: ["The Leo-C VAV-Regulator is a compact and versatile VAV-Regulator for variable air volume systems."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 80,
            right: 80
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 0,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/LeoC.png",
          iconSize: 60
        }
      },
      {
        name: "Leo-C 7",
        meshId: "Leo-C_7",
        type: "staticObject",
        poiInfo: {
          title: "Leo-C VAV-Regulator",
          description: ["The Leo-C VAV-Regulator is a compact and versatile VAV-Regulator for variable air volume systems."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 2,
            up: 60,
            down: 60,
            left: 80,
            right: 80
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 0,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/LeoC.png",
          iconSize: 60
        }
      },
      {
        name: "Sensor 1",
        meshId: "Sensor_1",
        type: "staticObject",
        poiInfo: {
          title: "Room Sensor",
          description: ["The room sensor measures the room temperature and humidity and wirelessly sends the data to the Trox-Box room controller."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 1.4,
            up: 60,
            down: 60,
            left: -10,
            right: 170
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Sensor.png",
          iconSize: 60
        }
      },
      {
        name: "Sensor 2",
        meshId: "Sensor_2",
        type: "staticObject",
        poiInfo: {
          title: "Room Sensor",
          description: ["The room sensor measures the room temperature and humidity and wirelessly sends the data to the Trox-Box room controller."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 1.4,
            up: 60,
            down: 60,
            left: 170,
            right: -10
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Sensor.png",
          iconSize: 60
        }
      },
      {
        name: "Sensor 3",
        meshId: "Sensor_3",
        type: "staticObject",
        poiInfo: {
          title: "Room Sensor",
          description: ["The room sensor measures the room temperature and humidity and wirelessly sends the data to the Trox-Box room controller."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 1.4,
            up: 60,
            down: 60,
            left: -10,
            right: 170
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Sensor.png",
          iconSize: 60
        }
      },
      {
        name: "Sensor 4",
        meshId: "Sensor_4",
        type: "staticObject",
        poiInfo: {
          title: "Room Sensor",
          description: ["The room sensor measures the room temperature and humidity and wirelessly sends the data to the Trox-Box room controller."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 1.4,
            up: 60,
            down: 60,
            left: 170,
            right: -10
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Sensor.png",
          iconSize: 60
        }
      },
      {
        name: "Sensor 5",
        meshId: "Sensor_5",
        type: "staticObject",
        poiInfo: {
          title: "Room Sensor",
          description: ["The room sensor measures the room temperature and humidity and wirelessly sends the data to the Trox-Box room controller."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 1.4,
            up: 60,
            down: 60,
            left: -10,
            right: 170
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Sensor.png",
          iconSize: 60
        }
      },
      {
        name: "Sensor 6",
        meshId: "Sensor_6",
        type: "staticObject",
        poiInfo: {
          title: "Room Sensor",
          description: ["The room sensor measures the room temperature and humidity and wirelessly sends the data to the Trox-Box room controller."]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.2,
            maxZoom: 1.4,
            up: 60,
            down: 60,
            left: 170,
            right: -10
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: 1,
            z: 0
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Sensor.png",
          iconSize: 60
        }
      },
      {
        name: "Orion 1",
        meshId: "CeilingVent_1",
        type: "staticObject",
        poiInfo: {
          title: "ORION-PTV",
          description: [
            "Orion-PTV med Sirius er et tilluftsaggregat med VAV-funksjon. Det brukes som strømningsregulator i behovsstyrte ventilasjonssystemer. Orion-LÖV gir utmerket induksjon og er ideell for variable luftmengder."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.4,
            maxZoom: 1.4,
            up: 40,
            down: 90
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: -1,
            z: -1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Orion.png",
          iconSize: 60
        }
      },
      {
        name: "Orion 2",
        meshId: "CeilingVent_2",
        type: "staticObject",
        poiInfo: {
          title: "ORION-PTV",
          description: [
            "Orion-PTV med Sirius er et tilluftsaggregat med VAV-funksjon. Det brukes som strømningsregulator i behovsstyrte ventilasjonssystemer. Orion-LÖV gir utmerket induksjon og er ideell for variable luftmengder."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.4,
            maxZoom: 1.4,
            up: 40,
            down: 90
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: -1,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Orion.png",
          iconSize: 60
        }
      },
      {
        name: "Orion 3",
        meshId: "CeilingVent_3",
        type: "staticObject",
        poiInfo: {
          title: "ORION-PTV",
          description: [
            "Orion-PTV med Sirius er et tilluftsaggregat med VAV-funksjon. Det brukes som strømningsregulator i behovsstyrte ventilasjonssystemer. Orion-LÖV gir utmerket induksjon og er ideell for variable luftmengder."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.4,
            maxZoom: 1.4,
            up: 40,
            down: 90
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: -1,
            z: -1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Orion.png",
          iconSize: 60
        }
      },
      {
        name: "Orion 4",
        meshId: "CeilingVent_4",
        type: "staticObject",
        poiInfo: {
          title: "ORION-PTV",
          description: [
            "Orion-PTV med Sirius er et tilluftsaggregat med VAV-funksjon. Det brukes som strømningsregulator i behovsstyrte ventilasjonssystemer. Orion-LÖV gir utmerket induksjon og er ideell for variable luftmengder."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.4,
            maxZoom: 1.4,
            up: 40,
            down: 90
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: -1,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Orion.png",
          iconSize: 60
        }
      },
      {
        name: "Svalbard 1",
        meshId: "Svalbard_1",
        type: "staticObject",
        poiInfo: {
          title: "Svalbard",
          description: ["*** Info ***"]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.4,
            maxZoom: 1.4,
            up: 40,
            down: 90
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: -1,
            z: -1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Svalbard.png",
          iconSize: 60
        }
      },
      {
        name: "Svalbard 2",
        meshId: "Svalbard_2",
        type: "staticObject",
        poiInfo: {
          title: "Svalbard",
          description: ["*** Info ***"]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.4,
            maxZoom: 1.4,
            up: 40,
            down: 90
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: -1,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/Svalbard.png",
          iconSize: 60
        }
      },
      {
        name: "X Cube",
        meshId: "RoofVentIntake",
        type: "staticObject",
        poiInfo: {
          title: "ORION-PTV",
          description: [
            "Orion-PTV med Sirius er et tilluftsaggregat med VAV-funksjon. Det brukes som strømningsregulator i behovsstyrte ventilasjonssystemer. Orion-LÖV gir utmerket induksjon og er ideell for variable luftmengder."
          ]
        },
        cameraControls: {
          constraints: {
            minZoom: 0.4,
            maxZoom: 1.4,
            up: 40,
            down: 90
          },
          type: "orbit",
          startPosition: {
            x: 0,
            y: -1,
            z: 1
          },
          targetOffset: {
            x: 0,
            y: 0,
            z: 0
          }
        },
        uiElement: {
          useIcon: true,
          type: "icon",
          iconPath: "projects/trox/images/XCube.png",
          iconSize: 60
        }
      }
    ]
  },
  debugSettings: {
    allTrue: false,
    gridHelper: false,
    axesHelper: false,
    stats: false,
    statsPosition: "top-left",
    lightHelpers: false
  }
};
function Building() {
  const { nodes, materials } = useGLTF("projects/trox/models/troxDemo.glb");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { dispose: null, children: Object.keys(nodes).map((key) => {
    const node = nodes[key];
    if (node.type === "Mesh") {
      const material = node.material;
      const materialName = Array.isArray(material) ? material[0].name : material.name;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "mesh",
        {
          name: node.name,
          geometry: node.geometry,
          material: materials[materialName],
          position: node.position,
          rotation: node.rotation,
          scale: node.scale,
          castShadow: materialName !== "Glass" && materialName !== "Ground",
          receiveShadow: materialName !== "Glass"
        },
        key
      );
    }
    return null;
  }) });
}
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100vw", height: "100vh", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PoiProvider, { initialPoi: projectData.parentPoi, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Canvas,
      {
        ref: canvasRef,
        camera: {
          position: new Vector3(0, 8, 12),
          near: 0.2,
          far: 100
        },
        gl: {
          powerPreference: "high-performance",
          alpha: false,
          antialias: true,
          shadowMapEnabled: false
        },
        shadows: performanceMode ? false : true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("color", { attach: "background", args: ["#103366"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: "city" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Light, {}),
            getFog({
              enabled: true,
              color: "#103366",
              near: 1,
              far: 80
            }),
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
            onTogglePerformanceMode: handlePerformanceMode
          }
        )
      }
    )
  ] }) });
};
function Light() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 5, -10], castShadow: true, intensity: 40, "shadow-mapSize": 1024, "shadow-bias": -2e-3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("orthographicCamera", { attach: "shadow-camera", args: [-5, 5, 12, -2, 4, 40] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, 5], intensity: 0.4, "shadow-mapSize": 128 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, 5, -5], intensity: 0.4, "shadow-mapSize": 128 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [0, 5, 0], intensity: 0.4, "shadow-mapSize": 128 })
  ] });
}
function getFog(fogSettings) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("fog", { attach: "fog", args: [fogSettings.color || "#ffffff", fogSettings.near, fogSettings.far] });
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
//# sourceMappingURL=App-BP-Kjjj2.js.map
