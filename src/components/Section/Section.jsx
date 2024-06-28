import React, { useEffect, useState } from "react";
import { fetchAlbums, fetchSongs } from "../../api/api";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Section({ title, type, isSongsSection }) {
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [genre, setGenre] = useState("all");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isSongsSection) {
          const songsData = await fetchSongs(genre);
          setItems(songsData);
        } else {
          const albumsData = await fetchAlbums(type);
          setItems(albumsData);
        }
        setLoaded(true);
      } catch (error) {
        console.error(`Error fetching ${title}: `, error);
      }
    };

    const fetchGenres = async () => {
      if (isSongsSection) {
        try {
          const response = await fetch('https://qtify-backend-labs.crio.do/genres');
          const genresData = await response.json();
          if (Array.isArray(genresData.data)) {
            setGenres([{ key: "all", label: "All" }, ...genresData.data]);
          } else {
            console.error('Genres data is not an array');
          }
        } catch (error) {
          console.error('Error fetching genres:', error);
        }
      }
    };

    fetchData();
    fetchGenres();
  }, [title, type, genre, isSongsSection]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleTabChange = (event, newGenre) => {
    setGenre(newGenre);
  };

// Inside the Section component
const filteredItems = genre === "all" ? items : items.filter(song => song.genre.key === genre);

  return (
    <div className={styles.section}>
      <div className={styles.sectionTopText}>
        <h1 className={styles.firstHeading}>{title}</h1>
        {!isSongsSection && (
          <h1 className={styles.secondHeading} onClick={toggleShowAll}>
            {showAll ? "Collapse" : "Show all"}
          </h1>
        )}
      </div>

      {isSongsSection && (
        <Tabs
          value={genre}
          onChange={handleTabChange}
          aria-label="genre tabs"
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: "green",
            },
          }}
          className={styles.genreTabs}
        >
          {genres.map((g) => (
            <Tab
              key={g.key}
              label={g.label}
              value={g.key}
              sx={{
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
                "&.Mui-selected": {
                  color: "white", // Active tab font color
                },
              }}
              className={styles.genreTab}
            />
          ))}
        </Tabs>
      )}

      {loaded && (
        <>
          {showAll && !isSongsSection ? (
            <div className={`${styles.albumGrid} ${styles.showGrid}`}>
              {filteredItems.map((item) => (
                <Card key={item.id} album={item} isSongsSection={isSongsSection} />
              ))}
            </div>
          ) : (
            <Carousel albums={filteredItems} />
          )}
        </>
      )}

      {!loaded && <p>Loading...</p>}

      <div className={styles.sectionBottomLine} />
    </div>
  );
}

export default Section;
