import React, { useEffect, useState } from "react";
import { fetchAlbums } from "../../api/api";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel"; // Assuming you have a Carousel component
import styles from "./Section.module.css";

function Section({ title, type }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAlbums(type); // Fetch albums based on type (e.g., 'top' or 'new')
        setAlbums(data);
        setLoaded(true);
      } catch (error) {
        console.error(`Error fetching ${title}: `, error);
      }
    };

    fetchData();
  }, [title, type]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.section}>

      <div className={styles.sectionTopText}>
        <h1 className={styles.firstHeading}>{title}</h1>
        <h1 className={styles.secondHeading} onClick={toggleShowAll}>
          {showAll ? "Collapse" : "Show all"}
        </h1>
      </div>

      {loaded && (
        <>
          {showAll ? (
            <div className={`${styles.albumGrid} ${styles.showGrid}`}>
              {albums.map((album) => (
                <Card key={album.id} album={album} />
              ))}
            </div>
          ) : (
            <Carousel albums={albums} />
          )}
        </>
      )}

      {!loaded && <p>Loading...</p>}

      <div className={styles.sectionBottomLine} />

    </div>
  );
}

export default Section;
