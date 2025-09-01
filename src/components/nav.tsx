import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-black">
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg shadow-[#bcbc9d]">
        {/* Logo */}
        <div>
          <img
            className="w-24 h-24 md:w-32 md:h-32"
            src="gestor-logo.png"
            alt="logo da empresa"
          />
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-white">
          <li className="hover:text-amber-700 hover:font-bold">
            <a href="#sessao-home">Início</a>
          </li>
          <li className="hover:text-amber-700 hover:font-bold">
            <a href="#sessao-sobre">Sobre</a>
          </li>
          <li className="hover:text-amber-700 hover:font-bold">
            <a href="#sessao-planos">Planos</a>
          </li>
          <li className="hover:text-amber-700 hover:font-bold">
            <a href="#sessao-contato">Contato</a>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:text-amber-700 hover:font-bold">
              <a href="#sessao-home" onClick={() => setMenuOpen(false)}>
                Início
              </a>
            </li>
            <li className="hover:text-amber-700 hover:font-bold">
              <a href="#sessao-sobre" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
            </li>
            <li className="hover:text-amber-700 hover:font-bold">
              <a href="#sessao-planos" onClick={() => setMenuOpen(false)}>
                Planos
              </a>
            </li>
            <li className="hover:text-amber-700 hover:font-bold">
              <a href="#sessao-contato" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
