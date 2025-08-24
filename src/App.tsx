import LightRays from "./ui-components/light-rail"

function App() {
  return (
<section className="relative p-45 w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Fundo animado */}
      <div className="absolute inset-0 -z-10">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#fff"
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
       <div> <span className="text-6xl text-gray-300 ">Transforme a gestão financeira e </span>
        </div> 
       <span className="text-6xl text-gray-300"> administrativa da sua empresa em </span> 
       <br /> <div className="text-center "> <span className="text-6xl text-gray-300"> decisões estratégicas</span> 
       </div> 
       </div> 
       </div>
        <div className="py-6 flex align-center justify-center">
           <span className="text-lg text-gray-300">Um sistema com assistente virtual integrado para gerar relatórios, análises, e sugestões que impulsionam seu negócio.</span>
           
            </div>
    </section>
  )
}

export default App
