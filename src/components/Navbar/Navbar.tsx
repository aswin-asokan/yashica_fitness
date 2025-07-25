import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import whiteLogo from "../../assets/white-bg.png";
import CartDrawer from "../../pages/Cart/Cart";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  const navItems = [
    { name: "PROGRAMS", path: "/programs" },
    { name: "BLOG", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full max-w-full overflow-x-hidden z-50 bg-white shadow-md transition-all duration-300">
        {/* Top Banner */}
        <div className="w-full bg-[#1d1d1c] text-white text-center text-[11px] py-3 font-bold tracking-wide">
          <div className="inline-flex gap-3">
            <span>ONE</span>
            <span>DAY</span>
            <span>OR</span>
            <span>DAY</span>
            <span>ONE</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-3 items-center py-6 gap-y-2">
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden flex-shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-black"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-x-4 justify-start">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative px-3 py-2 text-sm font-bold ${
                    location.pathname === item.path
                      ? "text-black"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.name}
                  {location.pathname !== item.path && (
                    <span className="absolute left-0 -bottom-[38px] h-0.5 w-full scale-x-0 transform bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <div className="flex justify-center items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={whiteLogo}
                  alt="Yashica Fitness Logo"
                  className="h-16 max-w-full object-contain transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop Cart Icon */}
            <div className="hidden lg:flex items-center justify-end">
              <button
                className="p-2 rounded-full relative text-black hover:text-black"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Cart Icon */}
            <div className="flex lg:hidden items-center justify-end">
              <button
                className="p-2 rounded-full relative text-black hover:text-black"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Side Drawer Menu */}
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

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
