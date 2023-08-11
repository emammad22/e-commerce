import '../styles/cosmetics.css'

function Cosmetics() {
    return (
        <>
            <div className="cosmetics-container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb-list">
                        <li className="item-list">Home</li>
                        <li className="item-list">Cosmetics</li>
                    </ol>
                </div>
                <div className="category-head">
                    <h1 className="category-name">Cosmetics</h1>
                </div>
                <div className="category-inner">
                    <div className="filter-products">
                        <form className="filter">
                            <div className="inStock">
                                <input type="checkbox" name="stock" id="stock" />
                                <label htmlFor="stock">In Stock</label>
                            </div>
                            <div className="number-of-products">67 products in total</div>
                            <div className="filter-by-price">
                                <select name="price" id="price" className="price">
                                    <option value>Urunleri sirala</option>
                                    <option value="asc">Artan fiyat</option>
                                    <option value="desc">Azalan fiyat</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="product-list">
                        All of products is here
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cosmetics;