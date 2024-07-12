import { Container, Form } from "./styles";

import { LuMail, LuLock } from "react-icons/lu";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignIn() {
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

        <a href="#">Criar conta</a>

      </Form>


    </Container>
  )
}
