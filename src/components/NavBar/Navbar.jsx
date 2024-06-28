import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import styles from './Navbar.module.css';

const searchData = (query) => {
  // Implement your search logic here
  // console.log(`Searching for: ${query}`);
};

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
