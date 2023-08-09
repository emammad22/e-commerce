import sweatshirt from '../assets/sweatshirt-banner.png'
import pantolon from '../assets/pantolon-banner.png'
import shoes from '../assets/shoes-banner.png'


function MainShopCards() {
    return (
        <>
            <div className="main-shop">
                <div className="clothes-cards sweatshirt">
                    <div className="banner sweatshirt-banner">
                        <a href="#">
                            <div className="banner-img">
                                <img src={sweatshirt} alt="sweatshirt" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="clothes-cards pantolon">
                    <div className="banner pantolon-banner">
                        <a href="#">
                            <div className="banner-img">
                                <img src={pantolon} alt="pantolon" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="clothes-cards shoes">
                    <div className="banner shoes-banner">
                        <a href="#">
                            <div className="banner-img">
                                <img src={shoes} alt="shoes" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainShopCards;