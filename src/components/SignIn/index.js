import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  TextLink,
} from "./SigninElements";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  async function handleUserLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/login", { email, password });

      if (response.status === 401) {
        return alert("Email ou senha invalidos!");
      }

      localStorage.setItem("userInfo", JSON.stringify(response.data));
      history.push("/");
    } catch (err) {
      alert("Não foi possivel realizar seu login, tente novamente!");
    }
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">HomeTherapy</Icon>
          <FormContent>
            <Form onSubmit={handleUserLogin}>
              <FormH1>Login</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Senha</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormButton type="submit">Entrar</FormButton>
              <TextLink to="/forgot">Esqueceu a senha?</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
