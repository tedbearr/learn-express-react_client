import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NavbarLayout from "./components/NavbarLayout";
import NotFoundPage from "./page/NotFoundPage";
import NavbarLayoutAdmin from "./components/NavbarLayoutAdmin";
import HomeAdmin from "./page/admin/HomeAdmin";
import NotFoundPageAdmin from "./page/admin/NotFoundPageAdmin";
import Login from "./page/Login";
import LoginAdmin from "./page/admin/LoginAdmin";
import { authContext } from "./helper/Context";
import { useState } from "react";
import ProductAdmin from "./page/admin/ProductAdmin";

function App() {
  const [expanded, setIsExpanded] = useState(false);
  return (
    <>
      <authContext.Provider value={{ expanded, setIsExpanded }}>
        <Router>
          <Routes>
            <Route element={<NavbarLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
            <Route element={<NavbarLayoutAdmin />}>
              <Route path="/admin" element={<HomeAdmin />}></Route>
              <Route path="/admin/product" element={<ProductAdmin />}></Route>
            </Route>
            <Route path="/admin/*" element={<NotFoundPageAdmin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/login" element={<LoginAdmin />} />
          </Routes>
        </Router>
      </authContext.Provider>
    </>
  );
}

export default App;
