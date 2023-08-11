import sweatshirt from '../assets/sweatshirt-banner.png'
import pantolon from '../assets/pantolon-banner.png'
import shoes from '../assets/shoes-banner.png'
import MainShopCardItem from './MainShopCardItem';


function MainShopCards() {
    return (
        <>
            <div className="main-shop">
                <MainShopCardItem />
                {/* The belowings will be a component as above */}
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