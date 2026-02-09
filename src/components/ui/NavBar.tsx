import { useState } from "react";
import { ASSETS } from "../../config/assets.config.ts";
import { Button } from "../common/Button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="flex flex-row items-center justify-between px-4 md:px-28.5 py-6 h-20 relative">
        <Link to={'/'} aria-label="Go to home">
          <img src={ASSETS.logo} alt="logo website" />
        </Link>
        <div
          aria-label="Authentication"
          className="hidden lg:flex flex-row gap-2"
        >
          <Button>Login</Button>
          <Button variant="primary" children="Sign up"></Button>
        </div>
        <button
          aria-label="Menu"
          onClick={toggleMenu}
          className="flex lg:hidden items-center justify-center w-10 h-10 rounded-md hover:bg-brown-200 transition-colors"
        >
          <Menu size={24} className="text-brown-600" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpenMenu && (
          <div className="absolute top-20 right-0 w-full bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 z-50 lg:hidden border border-brown-200">
            <Button className="w-full justify-center">Login</Button>
            <Button
              variant="primary"
              children="Sign up"
              className="w-full justify-center"
            ></Button>
          </div>
        )}
      </nav>
      <hr className="color-brown-300-custom" />
    </>
  );
}

export default NavBar;
