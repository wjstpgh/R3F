import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import Melon from "./Melon";
import Heaven from "./environment";
import WelcomeBalloon from "./balloon";
import Lawn from "./lawn";

export default function Experience() {
  const { perfVisible } = useControls({ perfVisible: false });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}
      <OrbitControls makeDefault />

      <Heaven />

      <Melon />

      <Lawn />

      <WelcomeBalloon content="Welcome" />
    </>
  );
}
