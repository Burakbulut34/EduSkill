import React, { useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="premium-header">
      <div className="logo">
        <a href="/"><span>Edu</span>Skill</a>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="/">Anasayfa</a></li>
          
          {/* Açılır kapanır menü */}
             <li> <a href="/tests">Testler</a></li>

          <li><a href="#">Notlar</a></li>
          <li><a href="/about">Hakkımızda</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <div className="search-box">
          <input type="text" placeholder="Ara..." />
          <button><i className="fas fa-search"></i></button>
        </div>

        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </div>
    </header>
  )
}

export default Header;
