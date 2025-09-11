import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import Slider from '../components/UI/Slider';
import About from '../components/UI/About';
import UserRws from "../components/UI/UserRws";
import Note from "../components/UI/NotesView";
import Contact from "../pages/Contact";
const Home = () => {
  return (
    <>
    <Helmet title="Anasayfa"/>
    <Slider/>
    <About/>
    <UserRws/>
    <Note/>
    <Contact/>
    </>
  )
}

export default Home