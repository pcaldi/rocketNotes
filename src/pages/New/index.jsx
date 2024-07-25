import { useState } from "react";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function New() {

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");


  function handleAddLink() {
    // Acesso através do prevState o que tinha antes,
    // e (despejo, utilizando o ...spread operator)
    //tudo o que tinha antes com o novo link
    setLinks(prevState => [...prevState, newLink]);

    // Reseto o input para ser vazio.
    setNewLink("");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input
            placeholder="Título"
            type="text"
          />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => { }}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="#React" />
              <NoteItem isNew placeholder="Novo Marcador" />

            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>

    </Container>
  )
}
