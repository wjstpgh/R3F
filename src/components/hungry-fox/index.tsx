import { Suspense } from "react";

import PlaceHolder from "../placeholder";
import Hamburger from "./hamberger";
import Fox from "./fox";

const HungryFox = () => {
  return (
    <>
      <Suspense fallback={<PlaceHolder position-y={0.5} scale={[2, 3, 2]} />}>
        <Hamburger scale={0.2} />
      </Suspense>

      <Fox />
    </>
  );
};

export default HungryFox;
