import React from 'react';
import Header from "../components/Header/Header"
import "./css/home.css"
import Section from "../components/Section/Section"
import SectionPlus from "../components/SectionPlus/SectionPlus"
import SectionPlus2 from "../components/SectionPlus2/SectionPlus2"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Header/>
      <Section/>
      <SectionPlus/>
      <SectionPlus2/>
      <Footer/>
    </>
  );
}

export default Home;