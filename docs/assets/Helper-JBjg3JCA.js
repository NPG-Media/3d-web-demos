import { r as reactExports } from "./index-CqQfns4w.js";
import { u as useThree, g as useFrame } from "./HamburgerMenu-DYNrQx9u.js";
function useHelper(object3D, helperConstructor, ...args) {
  const helper = reactExports.useRef();
  const scene = useThree((state) => state.scene);
  reactExports.useLayoutEffect(() => {
    let currentHelper = void 0;
    if (object3D && object3D != null && object3D.current && helperConstructor) {
      helper.current = currentHelper = new helperConstructor(object3D.current, ...args);
    }
    if (currentHelper) {
      currentHelper.traverse((child) => child.raycast = () => null);
      scene.add(currentHelper);
      return () => {
        helper.current = void 0;
        scene.remove(currentHelper);
        currentHelper.dispose == null || currentHelper.dispose();
      };
    }
  }, [scene, helperConstructor, object3D, ...args]);
  useFrame(() => {
    var _helper$current;
    return void ((_helper$current = helper.current) == null || _helper$current.update == null ? void 0 : _helper$current.update());
  });
  return helper;
}
export {
  useHelper as u
};
//# sourceMappingURL=Helper-JBjg3JCA.js.map
