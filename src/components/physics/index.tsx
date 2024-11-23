import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  RigidBody,
  Physics as PhysicElement,
  RapierRigidBody,
  CuboidCollider,
  CylinderCollider,
  InstancedRigidBodies,
} from "@react-three/rapier";

interface instances {
  key: string;
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
}

const CUBES_COUNT = 300;

const Physics = () => {
  const [hitSound] = useState(() => new Audio("./audio/hit.mp3"));

  const cube = useRef<RapierRigidBody>(null!);
  const twister = useRef<RapierRigidBody>(null!);

  const hamburger = useGLTF("./resources/hamburger-draco.glb");

  const cubeJump = () => {
    const mass = cube.current.mass();

    cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 }, false);
    cube.current.applyTorqueImpulse(
      {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
        z: Math.random() - 0.5,
      },
      false
    );
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const eulerRotation = new THREE.Euler(0, time * 3, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twister.current.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle) * 3 + 18;
    const z = Math.sin(angle) * 3;
    twister.current.setNextKinematicTranslation({ x, y: 1, z });
  });

  const collisionEnter = () => {
    hitSound.currentTime = 0;
    hitSound.volume = Math.random();
    hitSound.play();
  };

  const instances = useMemo(() => {
    const instances: instances[] = [];

    for (let i = 0; i < CUBES_COUNT; i++) {
      instances.push({
        key: `instances_${i}`,
        position: [
          (Math.random() - 0.5) * 8,
          6 + i * 0.2,
          (Math.random() - 0.5) * 8,
        ],
        rotation: [0, 0, 0],
      });
    }

    return instances;
  }, []);

  return (
    <group position={[18, 0.5, 0]}>
      <PhysicElement gravity={[0, -9.08, 0]}>
        <RigidBody colliders="ball">
          <mesh castShadow position={[0, 6, 0]} scale={0.5}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          ref={cube}
          position={[1.5, 2, 0]}
          gravityScale={1.5}
          restitution={0.5}
          friction={0.7}
          colliders={false}
          onCollisionEnter={collisionEnter}
        >
          <mesh castShadow onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
          <CuboidCollider mass={2} args={[0.5, 0.5, 0.5]} />
        </RigidBody>

        <RigidBody
          ref={twister}
          position={[0, 0.5, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh castShadow scale={[0.4, 0.4, 8]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

        <RigidBody colliders={false} position={[0, 4, 0]}>
          <primitive object={hamburger.scene} scale={0.25} />
          <CylinderCollider args={[0.5, 1.25]} />
        </RigidBody>

        <RigidBody type="fixed" friction={0.7}>
          <mesh receiveShadow>
            <boxGeometry args={[15, 0.5, 15]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <CuboidCollider args={[7.5, 2, 0.5]} position={[0, 2, 8]} />
          <CuboidCollider args={[7.5, 2, 0.5]} position={[0, 2, -8]} />
          <CuboidCollider args={[0.5, 2, 7.5]} position={[8, 2, 0]} />
          <CuboidCollider args={[0.5, 2, 7.5]} position={[-8, 2, 0]} />
        </RigidBody>

        <InstancedRigidBodies instances={instances}>
          <instancedMesh
            castShadow
            receiveShadow
            args={[undefined, undefined, CUBES_COUNT]}
          >
            <boxGeometry />
            <meshStandardMaterial color="tomato" />
          </instancedMesh>
        </InstancedRigidBodies>
      </PhysicElement>
    </group>
  );
};

export default Physics;
