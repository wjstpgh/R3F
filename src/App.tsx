import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";

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
      camera={{ fov: 85, near: 0.1, far: 200, position: [3, 2, 6] }}
      shadows={false}
    >
      <Experience />
    </Canvas>
  );
}
