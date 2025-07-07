import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PlusSquare, List } from 'lucide-react';

const navItems = [
  { href: '/Dashboard', label: 'Dashboard', icon: Home },
  { href: '/NovaFicha', label: 'Nova Ficha', icon: PlusSquare },
  { href: '/Consultas', label: 'Consultas', icon: List },
];

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Sidebar Navigation for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white/5 p-4">
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold text-white">Tio Paulo</h1>
          <p className="text-sm text-emerald-300">Anamnese</p>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-emerald-500/20 text-white font-semibold'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20 z-50">
        <ul className="flex justify-around">
          {navItems.map((item) => (
            <li key={item.href} className="flex-1">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center space-y-1 py-2 transition-colors duration-200 ${
                    isActive ? 'text-emerald-300' : 'text-gray-400'
                  }`
                }
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Add padding to the bottom of the content on mobile to avoid overlap with nav */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}

export default Layout;
