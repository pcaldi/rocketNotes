import { Background, Container, Form } from "./styles";

import { LuMail, LuLock, LuUser } from "react-icons/lu";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>

      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          icon={LuUser}
          type="text"
        />

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

        <a href="#">Voltar para o login</a>

      </Form>



    </Container>
  )
}
