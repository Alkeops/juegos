import "./styles/styles.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Detail } from "./pages/Detail";
import { UserLayout } from "./components/UserLayout";
import { CartProvider } from "./context/cartContext";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path={"/category/:categoryId"} element={<Category />} />
              <Route path={"/product/:productId"} element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
