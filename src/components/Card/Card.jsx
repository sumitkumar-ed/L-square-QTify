import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ album }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img
          src={album.image}
          alt={album.title}
          className={styles.albumImage}
        />
        <div className={styles.albumInfo}>
          <Chip label={`${album.follows} follows`} className={styles.chip} />
        </div>
      </div>
      <p className={styles.albumTitle}>{album.title}</p>
    </div>
  );
}

export default Card;
