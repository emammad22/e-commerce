import sweatshirt from '../assets/sweatshirt-banner.png'


function MainShopCardItem() {
    return (
        <div className="clothes-cards sweatshirt">
            <div className="banner sweatshirt-banner">
                <a href="#">
                    <div className="banner-img">
                        <img src={sweatshirt} alt="sweatshirt" />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default MainShopCardItem;