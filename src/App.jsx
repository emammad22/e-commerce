import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Cosmetics from "./page/Cosmetics";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;