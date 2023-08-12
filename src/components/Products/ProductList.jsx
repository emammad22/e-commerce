import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";

function ProductList() {
    return (
        <>
            <div className="product-list">
                <Link to={'/cosmetics/productId'}>
                    <ProductListItem />
                </Link>
                <Link to={'/cosmetics/productId'}>
                    <ProductListItem />
                </Link>
                <Link to={'/cosmetics/productId'}>
                    <ProductListItem />
                </Link>
                <Link to={'/cosmetics/productId'}>
                    <ProductListItem />
                </Link>
                <Link to={'/cosmetics/productId'}>
                    <ProductListItem />
                </Link>
            </div>
        </>
    );
}

export default ProductList;