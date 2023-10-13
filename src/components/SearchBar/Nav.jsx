import React from 'react';
import Logo from '../../img/orli-avatar.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import {Link, NavLink} from 'react-router-dom'

function Nav({onSearch2, match}) {
  
  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.link}>
        <div className={styles.logo}>
          <img className={styles.imgNav} src={Logo} alt="orli-avatar" width="100" height="100" />
          <strong><span className={styles.pagtitle}>What's the weather like today?</span></strong>
        </div>
      </Link>

      <div className={styles.navegacion}>
        <button type="button">
          <NavLink activeClassName={styles.linkactive} className={`${styles.link} ${styles.home} ${styles.linkNav}`} exact to='/'>
            <strong>HOME</strong>
          </NavLink>
        </button>

        <button type="button">
          <NavLink activeClassName={styles.linkactive} className={`${styles.linkNav} ${styles.link}`} exact to='/about'>
            <strong>ABOUT</strong>
          </NavLink>
        </button>
      </div>

      <SearchBar onSearch2={onSearch2} match={match} />
    </nav>
  );
};

export default Nav;




