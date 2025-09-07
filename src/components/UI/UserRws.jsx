import React, { useEffect, useRef, useState } from "react";
import "../../styles/userrws.css";

export default function Testimonials({ reviews, autoAdvanceMs = 5000 }) {
  const sample = [
    {
      id: 1,
      name: "Ayşe Y.",
      title: "Frontend Developer",
      text: "Bu uygulama hayatımı kolaylaştırdı — temiz, hızlı ve responsive! Kesinlikle tavsiye ederim.",
      rating: 5,
    },
    {
      id: 2,
      name: "Murat K.",
      title: "Ürün Yöneticisi",
      text: "Tasarım hoş, kullanımı rahat. Auto-advance özelliği güzel ama istediğimde manuel geçiş de yapabiliyorum.",
      rating: 4,
    },
    {
      id: 3,
      name: "Elif A.",
      title: "Grafik Tasarımcı",
      text: "Mobilde de gayet iyi çalışıyor. Kaydırma hissi ve animasyonlar modern duruyor.",
      rating: 5,
    },
  ];

  const data = reviews && reviews.length ? reviews : sample;
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const advance = (dir = 1) => {
    const el = containerRef.current;
    if (!el) return;
    const pageWidth = el.clientWidth;
    let next = el.scrollLeft + dir * pageWidth;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (next > maxScroll + 1) next = 0;
    if (next < -1) next = maxScroll;

    el.scrollTo({ left: next, behavior: "smooth" });
    const pageIndex = Math.round(next / pageWidth);
    setCurrentPage(((pageIndex % data.length) + data.length) % data.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => advance(1), autoAdvanceMs);
    return () => clearInterval(timerRef.current);
  }, [autoAdvanceMs, data.length]);

  return (
    <section className="reviews-section">
      <div className="reviews-wrapper">
        <div className="reviews-header">
          <h2>Kullanıcı Yorumları</h2>
          <div className="nav-buttons">
            <button onClick={() => advance(-1)}>‹</button>
            <button onClick={() => advance(1)}>›</button>
          </div>
        </div>

        <div ref={containerRef} className="reviews-container">
          {data.map((r) => (
            <article key={r.id} className="review-card">
              <div className="review-top">
                <div className="avatar">{r.name[0]}</div>
                <div>
                  <h3>{r.name}</h3>
                  <p className="title">{r.title}</p>
                  <p className="text">{r.text}</p>
                </div>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < r.rating ? "★" : "☆"}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="dots">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = containerRef.current;
                const pageWidth = el.clientWidth;
                el.scrollTo({ left: i * pageWidth, behavior: "smooth" });
                setCurrentPage(i);
              }}
              className={i === currentPage ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
