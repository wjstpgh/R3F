import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    bottomBun: THREE.Mesh;
    meat: THREE.Mesh;
    cheese: THREE.Mesh;
    topBun: THREE.Mesh;
  };
  materials: {
    BunMaterial: THREE.MeshStandardMaterial;
    SteakMaterial: THREE.MeshStandardMaterial;
    CheeseMaterial: THREE.MeshStandardMaterial;
  };
};
