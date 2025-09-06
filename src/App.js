import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import About from "./components/UI/About";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tests" element={<Tests/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
