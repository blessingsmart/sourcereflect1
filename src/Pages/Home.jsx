import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Testimonial />
            <Shop />
            <Contact />
         </>
    );
};

export default Home;