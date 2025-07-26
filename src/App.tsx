// App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import Blog from "./pages/Blog/Blog";
import ProgramDetails from "./components/ProgramDetails/ProgramDetails"; // This component needs updating next
import ScrollToTop from "./utils/ScrollToTop.";
import AllPrograms from "./pages/Programs/Programs";
import BlogDetails from "./components/BlogModal/BlogPost";
import Checkout from "./pages/checkout/checkout";

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
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/programs" element={<AllPrograms />} />
            {/* --- CHANGE THIS LINE --- */}
            <Route path="/program/:slug" element={<ProgramDetails />} />{" "}
            {/* Changed from :id to :slug */}
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
