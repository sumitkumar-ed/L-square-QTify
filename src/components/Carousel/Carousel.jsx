import React, { useState, useEffect } from "react";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";

function Carousel({ albums }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleAlbums, setVisibleAlbums] = useState([]);

  const batchSize = 7; // Number of cards to show in each batch

  useEffect(() => {
    // Initialize visible albums when component mounts
    updateVisibleAlbums();
  }, []);

  useEffect(() => {
    // Update visible albums whenever currentIndex changes
    updateVisibleAlbums();
  }, [currentIndex]);

  const updateVisibleAlbums = () => {
    const start = currentIndex * batchSize;
    const end = start + batchSize;
    setVisibleAlbums(albums.slice(start, end));
  };

  const nextSlide = () => {
    if (currentIndex < Math.ceil(albums.length / batchSize) - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.controls}>
        <div className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
          <LeftArrow />
        </div>
        <div className={styles.albumGrid}>
          {visibleAlbums.map((album) => (
            <div key={album.id} className={styles.album}>
              <Card album={album} />
            </div>
          ))}
        </div>
        <div className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
