import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Cosmetics from "./page/Cosmetics";
import ProductItemDetail from "./components/Products/ProductItemDetail";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/cosmetics/productId" element={<ProductItemDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;