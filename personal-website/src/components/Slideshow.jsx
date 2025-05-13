import React, { useState } from "react";
import "../styles/slideshow.css";
import nextIcon from "../assets/next.png";
import prevIcon from "../assets/backArrow.png";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        <button
          className="slideshow__nav slideshow__nav--prev"
          onClick={prevSlide}
        >
          <img src={prevIcon} alt="Previous" className="slideshow__icon" />
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow__image"
          onClick={openModal}
        />
        <button
          className="slideshow__nav slideshow__nav--next"
          onClick={nextSlide}
        >
          <img src={nextIcon} alt="Next" className="slideshow__icon" />
        </button>
      </div>

      {isModalOpen && (
        <div className="slideshow__modal" onClick={closeModal}>
          <div className="slideshow__modal-content">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="slideshow__modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
