import React, {useState, useEffect} from "react";
import "../../styles/about.css"; // CSS ayrı dosyada
import İmg from "../../assets/Pages-img/eduskill.png"
import db from "../../Firebase/firebase";

import { doc, setDoc, getDocs, collection } from "firebase/firestore";

export default function AboutUs() {
const [visitorCount, setVisitorCount] = useState(0);

useEffect(() => {
    const fetchIPandSave = async () => {
      try {
        // 1. IP Adresini al
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const ip = data.ip;

        // 2. Firestore'da bu IP var mı kontrol et
        const visitorRef = doc(db, "visitors", ip);
        await setDoc(
          visitorRef,
          { createdAt: new Date() },
          { merge: true } // varsa üzerine yazmaz, sadece varlığını garanti eder
        );

        // 3. Toplam ziyaretçi sayısını getir
        const snapshot = await getDocs(collection(db, "visitors"));
        setVisitorCount(snapshot.size);
      } catch (error) {
        console.error("IP alma veya Firebase kaydında hata:", error);
      }
    };

    fetchIPandSave();
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>YKS Test ve Soru Bankaları</h2>
          <p>
            Sınava hazırlık sürecinde öğrencilerin yanında olmak için modern,
            kapsamlı ve güncel testler hazırlıyoruz. YKS odaklı soru
            bankalarımız ile konuları tekrar edebilir, deneme sınavlarımız ile
            gerçek sınav deneyimi yaşayabilirsin.
          </p>

          <div className="about-info">
            <div>
              <h4>Kuruluş</h4>
              <p>05.09.2025</p>
            </div>
            <div>
              <h4>Kullanıcı</h4>
              <p>{visitorCount}+</p>
            </div>
          </div>

          <div className="about-links">
            <a href="/tests" className="btn primary">
              YKS Test ve Soru Bankaları
            </a>
          </div>
        </div>

        <div className="about-image">
          <img
            src={İmg}
            alt="YKS Test Görseli"
          />
        </div>
      </div>
    </section>
  );
}
