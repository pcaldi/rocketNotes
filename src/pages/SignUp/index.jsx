import { useState } from "react";

import { Background, Container, Form } from "./styles";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { LuMail, LuLock, LuUser } from "react-icons/lu";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleSignUp() {
    /* console.log({ name, email, password }); */

    // Verifico se o usuário preencheu todos os campos, antes de cadastrar na api.
    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    // Cadastro o usuário na API.
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.error);
        } else {
          alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
        }
      })

  }
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
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          icon={LuMail}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={LuLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <Link to="/">Voltar para o login</Link>

      </Form>



    </Container>
  )
}
