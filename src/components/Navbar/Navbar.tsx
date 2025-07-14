import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import blackLogo from "../../assets/black-bg.png";
import whiteLogo from "../../assets/white-bg.png";
import "./Navbar.css"; // ✅ Import the external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getCartItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Programs", path: "/programs" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const cartItemCount = getCartItemCount();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        location.pathname === "/"
          ? isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
          : isScrolled
          ? "bg-white shadow-lg"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-3 items-center py-4 gap-y-2">
          {/* Mobile: Hamburger */}
          <div className="flex items-center lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-1 justify-start">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? "text-black font-bold"
                      : "text-white font-bold"
                    : isScrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.name}
                {location.pathname !== item.path && (
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 transform bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center items-center">
            <Link to="/" className="flex items-center">
              <img
                src={isScrolled ? whiteLogo : blackLogo}
                alt="Yashica Fitness Logo"
                className="h-10 object-contain transition-all duration-300"
              />
            </Link>
          </div>

          {/* Mobile: Cart Icon */}
          <div className="flex items-center justify-end pr-2 lg:hidden flex-shrink-0">
            <Link
              to="/cart"
              className={`p-2 rounded-full relative ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Desktop: Cart icon */}
          <div className="hidden lg:flex items-center justify-end">
            <Link
              to="/cart"
              className={`p-2 rounded-full transition-colors duration-200 relative ${
                isScrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu lg:hidden ${isOpen ? "open" : ""}`}>
        <div className="navbar-mobile-close">
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="navbar-mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="navbar-mobile-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
