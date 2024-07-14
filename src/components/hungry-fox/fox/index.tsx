import { useEffect } from "react";
import { useControls } from "leva";
import { useAnimations, useGLTF } from "@react-three/drei";

const Fox = () => {
  const fox = useGLTF("./resources/model/Fox/glTF/Fox.gltf");
  const animation = useAnimations(fox.animations, fox.scene);

  const { animationName } = useControls({
    animationName: { options: animation.names },
  });

  useEffect(() => {
    const action = animation.actions[animationName];
    action?.reset().fadeIn(0.5).play();

    return () => {
      action?.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[-1.5, 0, -2.5]}
      rotation-y={0.5}
    />
  );
};

export default Fox;
