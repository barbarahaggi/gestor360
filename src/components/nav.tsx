import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full relative bg-black  md:fixed z-50 top-0 left-0 "   >
      <nav className="flex items-center justify-between px-6 py-4 h-16 shadow-md shadow-[#d0d0c5c3] z-50">
        {/* Logo */}
        <div>
          <img
            className="w-23 h-23 md:w-29 md:h-29"
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
        <ul className="hidden md:flex gap-8 text-white  ">
          <li className="hover:text-blue-200 hover:font-medium">
            <a href="#sessao-home">Início</a>
          </li>
          <li className="hover:text-blue-200 hover:font-medium">
            <a href="#sessao-sobre">Sobre</a>
          </li>
          <li className="hover:text-blue-200 hover:font-medium">
            <a href="#sessao-planos">Planos</a>
          </li>
          <li className="hover:text-blue-200 hover:font-medium">
            <a href="#sessao-contato">Contato</a>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white ">
          <ul className="flex flex-col items-center gap-4 py-4 ">
            <li className="hover:text-blue-200 hover:font-bold">
              <a href="#sessao-home" onClick={() => setMenuOpen(false)}>
                Início
              </a>
            </li>
            <li className="hover:text-blue-200 hover:font-bold">
              <a href="#sessao-sobre" onClick={() => setMenuOpen(false)}>
                Sobre
              </a>
            </li>
            <li className="hover:text-blue-200 hover:font-bold">
              <a href="#sessao-planos" onClick={() => setMenuOpen(false)}>
                Planos
              </a>
            </li>
            <li className="hover:text-blue-200 hover:font-bold">
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
