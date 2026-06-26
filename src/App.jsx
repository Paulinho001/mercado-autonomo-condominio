import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowWorks from "./components/HowWorks";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>

      <Header />
      <Hero />
      <Benefits />
      <HowWorks />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;