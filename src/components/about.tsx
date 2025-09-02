export function Sobre() {
  return (
    <section
      id="sessao-sobre"
      className="bg-black w-full px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-24"
    >
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-amber-700  h-20 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10">
          Sobre o Gestor360°
        </h1>

        {/* Texto de introdução */}
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-center sm:text-left space-x-1.5">
          O Gestor360° nasceu para resolver um dos maiores desafios de microempresas, pequenas empresas e startups: 
          a falta de organização e integração na gestão financeira e administrativa.
          Nosso sistema web centraliza todas as informações do seu negócio em um único painel, permitindo visualização clara e tomada de decisão rápida.
          Através de um Assistente Virtual inteligente, o Gestor360° oferece:
        </p>

        {/* Lista de benefícios */}
        <ul className="text-base sm:text-lg md:text-xl text-white leading-relaxed space-y-4 mt-8 list-none space-x-1.5">
          <li>⇾ Relatórios customizáveis que cruzam dados financeiros, administrativos e de processos.</li>
          <li>⇾ Análises estratégicas para identificar riscos, oportunidades e sugerir melhorias.</li>
          <li>⇾ Ferramentas de gestão integradas, conectando setores, colaboradores, parceiros, produtos e serviços.</li>
          <li>⇾ Acompanhamento em tempo real para ajustar rotas e evitar prejuízos.</li>
        </ul>

        {/* Texto final */}
        <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-center sm:text-left mt-8 sm:mt-10 space-x-1.5">
          Com planos que se adaptam ao porte e às necessidades da sua empresa, 
          o Gestor360° é ideal para quem quer crescer de forma estruturada, reduzir riscos e ganhar competitividade no mercado.
        </p>
      </div>
    </section>
  );
}
