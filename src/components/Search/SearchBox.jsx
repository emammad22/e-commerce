import { MdClose } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBox({ handleSearchBox, active }) {
    return (
        <>
            <div className={`search-container ${active ? 'active-search' : null}`}>
                <div className="search-box">
                    <form className="search-form">
                        <label htmlFor="search"><AiOutlineSearch className='search-icon' style={{ color: "#fff" }} /></label>
                        <input type="text" name="search" id="search" placeholder='Ürün veya kategori arayın...' />
                    </form>
                    <div className="close-search">
                        <button className="search-btn" onClick={handleSearchBox}>
                            <MdClose />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBox;