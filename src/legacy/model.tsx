import { Clone, useGLTF } from "@react-three/drei";

const Hamberger = () => {
  const model = useGLTF("/resources/hamburger-draco.glb");

  return (
    <>
      <Clone object={model.scene} scale={0.2} position-x={1} />;
      <Clone object={model.scene} scale={0.2} position-x={3} />;
      <Clone object={model.scene} scale={0.2} position-x={5} />;
    </>
  );
};

export default Hamberger;

useGLTF.preload("/resources/hamburger-draco.glb");
