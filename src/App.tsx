import { Button } from "./ui-components/Button";
import LightRays from "./ui-components/light-rail";

function App() {
  return (
    <section
      id="sessao-home"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-32"
    >
      {/* Fundo animado */}
      <div className="absolute inset-0 -z-10 bg-black">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#adad85"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="h-full"
        />
      </div>

      {/* Texto principal */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-300 leading-snug">
          Transforme a gestão{" "}
          <span className="text-amber-700">financeira</span> e{" "}
          <span className="text-amber-700">administrativa</span> da sua empresa
          em <br />
          <span className="text-gray-300">decisões estratégicas</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
          Um sistema com assistente virtual integrado para gerar relatórios,
          análises e sugestões que impulsionam seu negócio.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            variant="secondary"
            asChild
            className="bg-amber-700 border-0 text-white hover:text-amber-700 w-full sm:w-auto"
          >
            <a href="#sessao-planos">Ver planos</a>
          </Button>

          <Button
            variant="secondary"
            asChild
            className="bg-amber-700 border-0 text-white hover:text-amber-700 w-full sm:w-auto"
          >
            <a href="#sessao-sobre">Saiba mais</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default App;
