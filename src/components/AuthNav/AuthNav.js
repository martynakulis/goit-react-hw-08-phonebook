import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';

const AuthNav = () => {
  return (
    <div className={css.logBox}>
      <Button color="inherit">
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
      </Button>
      <Button color="inherit">
        <NavLink to="/login" className={css.link}>
          Log In
        </NavLink>
      </Button>
    </div>
  );
};

export default AuthNav;
