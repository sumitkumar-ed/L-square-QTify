import axios from "axios";

const ALBUMS_API_BASE_URL = "https://qtify-backend-labs.crio.do/albums";
const SONGS_API_BASE_URL = "https://qtify-backend-labs.crio.do/songs";

export const fetchAlbums = async (type) => {
  try {
    const response = await axios.get(`${ALBUMS_API_BASE_URL}/${type}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type} albums: `, error);
    throw error;
  }
};

export const fetchSongs = async (genre) => {
  try {
    const response = await axios.get(`${SONGS_API_BASE_URL}`);
    const data = response.data;
    const filteredSongs =
      genre === "all" ? data : data.filter((song) => song.genre.key === genre);
    return filteredSongs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};
