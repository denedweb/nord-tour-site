import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar__item', {
      'navbar__item-active': isActive,
    });

  return (
    <nav className="navbar">
      <NavLink to="/" className={activeLink}>
        home
      </NavLink>

      <NavLink to="/tours" className={activeLink}>
        tours
      </NavLink>

      <NavLink to="/about-us" className={activeLink}>
        about us
      </NavLink>

      <NavLink to="/contacts" className={activeLink}>
        contacts
      </NavLink>
    </nav>
  );
};