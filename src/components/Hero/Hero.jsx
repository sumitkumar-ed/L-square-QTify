import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";

function Hero({ texts, imageSrc, imageAlt, imageWidth }) {
  return (
    <div className={styles.hero}>
      <div>
        {texts.map((text, index) => (
          <h1 key={index}>{text}</h1>
        ))}
      </div>
      <div>
        <img src={imageSrc} width={imageWidth} alt={imageAlt} />
      </div>
    </div>
  );
}

Hero.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.number,
};

Hero.defaultProps = {
  imageAlt: "hero image",
  imageWidth: 212,
};

export default Hero;
