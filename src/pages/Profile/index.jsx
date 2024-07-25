import { useState } from "react";

import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import { LuArrowLeft, LuMail, LuUser, LuLock, LuCamera } from "react-icons/lu"

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();



  async function handleUpdateProfile() {
    // Crio um objeto passando os dados para atualizar o profile.
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }
    // Atualizo o profile na api.
    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <LuArrowLeft />
        </Link>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={LuMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={LuLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={LuLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          title="Salvar"
          onClick={handleUpdateProfile}
        />
      </Form>
    </Container>
  )
}
