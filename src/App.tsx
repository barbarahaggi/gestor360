import { Button } from "./ui-components/Button"
import LightRays from "./ui-components/light-rail"

function App() {
  return (
<section className="relative p-45 w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Fundo animado */}
      <div className="absolute inset-0 -z-10">
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
          className="min-h-screen"
        />
      </div>

      <div>
      <div className="text-center ">
       <div> <span className="text-6xl text-gray-300 ">Transforme a gestão <span className="text-amber-700">financeira</span> e </span>
        </div> 
       <span className="text-6xl text-gray-300"> <span className="text-amber-700">administrativa</span> da sua empresa em </span> 
       <br /> <div className="text-center "> <span className="text-6xl text-gray-300"> decisões estratégicas</span> 
       </div> 
       </div> 
       </div>
        <div className="py-6 block align-center justify-center ">
          <div>
           <span className="text-lg text-gray-300">Um sistema com assistente virtual integrado para gerar relatórios, análises, e sugestões que impulsionam seu negócio.</span>
          </div>
        <div className="flex align-center justify-center mt-10 gap-2">
          <Button variant="secondary" asChild className="bg-amber-700 border-0 text-white">
            <a href="#installation">Ver planos</a>
          </Button>

          <Button variant="secondary" asChild className="bg-amber-700 border-0 text-white">
            <a href="#installation">Saiba mais</a>
          </Button>
        </div>
          

            </div>
    </section>
  )
}

export default App
