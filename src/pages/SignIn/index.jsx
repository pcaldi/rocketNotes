import { Link } from "react-router-dom";
import { LuMail, LuLock } from "react-icons/lu";

import { Background, Container, Form } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {

  const data = useAuth();
  console.log(data); // paulo@email.com

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          icon={LuMail}
          type="text"
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={LuLock}
        />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>

      </Form>

      <Background />

    </Container>
  )
}
