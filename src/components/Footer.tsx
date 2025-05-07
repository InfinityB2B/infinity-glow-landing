
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-infinity-950 pt-12 pb-8">
      <div className="infinity-container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-white to-infinity-300">
                INFINITY
              </span>
              <span className="ml-1 text-sm font-normal text-infinity-300">Consultoria</span>
            </a>
            
            <p className="text-gray-400 mt-4">
              Transformando empresas de dentro para fora, com metodologia própria e resultados comprovados.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "bg-infinity-900/50 hover:bg-infinity-800/70 transition-colors"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <a 
                href="#" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "bg-infinity-900/50 hover:bg-infinity-800/70 transition-colors"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              
              <a 
                href="#" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  "bg-infinity-900/50 hover:bg-infinity-800/70 transition-colors"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Menu Rápido</h4>
            <ul className="space-y-2">
              <li><a href="#solucao" className="text-gray-400 hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#metodologia" className="text-gray-400 hover:text-white transition-colors">Metodologia</a></li>
              <li><a href="#resultados" className="text-gray-400 hover:text-white transition-colors">Resultados</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-infinity-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 9999-9999
              </li>
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-infinity-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@infinityconsultoria.com.br
              </li>
              <li className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-infinity-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                São Paulo/SP - Brasil
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-infinity-800/30 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} INFINITY Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
