import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";

export default function App() {
  // const created = ({ scene }: RootState) => {
  //   scene.background = new Color("red");
  // };

  return (
    <Canvas
      flat
      dpr={[1, 2]} //defualt value
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: SRGBColorSpace,
      }}
      camera={{ fov: 85, near: 0.1, far: 200, position: [3, 2, 6] }}
      shadows={false}
      // onCreated={created}
    >
      <Experience />
    </Canvas>
  );
}
