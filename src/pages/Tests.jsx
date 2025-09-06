import React, { useState } from 'react'
import "../styles/tests.css";
import Helmet from "../components/Helmet/Helmet";
import { FaBookOpen } from "react-icons/fa6";
const Tests = () => {
     const [activeIndex, setActiveIndex] = useState(null);

     const verdig = [
    {
      subject: "Sayısal Testler",
      links: [
        { text: "OGMMATERYAL TYT Sayısal Test ", href: "https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/3adim/tyt/matematik/index.html" },
        { text: "OGMMATERYAL AYT Sayısal Test", href: "https://ogmmateryal.eba.gov.tr/ogm-test/book/68b4ebc4eb079be0e770922c" }
      ]
    },
    {
      subject: "Sözel Testler",
      links: [
        { text: "OGMMATERYAL TYT Sözel Test", href: "https://hayaihl.meb.k12.tr/meb_iys_dosyalar/46/01/745835/dosyalar/2025_03/06175120_tyt.pdf" },
        { text: "OGMMATERYAL AYT Sözel Test", href: "https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/3adim/ayt/ayt-soz/index.html" }
      ]
    },
    {
      subject:"Eşit Ağırlık",
      links: [  
        {text: "EA AYT Test", href:"https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/3adim/ayt/ayt-ea/index.html"}
      ]
    },
        {
      subject:"Yabancı Dil Testi",
      links: [  
        {text: "YDT Test", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/672e1146e01d7d5a278abeb5"}
      ]
    },
    {
      subject:"3 Adım Ayt Soru Bankası",
      links: [  
        {text: "3 Adım AYT Biyoloji Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c633a1ee84e884dba34c3c"},
        {text: "3 Adım AYT Coğrafya Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c638eeee84e884dba34c96"},
        {text: "3 Adım AYT Fizik Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c633fbee84e884dba34c40"},
        {text: "3 Adım AYT Felsefe Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c63953ee84e884dba34c9a"},
        {text: "3 Adım AYT Kimya Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c6375eee84e884dba34c8e"},
        {text: "3 Adım AYT Matematik Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c63893ee84e884dba34c92"},
        {text: "3 Adım AYT Tarih Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c63a1fee84e884dba34c9e"},
        {text: "3 Adım AYT Türk Dili ve Edebiyatı Soru Bankası", href:"https://ogmmateryal.eba.gov.tr/ogm-test/book/66c63ca2ee84e884dba34ca2"},
      ]
    },
  ];

  

   const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <div style={{ maxWidth: 600, margin: "20px auto", border: "1px solid #ccc", borderRadius: 4 }}>
    <Helmet title= "Testler"/>
      {verdig.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ddd" }}>
          <button 
            onClick={() => toggleAccordion(index)} 
            style={{ 
              width: "100%", 
              padding: "12px 16px", 
              textAlign: "left", 
              background: "#ddd", 
              border: "none", 
              outline: "none", 
              cursor: "pointer", 
              fontWeight: "bold", 
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            aria-expanded={activeIndex === index}
          >
            {item.subject}
            <span>{activeIndex === index ? "▲" : "▼"}</span>
          </button>
          {activeIndex === index && (
            <ul style={{ listStyle: "none", padding: "10px 20px", margin: 0, background: "#eee" }}>
              {item.links.map((link, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  <a href={link.href} style={{ textDecoration: "none", color: "#333" }} target='_blank'>
                    <FaBookOpen />  {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>

  )
}

export default Tests