import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti'
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import { FiPhone, FiMail } from 'react-icons/fi'
import logo from '../assets/footerlogo.png'
import '../styles/footer.css'


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-up">
                            <div className="footer-social">
                                <h3 className="social-head">Bizi Takip Edin</h3>
                                <p className="social-info">Sosyal Medya`da <span className="media-name">Ef Butik</span></p>
                                <div className="social-buttons">
                                    <button className="facebook"><TiSocialFacebook className="social-icons" /></button>
                                    <button className="twitter"><TiSocialTwitter className="social-icons" /></button>
                                    <button className="instagram"><FaInstagram className="social-icons" /></button>
                                    <button className="youtube"><FaYoutube className="social-icons" /></button>
                                </div>
                            </div>
                            <div className="footer-subscription">
                                <h3 className="subscription-head">E-Bulten Abonelik</h3>
                                <p className="subscription-info">Kampanya ve yeniliklerden haberdar olmak için abone olun.</p>
                                <form className="subscription-form">
                                    <div className="email-input">
                                        <input type="email" name="email" id="email" placeholder="E-posta Adresiniz" />
                                        <button type="submit" className="click-email"><MdOutlineKeyboardArrowRight className="submit-arrow" /></button>
                                    </div>
                                </form>
                            </div>
                            <div className="footer-apps">
                                <h3 className="app-head">Mobil Uygulamalirimiz</h3>
                                <p className="apps-info">Uygulamalarimiz ile her yerden erisim saglayin !</p>
                                <div className="apps-button">
                                    <button className="app-store"><IoLogoApple className="apps-icons" /></button>
                                    <button className="play-store"><IoLogoGooglePlaystore className="apps-icons" /></button>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="bottom-first">
                                <div className="bottom-logo-info">
                                    <div className="bottom-logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="customer-services">
                                        <h3 className="service-head">Müşteri Hizmetleri</h3>
                                        <div className="customer-phone">
                                            <FiPhone />
                                            <p className="phone">055 310 76 97</p>
                                        </div>
                                        <div className="customer-email">
                                            <FiMail />
                                            <p className="email">mammadoveltun22@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-first-left">
                                    <div className="institutional">
                                        <ul className="institutional-nav">
                                            <h3 className="inst-head">Kurumsal</h3>
                                            <li className="inst-nav-item">Hakkimizda</li>
                                            <li className="inst-nav-item">Banka Hesaplari</li>
                                            <li className="inst-nav-item">Iletisim</li>
                                            <li className="inst-nav-item">Blog</li>
                                            <li className="inst-nav-item">Kargo Takip</li>
                                        </ul>
                                    </div>
                                    <div className="fast-access">
                                        <ul className="access-nav">
                                            <h3 className="access-head">Hizli Erisim</h3>
                                            <li className="access-nav-item">Giyim</li>
                                            <li className="access-nav-item">Aksesuar</li>
                                            <li className="access-nav-item">Canta</li>
                                            <li className="access-nav-item">Hediyelik / Ev</li>
                                            <li className="access-nav-item">Kirtasiye</li>
                                            <li className="access-nav-item">Indirim</li>
                                        </ul>
                                    </div>
                                    <div className="shopping">
                                        <ul className="shop-nav">
                                            <h3 className="shop-head">AlisVeris</h3>
                                            <li className="shop-nav-item">Müşteri Hizmetleri</li>
                                            <li className="shop-nav-item">KVKK Politikası</li>
                                            <li className="shop-nav-item">Kişisel Verilerin İmhası Politikası</li>
                                            <li className="shop-nav-item">Mesafeli Satış Sözleşmesi</li>
                                            <li className="shop-nav-item">Kullanım Koşulları</li>
                                            <li className="shop-nav-item">Ön Bilgilendirme Formu</li>
                                            <li className="shop-nav-item">Kargo ve Teslimat</li>
                                            <li className="shop-nav-item">İade ve Değişim</li>
                                            <li className="shop-nav-item">Veri Sahibi Başvuru Formu</li>
                                        </ul>
                                    </div>
                                    <div className="help">
                                        <ul className="help-nav">
                                            <h3 className="help-head">AlisVeris</h3>
                                            <li className="help-nav-item">Hesabim</li>
                                            <li className="help-nav-item">Siparsilerim</li>
                                            <li className="help-nav-item">AlisVeris Sepeti</li>
                                            <li className="help-nav-item">Favorilerim</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;