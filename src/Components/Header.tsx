import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : '')}
        end
      >
        Produtos
      </NavLink>

      <NavLink
        to="contato"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
