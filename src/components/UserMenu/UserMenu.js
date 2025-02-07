import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.useremail}>Welcome, {user.email}</p>
      <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
