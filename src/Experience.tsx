import {
  ContactShadows,
  Environment,
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Sky,
  Text,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
import { useEffect, useRef } from "react";
import { DirectionalLight, DirectionalLightHelper, Mesh } from "three";

export default function Experience() {
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, DirectionalLightHelper, 1);

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

  const { shadowColor, opacity, blur } = useControls("contact shadows", {
    shadowColor: "#000000",
    opacity: { value: 0.5, min: 0, max: 1 },
    blur: { value: 1, min: 0, max: 10 },
  });

  const { sunPosition } = useControls("sunPosition", {
    sunPosition: [1, 2, 3],
  });

  const { envMapIntensity } = useControls("environment map", {
    envMapIntensity: { value: 1, min: 0, max: 12 },
  });

  const scene = useThree((state) => state.scene);
  useEffect(() => {
    scene.environmentIntensity = envMapIntensity;
  }, [envMapIntensity]);

  const { perfVisible } = useControls({ perfVisible: false });

  useFrame((_state, delta) => {
    // const time = state.clock.elapsedTime;
    // cube.current.position.x = 2 + Math.sin(time);
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      {/* <BakeShadows />
      <SoftShadows size={25} samples={10} focus={0} /> */}
      <color args={["ivory"]} attach="background" />
      {perfVisible && <Perf position="top-left" />}

      <Environment
        // background
        // ground={{ height: 7, radius: 28, scale: 100 }}
        // files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
        preset="apartment"
        // files={[
        //   "./environmentMaps/2/px.jpg",
        //   "./environmentMaps/2/nx.jpg",
        //   "./environmentMaps/2/py.jpg",
        //   "./environmentMaps/2/ny.jpg",
        //   "./environmentMaps/2/pz.jpg",
        //   "./environmentMaps/2/nz.jpg",
        // ]}
        // resolution={32}
      >
        {/* <color args={["black"]} attach="background" />
        <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}
        {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[1, 0, 0]} />
        </mesh> */}
      </Environment>

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={3}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={shadowColor}
        opacity={opacity}
        blur={blur}
        frames={1}
      />

      <directionalLight
        ref={directionalLight}
        position={sunPosition}
        intensity={4.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={2}
        shadow-camera-right={2}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
      />
      <ambientLight intensity={1.5} />

      <Sky sunPosition={sunPosition} />

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
          castShadow
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

      <mesh
        // receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          mirror={0.5}
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          color="greenyellow"
        />
      </mesh>

      {/* <Stage
        shadows={{ type: "contact", opacity: 0.2, blur: 3 }}
        environment="dawn"
        preset="portrait"
        intensity={2}
      >
        <mesh
          ref={sphere}
          position={[position.x, position.y, 0]}
          visible={visible}
          castShadow
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh ref={cube} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <TransformControls object={cube} mode="translate" />
      </Stage> */}

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
