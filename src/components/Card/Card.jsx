import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ album, isSongsSection }) {
  console.log("isSongsSection in Card:", isSongsSection, album.likes);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img
          src={album.image || ""}
          alt={album.title || "No title"}
          className={styles.albumImage}
        />
        <div className={styles.albumInfo}>
          {/* <Chip
            label={
              isSongsSection
                ? `${album.likes || 0} likes`
                : `${album.follows || 0} follows`
            }
            className={styles.chip}
          /> */}

          <Chip
            key={album.id}
            label={
              album.likes !== undefined
                ? `${album.likes} likes`
                : `${album.follows} follows`
            }
            className={styles.chip}
          />
        </div>
      </div>
      <p className={styles.albumTitle}>{album.title}</p>
    </div>
  );
}

export default Card;
