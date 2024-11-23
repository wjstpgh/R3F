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
import PostProcessing from "./postProcessing";
import Physics from "./physics";

export default function Experience() {
  const { postProcessing, perfVisible, view3DText } = useControls({
    postProcessing: true,
    perfVisible: false,
    view3DText: false,
  });

  return (
    <>
      {postProcessing && <PostProcessing />}

      {perfVisible && <Perf position="top-left" />}
      <OrbitControls makeDefault />

      <Heaven />

      <Portal />

      <Melon />

      <HungryFox />

      {view3DText && <DonutText3D />}

      <MouseEvent />

      <Physics />

      <Lawn />

      <WelcomeBalloon content="Welcome" />
    </>
  );
}
