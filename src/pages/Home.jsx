import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import Slider from '../components/UI/Slider';
import About from '../components/UI/About';
import UserRws from "../components/UI/UserRws";
const Home = () => {
  return (
    <>
    <Helmet title="Anasayfa"/>
    <Slider/>
    <About/>
    <UserRws/>
    </>
  )
}

export default Home