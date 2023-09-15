import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Shop from "../components/Shop";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Shop />
            <Contact />
         </>
    );
};

export default Home;