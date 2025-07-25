import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import Blog from "./pages/Blog/Blog";
import Programs from "./pages/Programs/Programs";
import Cart from "./pages/Cart/Cart";
import ProgramDetails from "./components/ProgramDetails/ProgramDetails";
import ScrollToTop from "./utils/ScrollToTop.";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/program/:id" element={<ProgramDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
