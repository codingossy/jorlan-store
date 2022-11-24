import { useState } from "react";
import Header from "./components/navbar/Header";

// routes
import { Routes, Route } from "react-router-dom";

// components
import Footer from "./components/footer/Footer";
import Home from "./pages/homepage/Home";
import CategoryPage from "./pages/categorypage/CategoryPage";
import CartPage from "./pages/cartpage/CartPage";
import Faq from "./components/faq/Faq";
import Join from "./components/join/Join";
import SearchCart from "./components/nav/SearchCart";
import Thankyou from "./pages/thankyou/Thankyou";
import ScrollToTop from "./utils/ScrollToTop";
// import Exclusive from "./components/exclusive/Exclusivee";

function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Join />
      <Faq />
      <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
