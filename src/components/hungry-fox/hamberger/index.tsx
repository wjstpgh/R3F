import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./type";

const Hamburger = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "./resources/hamburger-draco.glb"
  ) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.81729, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.77111, 0]}
      />
    </group>
  );
};

export default Hamburger;

useGLTF.preload("./resources/hamburger-draco.glb");
