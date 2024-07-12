import { Container, Form } from "./styles";

import { LuArrowLeft, LuMail, LuUser, LuLock } from "react-icons/lu"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <LuArrowLeft />
        </a>
      </header>

      <Form>
        <Input
          placeholder="Name"
          type="text"
          icon={LuUser}
          disabled
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={LuMail}
          disabled
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={LuLock}

        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={LuLock}

        />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
