function FilterProducts() {
    return (
        <>
            <div className="filter-products">
                <form className="filter">
                    <div className="left-filter-wrapper">
                        <div className="inStock">
                            <input type="checkbox" name="stock" id="stock" />
                            <label htmlFor="stock">In Stock</label>
                        </div>
                        <div className="number-of-products">
                            <p className="num">67 products in total</p>
                        </div>
                    </div>
                    <div className="filter-by-price">
                        <select name="price" id="price" className="price">
                            <option className='price-option' value>Urunleri sirala</option>
                            <option className='price-option' value="asc">Artan fiyat</option>
                            <option className='price-option' value="desc">Azalan fiyat</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FilterProducts;