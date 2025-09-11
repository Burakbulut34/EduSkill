import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Sol - Logo & Hakkımızda */}
        <div className="footer-left">
          <h2 className="logo">🌐 SiteLogo</h2>
          <p>
            Sitemiz hakkında kısa bir açıklama buraya gelecek. 
            Modern, hızlı ve kullanıcı dostu web deneyimleri sunuyoruz.
          </p>
        </div>

        {/* Orta - Sosyal Medya */}
        <div className="footer-center">
          <h3>Bizi Takip Edin</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-center">
            <h3>Sayfa Bağlantıları</h3>
            <ul className="footer-links">
                <li><a href="/home">Anasayfa</a></li>
                <li><a href="/tests">Testler</a></li>
                <li><a href="#">Notlar</a></li>
                <li><a href="/about">Hakkımızda</a></li>
                <li><a href="#">İletişim</a></li>
            </ul>
        </div>


        {/* Sağ - İletişim */}
        <div className="footer-right">
          <h3>Bize Ulaşın</h3>
          <div className="contact-form">
            <input type="email" placeholder="Email adresiniz" />
            <button>Gönder</button>
          </div>
        </div>

      </div>

      {/* Alt Bar */}
      <div className="footer-bottom">
        © 2025 Site Adı. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
