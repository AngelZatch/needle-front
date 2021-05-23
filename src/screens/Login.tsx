import { Button, CircularProgress, TextField } from '@material-ui/core';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

interface LoginInput {
  mail: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const data = await response.json();
      login({ id: data.id, nickname: data.nickname });
      history.replace('/');
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <TextField label="Mail" {...register('mail')} />
        <TextField label="Password" type="password" {...register('password')} />
        <Button type="submit" variant="contained">
          {loading ? <CircularProgress /> : 'Log in'}
        </Button>
      </form>
    </>
  );
};

export default LoginScreen;
