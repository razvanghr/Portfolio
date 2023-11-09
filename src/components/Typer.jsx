import React from "react";

import Typewriter from "typewriter-effect";

function Typer() {
  return (
    <Typewriter
      options={{
        strings: ["Hello!", "Salut!", "Hola!"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Typer;
