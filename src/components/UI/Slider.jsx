import React, { useEffect, useState } from "react";
import "../../styles/slider.css";
import { useNavigate } from "react-router-dom"; // React Router kullanıyorsan ekle

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dazvkvpch/image/upload/v1757580819/ogmmateryal-img_iutjvk.jpg",
    title: "Yks 2018-2025 arası çıkmış sorular",
    description: "Yks çıkmış sorular, TYT, AYT ve YDT kitapları yayımlandı.",
    link:"/tests"
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dazvkvpch/image/upload/v1757580818/ogmmateryal-img-2_wsylgm.jpg",
    title: "Dört Dörtlük Konu Testleri",
    description: "Dört Dörtlük Konu Detayları için Lütfen Tıklayın.",
    link:"/tests"
  },

  {
    id: 3,
    image:"https://res.cloudinary.com/dazvkvpch/image/upload/v1757580818/slider-3_ywcohb.jpg",
    title:"Yks Hazırlık",
    description:"Sende yks hazırlığı istiyorsan daha önce sormuş olduğu soruları çözün.",
    link:"/tests"
  }
];

const Slider = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate(); // React Router yönlendirme
  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  //slides`daki id`ye göre linkteki sayfaya yönlendirme
  const handleNavigate = () =>{
    if(slides[page].link){
      navigate(slides[page].link)
    }
  }

  return (
    <section className="slider-container" aria-label="Ana slider">
      <div className="slide">
        <img
          src={slides[page].image}
          alt={slides[page].title}
          className="slide-img"
          draggable={false}
        />
        <div className="slide-text">
          <h2>{slides[page].title}</h2>
          <p>{slides[page].description}</p>
          <div className="cta-row">
            <button
              className="btn cta-btn"
              aria-label={`Sınava Git: ${slides[page].title}`}
              onClick={handleNavigate}
            >
              Sınava Git
            </button>
          </div>
        </div>
      </div>

      {/* Noktalar */}
      <div className="slider-dots" role="tablist" aria-label="Slayt seçimi">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${page === idx ? "active" : ""}`}
            onClick={() => setPage(idx)}
            aria-selected={page === idx}
            role="tab"
            tabIndex={page === idx ? 0 : -1}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
