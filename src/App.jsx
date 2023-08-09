import Footer from "./components/Footer";
import Header from "./components/Header";
import MainShopCards from "./components/MainShopCards";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import ProductCardItem from "./components/ProductCardItem";
import { useRef, useState } from "react";


function App() {

  const sliderCardsRef = useRef(null);
  const productCardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false)
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);


  function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    sliderCardsRef.current.scrollLeft = prevScrollLeft - positionDiff;
  }

  function handleMouseDown(e) {
    setIsDragging(true);
    setPrevPageX(e.pageX)
    setPrevScrollLeft(sliderCardsRef.current.scrollLeft)
    sliderCardsRef.current.classList.add('dragging')
  }

  function handleMouseUp() {
    setIsDragging(false);
    sliderCardsRef.current.classList.remove('dragging')
  }

  function swipeLeft(e) {
    sliderCardsRef.current.scrollLeft = sliderCardsRef.current.scrollLeft - e.currentTarget.nextElementSibling.children[0].clientWidth
  }

  function swipeRight(e) {
    sliderCardsRef.current.scrollLeft = sliderCardsRef.current.scrollLeft + e.currentTarget.previousElementSibling.children[0].clientWidth
  }


  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <div className="main-inner">
            <div className="main-slider">
              <div className="slider-head"><h3>Yeni Gelenler</h3></div>
              <div className="slider-container">
                <button className="slider-left" onClick={swipeLeft} ><AiOutlineLeft /></button>
                <div
                  id="slider-cards"
                  className="slider-cards"
                  ref={sliderCardsRef}
                  onMouseMove={handleMouseMove}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <ProductCardItem ref={productCardRef} />
                  <ProductCardItem />
                  <ProductCardItem />
                  <ProductCardItem />
                  <ProductCardItem />
                  <ProductCardItem />
                  <ProductCardItem />
                </div>
                <button className="slider-right" onClick={swipeRight}><AiOutlineRight /></button>
              </div>
            </div>
            <MainShopCards />
          </div>
        </div>
      </main>

      <Footer />

    </>
  );
}

export default App;