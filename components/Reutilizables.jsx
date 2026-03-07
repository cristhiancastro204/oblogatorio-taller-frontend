


import React from 'react';
import Link from "next/link";


export const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/Principal', active: true },
    { name: 'Discover', href: '/discover', active: false },
    { name: 'Ratings', href: '/raitings', active: false },
    { name: 'Account', href: '/profile', active: false },
    { name: 'Alta', href: '/Alta', active: false },
    { name: 'Log out', href: '/', active: false },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-4 bg-white text-slate-900 w-full border-b border-slate-100 shadow-sm">
      <div className="flex items-center space-x-12">
        {/* Logo Gastronómico */}
        <div className="flex-shrink-0 flex items-center space-x-2">
          <div className="bg-orange-500 p-1.5 rounded-lg">
             <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Colonia<span className="text-orange-500">Eats</span></span>
        </div>

        {/* Links de Navegación */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                item.active
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-slate-500 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Lado Derecho: Acciones y Perfil */}
      <div className="flex items-center space-x-6">
        {/* Botón New Rating (Cambiado a Orange) */}
        <button className="flex items-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full transition-all shadow-md shadow-orange-100 active:scale-95"
        >
          <span className="mr-2 text-lg">+</span>
          New rating
        </button> 

        {/* Avatar con anillo Orange */}
        <div className="relative group cursor-pointer">
          <img
            className="h-9 w-9 rounded-full ring-2 ring-transparent group-hover:ring-orange-500 transition-all object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
