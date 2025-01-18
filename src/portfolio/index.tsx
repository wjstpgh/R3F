import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";

const Portfolio = () => {
  const computer = useGLTF("/resources/model/macbook.gltf");

  return (
    <>
      <Environment preset="city" />

      <color args={["#241a1a"]} attach="background" />

      <group position={[0, -2, 0]}>
        <PresentationControls
          global
          rotation={[0.13, 0.6, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <rectAreaLight
              width={5}
              height={1.65}
              intensity={65}
              color={"#999"}
              rotation={[-0.1, Math.PI, 0]}
              position={[-1, 0.55, -1.5]}
            />

            <primitive
              object={computer.scene}
              position={[-1, -0.2, 0]}
              scale={2.5}
            >
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.18}
                position={[0, 1.56, -1.4]}
                rotation={[-0.256, 0, 0]}
              >
                <iframe src="https://three-psi-dusky.vercel.app/" />
              </Html>
            </primitive>

            <Text
              font="./bangers-v20-latin-regular.woff"
              fontSize={1}
              position={[4, 3.5, 0.75]}
              rotation-y={-1.3}
              maxWidth={3}
              textAlign="center"
            >
              This is Jeon Se Ho's Three.JS
            </Text>
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.4}
          scale={13}
          blur={2.4}
        />
      </group>
    </>
  );
};

export default Portfolio;
