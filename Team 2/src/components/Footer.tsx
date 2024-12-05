import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Oli-4wheel drive</h3>
            <p className="text-gray-400">Gezond eten, waar en wanneer je maar wilt.</p>
            <p className="text-gray-400 mt-4">Met trots gebracht door Team 2</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Menu', 'Locaties', 'Over ons', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>info@oli-4wheeldrive.nl</li>
              <li>+31 (0)20 123 4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Nieuwsbrief</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Je email adres"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full">
                Aanmelden
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Oli-4wheel drive. Alle rechten voorbehouden.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;