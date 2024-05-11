import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import CustomObject from "./CustomObject";

extend({ OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();

  const cubeRef = useRef<Mesh>(null!);
  const groupRef = useRef<Group>(null!);

  useFrame((_state, delta) => {
    // const angle = state.clock.getElapsedTime();
    // state.camera.position.x = Math.sin(angle * 0.3) * 8;
    // state.camera.position.z = Math.cos(angle * 0.3) * 8;
    // state.camera.lookAt(0, 0, 0);

    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="mediumpurple" wireframe />
        </mesh>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <CustomObject />
    </>
  );
}
