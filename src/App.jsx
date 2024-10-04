// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "./assets/stylebaru.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Detail from "./pages/detail";
import Error from "./pages/Error";
import Product from "./pages/product/Product";
import DetailProduct from "./pages/DetailProduct";
import Country from "./pages/countries/Country";
import DetailCountry from "./pages/DetailCountry";
import ThemeContext from "./components/context/ThemeContext";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const theme = useState("light");

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/product" element={<Product />} />
            <Route path="/detail_product/:id" element={<DetailProduct />} />
            <Route path="/countries" element={<Country />} />
            <Route path="/detail_countries/:id" element={<DetailCountry />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>

      <div className="">
        {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      </div>
    </>
  );
}

export default App;
