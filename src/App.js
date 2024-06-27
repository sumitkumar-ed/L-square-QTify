import './App.css';
// import HomePage from './pages/HomePage/HomePage'
import NavBar from './components/NavBar/Navbar'
// import { useState } from 'react';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
// import { Outlet } from "react-router-dom";
// import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
  // const [data, setData] = useState{()};
  return (
    <>
      <StyledEngineProvider injectFirst>
        <NavBar />
        {/* <Outlet context={{ data: {topAlbums, newAlbums, songs} }} /> */}
      </StyledEngineProvider>
    </>
  );
}

export default App;
