import { useRef } from "react";
import { ContactShadows, Sky } from "@react-three/drei";
import { useControls } from "leva";
import { DirectionalLight } from "three";

const Heaven = () => {
  const directionalLight = useRef<DirectionalLight>(null!);

  const { shadowColor, opacity, blur } = useControls("contact shadows", {
    shadowColor: "#000000",
    opacity: { value: 0.5, min: 0, max: 1 },
    blur: { value: 1, min: 0, max: 10 },
  });

  const { sunPosition } = useControls("sunPosition", {
    sunPosition: [1, 2, 3],
  });

  return (
    <>
      <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={shadowColor}
        opacity={opacity}
        blur={blur}
        frames={1}
      />

      <directionalLight
        ref={directionalLight}
        position={sunPosition}
        intensity={4.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={2}
        shadow-camera-right={2}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
      />
      <ambientLight intensity={1.5} />

      <Sky sunPosition={sunPosition} />
    </>
  );
};

export default Heaven;
