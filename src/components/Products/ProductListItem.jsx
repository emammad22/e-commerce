import productImage from '../../assets/productExample.png'
import { MdFavoriteBorder } from 'react-icons/md'


function ProductListItem() {
    return (
        <>
            <div className="product-showcase">
                <div className="product-list-item">
                    <div className="product-image-container">
                        <div className="product-favorites">
                            <button className="product-add-favorite"><MdFavoriteBorder /></button>
                        </div>
                        <div className="product-image">
                            <img src={productImage} alt="product" />
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="product-title">
                            <p className="title">Renkli Makyaj Süngeri</p>
                        </div>
                        <div className="product-price">
                            <p className="prod-price">39,99 TL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListItem;