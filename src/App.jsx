import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import AppStore from "./Components/Banner/AppStore";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
// For Animation
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <AppStore />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default App;
