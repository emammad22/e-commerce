import { MdOutlineFavoriteBorder } from 'react-icons/md'
import showcaseFirst from '../assets/showcase-exp.png'

function ProductCardItem() {
    return (
            <div className="slider-card-item">
                <div className="showcase">
                    <div className="showcase-image-container">
                        <div className="showcase-label-container">
                            Yeni
                        </div>
                        <div className="showcase-favorites">
                            <button className="show-fav-btn"><MdOutlineFavoriteBorder /></button>
                        </div>
                        <div className="showcase-image">
                            <img src={showcaseFirst} alt="Takim" />
                        </div>
                    </div>
                    <div className="showcase-content">
                        <div className="showcase-title">
                            <h3>
                                Siyah Unisex Winx Kolaj Tişört Eşofman Takımı
                            </h3>
                        </div>
                        <div className="showcase-price"><span>449,99 TL</span></div>
                    </div>
                </div>
            </div>
    );
}

export default ProductCardItem;