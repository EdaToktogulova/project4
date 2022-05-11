import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Food from "./components/food/Food";
import Footer from "./components/footer/Footer";

// Import images
import Craft1 from './assest/craft1.jpg'
import Craft2 from './assest/craft2.jpg'
import Violet1 from './assest/violet1.jpg'
import Violet2 from './assest/violet2.jpg'
import Footer1 from './assest/footer1.jpg'


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Food bgImg1={Craft1} bgImg2={Craft2} />
    <Food bgImg={Violet1} />
    <Food bgImg={Violet2} />
    <Footer />
    </>
  );
}

export default App;
