import { useRef } from "react";
import { Material, Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { meshBounds } from "@react-three/drei";

const MouseEvent = () => {
  const cube = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  const eventHandler = () => {
    (cube.current.material as Material & { color: any }).color.set(
      `hsl(${Math.random() * 360}, 100%, 75%)`
    );
  };

  return (
    <>
      <mesh position={[4, 1, 2]} onClick={(e) => e.stopPropagation()}>
        <sphereGeometry />
        <meshStandardMaterial color={[1.5, 1, 4 * 100]} />
      </mesh>

      <mesh
        ref={cube}
        raycast={meshBounds}
        position={[4, 1, -2]}
        scale={1.5}
        onClick={eventHandler}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default MouseEvent;
