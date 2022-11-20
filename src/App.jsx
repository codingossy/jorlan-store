import { useState } from "react";
import Header from "./components/navbar/Header";

// routes
import { Routes, Route } from "react-router-dom";

// components
import Footer from "./components/footer/Footer";
import Home from "./pages/homepage/Home";
import CategoryPage from "./pages/categorypage/CategoryPage";
import CartPage from "./pages/cartpage/CartPage";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
