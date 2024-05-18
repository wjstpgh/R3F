import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { Mesh } from "three";

export default function Experience() {
  const sphere = useRef<Mesh>(null!);
  const cube = useRef<Mesh>(null!);

  const { position, color, visible } = useControls("sphere", {
    position: { value: { x: -2, y: 0 }, step: 0.01, joystick: "invertY" },
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

  const { perfVisible } = useControls({ perfVisible: false });

  return (
    <>
      {perfVisible && <Perf position="top-left" />}

      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

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
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
          <Html
            position={[0, 1.5, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
            occlude={[sphere, cube]}
          >
            Sphere
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <TransformControls object={cube} mode="translate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          mirror={0.5}
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          color="greenyellow"
        />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={3}
          textAlign="center"
        >
          My R3F Excersize
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
}
