import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Categorykids from "./pages/Categorykids";
import Categorywomens from "./pages/Categorywomens";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import bannermens from "./assets/bannermens.png";
import bannerkids from "./assets/bannerkids.png";
import bannerwomens from "./assets/bannerwomens.png";
import banneroffer from "./assets/banneroffer.png"; 
function App() {
  return (
    <>
      <main className="text-tertiary bg-primaryGrey">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/mens"
              element={<Category category={"men"} banner={bannermens} />}
            />
            <Route
              path="/womens"
              element={
                <Categorywomens category={"women"} banner={bannerwomens} />
              }
            />
            <Route
              path="/kids"
              element={<Categorykids category={"kid"} banner={bannerkids} />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart-page" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
