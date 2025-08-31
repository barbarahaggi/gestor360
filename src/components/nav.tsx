
export function Navbar() {
    return (
      <div className="w-full  bg-black">
        <nav className="flex items-center justify-between px-8 shadow-lg shadow-[#bcbc9d]">
            <div>
                <img className="w-32 h-32" src="gestor-logo.png" alt="logo da empresa" />
            </div>
           
           <div>
            <ul className="flex gap-6 text-white">
                <li className="hover:text-amber-700 hover:font-bold"><a href="#">Inicio</a></li>
                <li className="hover:text-amber-700 hover:font-bold"><a href="#">Sobre</a></li>
                <li className="hover:text-amber-700 hover:font-bold"><a href="#">Planos</a></li>
                <li className="hover:text-amber-700 hover:font-bold"><a href="#">Contato</a></li>
            </ul>
           </div>

        </nav>
      
      </div>  
    )
}