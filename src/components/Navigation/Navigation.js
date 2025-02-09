import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import css from './Navigation.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className={css.header}>
            <div>
              <Typography variant="h6" component="a">
                <NavLink to="/" className={css.link}>
                  Home{' '}
                </NavLink>
              </Typography>
              {isLoggedIn && (
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{ flexGrow: 1 }}
                >
                  <NavLink to="/contacts" className={css.link}>
                    Contacts
                  </NavLink>
                </Typography>
              )}
            </div>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    // <header className={css.header}>
    //   <nav>
    //     <NavLink to="/" className={css.link}>
    //       Home
    //     </NavLink>
    //     {isLoggedIn && (
    //       <NavLink to="/contacts" className={css.link}>
    //         Contacts
    //       </NavLink>
    //     )}
    //   </nav>
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
  );
};

export default Navigation;
