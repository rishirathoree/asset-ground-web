import React from "react";
import "boxicons/css/boxicons.min.css";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Otp from "./Pages/Otp";
import ResetPassword from "./Pages/ResetPassword";
import Signup from "./Pages/Signup";
import AdditionInormation from "./Pages/AdditionInormation";
import Dashboard from "./Pages/Dashboard";
import ProductPage from "./Pages/ProductPage";
import Account from "./Pages/Account";
import Sell from "./Pages/Sell";
import Howitworks from "./Pages/Howitworks";
import Pricing from "./Pages/Pricing";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import PageNotFound from "./Pages/PageNotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Marketplace" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Howitworks" element={<Howitworks />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/digitCodePage" element={<Otp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Additioninformation" element={<AdditionInormation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
