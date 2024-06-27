import axios from 'axios';

const API_BASE_URL = "https://qtify-backend-labs.crio.do/albums";

export const fetchAlbums = async (type) => {
  try {
    console.log(type);
    const response = await axios.get(`${API_BASE_URL}/${type}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type} albums: `, error);
    throw error;
  }
};
