


import React from 'react';
import Link from "next/link";


//////hacer que cuando haga log out y en sing in desaparezca el boton new rating
const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/Principal', active: true },
    { name: 'Discover', href: '/Discover', active: false },
    { name: 'Ratings', href: '/Raitings', active: false },
    { name: 'Account', href: '/Profile', active: false },
    { name: 'Alta', href: '/Alta', active: false},
    { name: 'Log out', href: '/', active: false},



  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-3 bg-[#111827] text-white w-full border-b border-gray-800">
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <svg
            className="h-8 w-auto text-indigo-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Links de Navegación */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-[#030712] text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Lado Derecho: Acciones y Perfil */}
      <div className="flex items-center space-x-4">
        {/* Botón New Job */}
        <button  href="/ratings" className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-md transition-shadow shadow-md active:scale-95"
        >
          <span className="mr-1.5 text-lg font-bold">+</span>
          New rating
        </button> 

        

        {/* Avatar */}
        <div className="relative group cursor-pointer">
          <img
            className="h-8 w-8 rounded-full ring-2 ring-transparent group-hover:ring-indigo-500 transition-all"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
};






const Footer = () => {
  return (<h1>Footer</h1>)
}

export { 
  Footer , 
  Navbar ,
}
