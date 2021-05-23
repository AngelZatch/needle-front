import { Button, CircularProgress, TextField } from '@material-ui/core';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import { useForm } from 'react-hook-form';

const LoginScreen: React.FC = () => {
  console.log('LOG THE FUCK IN');
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (formData: any) => {
    const response = await fetch('http://localhost:8000', formData);

    if (response.ok) {
      login();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
              <TextField label="Mail" {...register("mail")}/>
        <TextField label="Password" type="password" {...register("password")} />
        <Button type="submit" variant="contained">
          {!loading ? <CircularProgress /> : 'Log in'}
        </Button>
      </form>
    </>
  );
};

export default LoginScreen;
