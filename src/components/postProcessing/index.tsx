import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Glitch,
  Noise,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction, GlitchMode, ToneMappingMode } from "postprocessing";
import { useRef } from "react";

import Drunk from "./Drunk";

const PostProcessing = () => {
  const drunkRef = useRef();

  const { drunk, vignette, glitch, noise, bloom, depthOfField } = useControls({
    drunk: true,
    vignette: false,
    glitch: false,
    noise: false,
    bloom: true,
    depthOfField: false,
  });

  const drunkProps = useControls("Drunk Effect", {
    frequency: { value: 2, min: 1, max: 20 },
    amplitude: { value: 0.1, min: 0, max: 1 },
  });

  return (
    <EffectComposer>
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />

      {drunk ? <Drunk ref={drunkRef} {...drunkProps} /> : <></>}

      {vignette ? (
        <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        />
      ) : (
        <></>
      )}

      {glitch ? (
        <Glitch
          // delay={[0.5, 1]}
          // duration={[0.1, 0.3]}
          // strength={[0.2, 0.4]}
          mode={GlitchMode.DISABLED}
        />
      ) : (
        <></>
      )}

      {noise ? (
        <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} />
      ) : (
        <></>
      )}

      {bloom ? <Bloom mipmapBlur /> : <></>}

      {depthOfField ? (
        <DepthOfField
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={6}
        />
      ) : (
        <></>
      )}
    </EffectComposer>
  );
};

export default PostProcessing;
