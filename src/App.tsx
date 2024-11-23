import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";

import Experience from "./components/Experience";

export default function App() {
  return (
    <Canvas
      flat
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: SRGBColorSpace,
      }}
      camera={{ fov: 85, near: 0.1, far: 500, position: [-5, 10, 20] }}
      shadows={false}
      className="canvas"
    >
      <Experience />
      {/* <Portfolio /> */}
    </Canvas>
  );
}
