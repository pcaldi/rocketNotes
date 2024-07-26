import { useState } from "react";

import { Container, Form, Avatar } from "./styles";

import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar.svg";

import { api } from "../../services/api";

import { LuArrowLeft, LuMail, LuUser, LuLock, LuCamera } from "react-icons/lu";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const [avatar, setAvatar] = useState(user.avatar);
  const [avatarFile, setAvatarFile] = useState(null);

  // URL da imagem do avatar do usuário salva no banco de dados.
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdateProfile() {
    // Crio um objeto passando os dados para atualizar o profile.
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }
    // Atualizo o profile na api.
    await updateProfile({ user, avatarFile });
  }


  function handleChangeAvatar(event) {

    // Pego o arquivo do input file na primeira posição
    const file = event.target.files[0];

    // Coloco o arquivo que o usuário acabou de selecionar
    setAvatarFile(file)

    // Crio um objeto URL para mostrar a imagem que o usuário escolheu.
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <LuArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>

          <img
            src={avatarUrl}
            alt={user.name}
          />
          <label htmlFor="avatar">

            <LuCamera />

            <input
              type="file"
              id="avatar"
              onChange={handleChangeAvatar}
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
