import { Button } from "../ui-components/Button";

export function Contato() {
    return (
        <section
            id="sessao-contato"
            className="bg-black w-full px-4 py-16 md:py-20 lg:py-24 flex flex-col items-center"
        >
            {/* Título */}
            <h1 className="text-amber-700 text-3xl md:text-4xl font-bold mb-6 text-center">
                Entre em contato
            </h1>

            {/* Texto explicativo */}
            <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
                Informe seu email e um de nossos especialistas entrará em contato com você.
            </p>

            {/* Formulário */}
            <form className="w-full max-w-lg flex flex-col gap-4">
                {/* Campo de email */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
                    <label htmlFor="email" className="text-amber-700 font-bold">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="rounded-xl w-full sm:w-96 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
                        placeholder="email@email.com"
                    />
              

                {/* Botão */}
                <div className="flex justify-center">
                    <Button className="w-full sm:w-48 bg-amber-700 text-white hover:bg-gray-200 hover:text-amber-700 transition-all">
                        Enviar
                    </Button>
                </div>

                  </div>
            </form>
        </section>
    );
}
