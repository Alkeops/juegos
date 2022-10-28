import "./styles/styles.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Detail } from "./pages/Detail";
import { UserLayout } from "./components/UserLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path={"/category/:categoryId"} element={<Category />} />
            <Route path={"/product/:productId"} element={<Detail />} />
            <Route path="/cart" element={<div>Cart</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
