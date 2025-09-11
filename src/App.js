import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import About from "./components/UI/About";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import Notes from "./components/UI/NotesView" ;

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home withHelmet= {true}/>}/>
        <Route path="/tests" element={<Tests withHelmet= {true}/>}/>
        <Route path="/about" element={<About withHelmet= {true}/>}/>
        <Route path="/contact" element={<Contact withHelmet= {true}/>}/>
        <Route path="/notes" element={<Notes withHelmet= {true}/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
