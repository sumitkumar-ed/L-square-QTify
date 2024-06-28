import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ album, isSongsSection }) {
  const songsCount = album.songs && album.songs.length;

  console.log("isSongsSection in Card:", isSongsSection, album.likes);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
      <Tooltip
            title={songsCount !== undefined ? `${songsCount} songs` : ""}
            placement="top"
          >
          {" "}
          {/* Tooltip for songs count */}
          <img
            src={album.image || ""}
            alt={album.title || "No title"}
            className={styles.albumImage}
          />
        </Tooltip>

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
