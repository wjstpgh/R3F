import { MeshProps } from "@react-three/fiber";

const PlaceHolder = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
};

export default PlaceHolder;
