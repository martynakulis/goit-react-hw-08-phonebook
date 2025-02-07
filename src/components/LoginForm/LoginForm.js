import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <Input placeholder="Email" type="email" name="email" />
      </label>
      <label className={css.label}>
        <Input placeholder="Password" type="password" name="password" />
      </label>
      <Button variant="outlined" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
