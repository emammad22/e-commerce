import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { BsBoxSeam, BsBasket } from 'react-icons/bs'
import logo from '../assets/logo.png'
import '../styles/header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <Link to={'/'}>
                            <div className="header-logo">
                                <img src={logo} alt="logo" />
                            </div>
                        </Link>
                        <div className="header-navigation">
                            <ul className="nav level-one">
                                <li className="has-sub-category">
                                    <a href="#" className="clothes">Clothes</a>
                                    <div className="sub-category sublevel-one">
                                        <ul className="level-two">
                                            <li>
                                                <a href="#" className="up-clothes">ÜST GİYİM</a>
                                                <div className="sub-category sublevel-two">
                                                    <ul>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-sub-category">
                                                <a href="#" className="up-clothes">ALT GİYİM</a>
                                                <div className="sub-category sublevel-two">
                                                    <ul>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-sub-category">
                                    <a href="#" className="accessories">Accessories</a>
                                    <div className="sub-category sublevel-one">
                                        <ul className="level-two">
                                            <li>
                                                <a href="#" className="up-clothes">Bijuteri</a>
                                                <div className="sub-category sublevel-two">
                                                    <ul>
                                                        <li><a href="#">Kolye</a></li>
                                                        <li><a href="#">Kupe</a></li>
                                                        <li><a href="#">Saat</a></li>
                                                        <li><a href="#">Bileklik</a></li>
                                                        <li><a href="#">Piercing</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-sub-category">
                                                <a href="#" className="up-clothes">ALT GİYİM</a>
                                                <div className="sub-category sublevel-two">
                                                    <ul>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                        <li><a href="#">TİŞÖRT - 2023 YENİ SEZON</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-sub-category">
                                    <a href="#" className="presents">Presents</a>
                                </li>
                                <li className="has-sub-category">
                                    <a href="#" className="stationary">Stationary</a>
                                </li>
                                <li className="has-sub-category">
                                    <Link to={'/cosmetics'} className="cosmetics">Cosmetics</Link>
                                </li>
                                <li className="has-sub-category">
                                    <a href="#" className="discount">Discounts</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-buttons">
                            <button className="cargo"><BsBoxSeam className='icons' /></button>
                            <button className="search"><AiOutlineSearch className='icons' /></button>
                            <button className="favorite"><MdOutlineFavoriteBorder className='icons' /></button>
                            <button className="user"><AiOutlineUser className='icons' /></button>
                            <button className="basket"><BsBasket className='icons' /></button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
