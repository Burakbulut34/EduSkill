import React, { useEffect, useState } from "react";
import "../../styles/slider.css";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dazvkvpch/image/upload/v1756990273/osym-img_ujimsf.jpg",
    title: "Ösym Sınav Testleri",
    description: "Responsive ve şık bir slider sayfası.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dazvkvpch/image/upload/v1756990274/osym-img3_ibftct.jpg",
    title: "3 Adım TYT-AYT Sınav Testleri",
    description: "3 Adım sınav testleri ile kendinizi geliştirebilrsiniz.",
  },
];

const Slider = () => {
  const [page, setPage] = useState(0);

  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
