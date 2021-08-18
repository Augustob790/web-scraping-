import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Authenticate from '../../domain/usecases/authenticate/Authenticate';
import AxiosPostRequest from '../../infrastructure/api/AxiosPostRequest';
import { AuthParams } from '../../types/AuthParams';
import AxiosCreateuser from '../../infrastructure/api/AxiosCreateUser';
import { RegisterParams } from '../../types/RegisterParams';
import Link from '@material-ui/core/Link';
import imgLogin from './assets/images/logo.png';

function Login(): JSX.Element {
  const axiosPostApi = new AxiosPostRequest();
  const authenticate = new Authenticate(axiosPostApi);
  const history = useHistory();

  const auth = async (event: any) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const senha = event.target.elements.password.value;

    const params: AuthParams = {
      email,
      senha,
    };

    const response = await authenticate.auth(params);
    if (response.body === undefined) {
      alert('Tente mais tarde!');
    } else if (response.body.data.status) {
      history.push('/dashboard/dashboard');
    } else {
      alert(response.body.data.message);
    }
  };

  const register = async (event: any) => {
    event.preventDefault();
    const email = event.target.elements.registerEmail.value;
    const name = event.target.elements.registerName.value;
    const password = event.target.elements.registerPassword.value;
    const confirmPassword = event.target.elements.registerConfirmPassword.value;
    const checkMathPassword = password === confirmPassword;
    if (!checkMathPassword) {
      alert('Passwords are not the same!');
    } else {
      const registerUserParams: RegisterParams = {
        email,
        nome: name,
        senha: password,
      };
      const axiosCreateuser = new AxiosCreateuser();
      const resultCreateuser = await axiosCreateuser.createUser(
        registerUserParams
      );
      if (resultCreateuser.body) {
        alert(resultCreateuser.body.data.message);
      }
    }
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <img src={imgLogin} alt="img login" style={{ width: '200px' }} />
        </Grid>
        <Grid item xs={10} md={4} sm={10}>
          <h2>Entre com o seu E-mail e Senha!!!</h2>
          <form onSubmit={auth}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <div>
                  <TextField
                    required
                    type="text"
                    id="email"
                    label="E-Mail"
                    variant="outlined"
                    autoComplete="current-password"
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <TextField
                    required
                    type="password"
                    id="password"
                    label="Senha"
                    variant="outlined"
                    autoComplete="current-password"
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <Button
                    style={{ height: '45px' }}
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Entrar
                  </Button>
                </div>
              </Grid>
              <Grid container>
                <Grid item>
                  <Link href="/login/singin" variant="body2">
                    {"Ainda não tem uma Conta? Resgistre-se"}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
     
    </div>

    
  );
}

export default Login;