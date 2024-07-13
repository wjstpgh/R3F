import { MeshReflectorMaterial } from "@react-three/drei";

const Lawn = () => {
  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={20}>
      <planeGeometry />
      <MeshReflectorMaterial
        mirror={0.5}
        resolution={512}
        blur={[1000, 1000]}
        mixBlur={1}
        color="greenyellow"
      />
    </mesh>
  );
};

export default Lawn;
