
export function Navbar() {
    return (
      <div className="w-full">
        <nav className="flex items-center justify-between px-8 shadow-lg shadow-gray-500">
            <div>
                <img className="w-32 h-32" src="gestor-logo.png" alt="logo da empresa" />
            </div>
           
           <div>
            <ul className="flex gap-6">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Planos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
           </div>

        </nav>
      
      </div>  
    )
}