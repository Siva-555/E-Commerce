import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";

const ProductCarousel = ({ products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const ProductsList = (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      // autoPlay
      // autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      swipeable
    >
      {products.map((ele, index) => {
        return (
          <div key={ele.id} className="carousel-product-item">
            <ProductCard productData={ele} />
          </div>
        );
      })}
    </Carousel>
  );

  return <div>{ProductsList}</div>;
};

export default ProductCarousel;
