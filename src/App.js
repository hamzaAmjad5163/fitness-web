import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Ui/Hero";
import Exercises from "./components/Ui/Exercises";
import Start from "./components/Ui/Start";
import Pricing from "./components/Ui/Pricing";
import Testimonials from "./components/Ui/Testimonials";
import Footer from "./components/Ui/Footer";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect (()=> {
    Aos.init();
  },[]);
  return <>
    <Header />
    <Hero />
    <Exercises />
    <Start />
    <Pricing />
    <Testimonials />
    <Footer />
  </>
}

export default App;
