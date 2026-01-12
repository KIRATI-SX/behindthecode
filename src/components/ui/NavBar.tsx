import { ASSETS } from '../../config/assets.config.ts';
import { Button } from '../common/Button';
import { Menu } from 'lucide-react';

function NavBar() {
  return (
    <>
    
    <nav className="flex flex-row items-center justify-between px-4 md:px-28.5 py-6 h-20">
      <a href="#" aria-label="Go to home">
        <img src={ASSETS.logo} alt="logo website" />
      </a>
      <div aria-label="Authentication" className="hidden lg:flex flex-row gap-2">
        <Button>Login</Button>
        <Button variant="primary" children="Sign up"></Button>
      </div>
      <button 
        aria-label="Menu" 
        className="flex lg:hidden items-center justify-center w-10 h-10 rounded-md hover:bg-brown-200 transition-colors"
      >
        <Menu size={24} className="text-brown-600" />
      </button>
    </nav>
    <hr className="color-brown-300-custom" />
    </>
    
  );
};

export default NavBar;