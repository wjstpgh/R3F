import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Experience from "./components/Experience";
import Portfolio from "./portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/experiance"
          element={
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
            </Canvas>
          }
        />

        <Route
          path="/"
          element={
            <Canvas
              flat
              dpr={[1, 2]}
              gl={{
                antialias: true,
                toneMapping: ACESFilmicToneMapping,
                outputColorSpace: SRGBColorSpace,
              }}
              camera={{ fov: 85, near: 0.1, far: 500, position: [1, 3, 10] }}
              shadows={false}
              className="canvas"
            >
              <Portfolio />
            </Canvas>
          }
        />

        <Route path="*" element={<Navigate to="/experiance" />} />
      </Routes>
    </BrowserRouter>
  );
}
