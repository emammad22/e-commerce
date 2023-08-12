import FilterProducts from '../components/FilterProducts';
import ProductList from '../components/Products/ProductList';
import Pagination from '../components/ReusablePagination/Pagination';
import '../styles/pagination.css'


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
                    <FilterProducts />
                    <ProductList />
                    <Pagination total = {14} perPage={12}/>
                </div>
            </div>
        </>
    );
}

export default Cosmetics;