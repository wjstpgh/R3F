import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import Melon from "./Melon";
import Heaven from "./environment";
import WelcomeBalloon from "./balloon";
import Lawn from "./lawn";
import HungryFox from "./hungry-fox";
import DonutText3D from "./3dtext";
import MouseEvent from "./mouse-event";
import Portal from "./portal";

export default function Experience() {
  const { perfVisible, view3DText } = useControls({
    perfVisible: false,
    view3DText: false,
  });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <OrbitControls makeDefault />

      <Heaven />

      <Portal />

      <Melon />

      <HungryFox />

      {view3DText && <DonutText3D />}

      <MouseEvent />

      <Lawn />

      <WelcomeBalloon content="Welcome" />
    </>
  );
}
