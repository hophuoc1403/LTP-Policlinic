import "./App.css";
import {
  Header,
  Home,
  Footer,
  About,
  Service,
  Contact,
  Doctor,
  ServiceDetail,
  FAQ,
  LoginAndRegister,
  Patient,
  Blog,
  BlogDetail,
  AppointmentPage,
  Cart,
  UserCart,
} from "./components/";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StoreContext } from "./GlobalState";
import Checkout from "./checkout/checkout";

function App() {
  const { setCurrentAccount } = useContext(StoreContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    let data = JSON.parse(localStorage.getItem("user") || "[]");
    console.log(data);

    if (data !== {}) {
      setCurrentAccount({
        account: data,
        state: true,
      });
    }
  }, [setCurrentAccount]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div style={{ marginTop: "48px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctor/:id" element={<Doctor />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<LoginAndRegister />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:id" element={<BlogDetail />} />
            <Route path={"/appointment"} element={<AppointmentPage />} />
            <Route path={"/medicine"} element={<Cart />} />
            <Route path={"/cart"} element={<UserCart />} />
            <Route path={"/checkout"} element={<Checkout />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
