import "../styles/contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Helmet from "../components/Helmet/Helmet";
export default function Contact({withHelmet = false}) {
  return (
    <div className="contact-page">
      {withHelmet && (<Helmet title="İletişim"/>)}
      <div className="contact-container">

        {/* Sol - İletişim Formu */}
        <div className="contact-form">
          <h2>Bizimle İletişime Geçin</h2>
          <p className="form-subtitle">
            Sorularınızı için formu doldurun, size en kısa sürede geri dönüş yapalım.
          </p>
          <form action="https://formcarry.com/s/vSxkDqPgX_T" method="post">
            <input type="text" placeholder="Adınız Soyadınız" required  name="Ad - Soyad"/>
            <input type="email" placeholder="Email adresiniz" required name="Email"/>
            <input type="text" placeholder="Konu" required name="Konu"/>
            <textarea placeholder="Mesajınız" rows="6" required name="Mesaj"></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>

        {/* Sağ - Bilgiler + Harita */}
        <div className="contact-info">
          <h2>İletişim Bilgileri</h2>
          <ul>
            <li><FaMapMarkerAlt /> İstanbul, Türkiye</li>
            <li><FaPhoneAlt /> +90 555 123 45 67</li>
            <li><FaEnvelope /> burakbltu2007@gmail.com</li>
          </ul>

          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2833488821!2d28.97953031569618!3d41.01513797930043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e51a6f9c23%3A0x23f9b8795f3e8c77!2sIstanbul!5e0!3m2!1str!2str!4v1693846800000!5m2!1str!2str"
              width="100%"
              height="380"
              style={{ border: "0", borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}