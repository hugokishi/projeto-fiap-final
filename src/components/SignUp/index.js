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
} from "./SignUpElements";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  async function handleUserRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post("/users", {
        name,
        email,
        password,
        role: 1,
      });

      if (response.status === 500) {
        return alert("Erro ao cadastrar!");
      }

      history.push("/signin");
      
    } catch (err) {
      alert("Não foi possivel realizar seu cadastro, tente novamente!");
    }
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">HomeTherapy</Icon>
          <FormContent>
            <Form onSubmit={handleUserRegister}>
              <FormH1>Faça o seu cadastro:</FormH1>
              <FormLabel>Nome</FormLabel>
              <FormInput
                type="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormButton type="submit">Enviar</FormButton>
              <TextLink to="/signin">Já possui uma conta? Login</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
