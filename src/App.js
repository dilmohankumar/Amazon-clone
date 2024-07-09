import React from "react";
import {
  createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from "./api/api";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import Registration from "./pages/Registration";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration/>
      <Footer />
    </div>
  )
}
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path="/" element={<Layout />}> 
        <Route index element={<Home/>} loader={productsData}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/Registration" element={<Registration/>}></Route>
        </Route>
   
  ));
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

