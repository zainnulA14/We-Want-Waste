import { Link } from "react-router-dom";
import Logo from "/assets/images/logo.svg";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-theme-green text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center flex-nowrap">
          <h1 className="text-lg sm:text-2xl font-bold font-manrope">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Logo" />
              <span className="whitespace-nowrap">We Want Waste</span>
            </Link>
          </h1>
          <p className="ml-4 text-sm hidden md:block font-extralight text-[#fffc]">
            Our recycle sees over 10,000 client every year.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-wastii-green/20 dark:bg-gray-800 text-white hover:bg-wastii-green/30 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link
            to="/quote"
            className="bg-white text-theme-green px-3 md:px-6 py-2 rounded-md font-manrope font-medium hover:bg-green-100 transition-colors whitespace-nowrap"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
