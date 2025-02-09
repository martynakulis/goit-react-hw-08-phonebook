import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(form.elements.name.value);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        {/* <input
          placeholder="Username"
          type="text"
          name="name"
          className={css.input}
        ></input> */}
        <Input placeholder="Username" type="text" name="name" />
      </label>
      <label className={css.label}>
        {/* <input
          placeholder="Email"
          type="email"
          name="email"
          className={css.input}
        ></input> */}
        <Input placeholder="Email" type="email" name="email" />
      </label>
      <label className={css.label}>
        {/* <input
          placeholder="Password"
          type="password"
          name="password"
          className={css.input}
        ></input> */}
        <Input placeholder="Password" type="password" name="password" />
      </label>
      <Button variant="outlined" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
