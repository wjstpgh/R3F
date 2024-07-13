import { Float, Text } from "@react-three/drei";
import { WelcomeBalloonProps } from "./type";

const WelcomeBalloon = ({ content }: WelcomeBalloonProps) => {
  return (
    <Float speed={5} floatIntensity={2}>
      <Text
        font="./bangers-v20-latin-regular.woff"
        fontSize={1}
        color="salmon"
        position={[0, 5, -10]}
        maxWidth={3}
        textAlign="center"
      >
        {content}
        <meshNormalMaterial />
      </Text>
    </Float>
  );
};

export default WelcomeBalloon;
