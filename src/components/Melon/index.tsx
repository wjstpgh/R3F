import { Html, PivotControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { useRef } from "react";
import { Mesh } from "three";

const Melon = () => {
  const sphere = useRef<Mesh>(null!);

  const { position, color, visible } = useControls("sphere", {
    position: { value: { x: -4, y: 1 }, step: 0.01, joystick: "invertY" },
    color: "hsla(100deg,100%,50%,0.5)",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {}),
    choice: { options: ["a", "b", "c"] },
  });

  return (
    <PivotControls
      anchor={[0, 0, 0]}
      depthTest={false}
      lineWidth={4}
      axisColors={["#9381ff", "#ff4d6d", "#7ac582"]}
      scale={100}
      fixed
    >
      <mesh
        ref={sphere}
        position={[position.x, position.y, 0]}
        visible={visible}
        castShadow
      >
        <sphereGeometry />
        <meshStandardMaterial color={color} />
        <Html
          position={[0, 1.5, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
          occlude={[sphere]}
        >
          Sphere
        </Html>
      </mesh>
    </PivotControls>
  );
};

export default Melon;
