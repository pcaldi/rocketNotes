import { Container, Form, Avatar } from "./styles";

import { LuArrowLeft, LuMail, LuUser, LuLock, LuCamera } from "react-icons/lu"

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
        <Avatar>

          <img
            src="https://github.com/pcaldi.png" alt="Foto do usuário"
          />
          <label htmlFor="avatar">

            <LuCamera />

            <input
              type="file"
              id="avatar"
            />

          </label>

        </Avatar>
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
