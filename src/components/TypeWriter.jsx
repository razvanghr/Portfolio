import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: ["Hello!", "Salut!", "Hola!", "Bonjour!"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypeWriter;
