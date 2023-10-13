import React from 'react';
import Logo from '../../img/orli-avatar.png'
import SearchBar from './SearchBar.jsx';
import './Nav.module.css';
import {Link, NavLink} from 'react-router-dom'

function Nav({onSearch2, match}) {
  const navClass = 'nav';
  const linkClass = 'link';
  const logoClass = 'logo';
  const imgNavClass = 'imgNav';
  const pagtitleClass = 'pagtitle';
  const navegacionClass = 'navegacion';
  const linkactiveClass = 'linkactive';
  const homeClass = 'home';
  const linkNavClass = 'linkNavClass';

  return (
    <nav className={navClass}>
      <Link to='/' className={linkClass}>
      <div className={logoClass}>
      <img className={imgNavClass} src={Logo} alt="orli-avatar" width="50" height="50" />
          <strong><span className={pagtitleClass}>¿Cómo se encuentra el clima en el día de hoy?</span></strong>
        </div>
      </Link>

      <div className={navegacionClass}>
        <NavLink activeClassName={linkactiveClass}  className={`${linkClass} ${homeClass} ${linkNavClass}`} exact to='/'>
        <strong><span>INICIO</span></strong>
        </NavLink>
        
        <NavLink activeClassName={linkactiveClass}  className={`${linkNavClass} ${linkClass}`} exact to='/about'>
        <strong><span>ABOUT</span></strong>
        </NavLink>
      </div>

      <SearchBar onSearch2={onSearch2} match={match} />
    </nav>
  );
};

export default Nav;


