import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default Navigation;
