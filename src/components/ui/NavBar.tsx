import { ASSETS } from '../../config/assets.config.ts';
import { Button } from '../common/Button';

function NavBar() {
  return (
    <>
    
    <nav className="flex flex-row items-center justify-between px-28.5 py-6 h-20">
      <a href="#" aria-label="Go to home">
        <img src={ASSETS.logo} alt="logo website" />
      </a>
      <div aria-label="Authentication" className="flex flex-row gap-2">
        <Button>Login</Button>
        <Button variant="primary" children="Sign up"></Button>
      </div>
    </nav>
    <hr className="color-brown-300-custom" />
    </>
    
  );
};

export default NavBar;