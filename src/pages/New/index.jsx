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

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");


  function handleAddLink() {
    // Acesso através do prevState o que tinha antes,
    // e (despejo, utilizando o ...spread operator)
    //tudo o que tinha antes com o novo link
    setLinks(prevState => [...prevState, newLink]);

    // Reseto o input para ser vazio.
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    // Utilizo o prevState para buscar o já foi passado
    // Depois faço um filter nos links que não são iguais ao link selecionado.
    setLinks(prevState => prevState.filter(link => link !== deleted));

  }

  function handleAddTag() {
    // Acesso através do prevState o que tinha antes,
    // e (despejo, utilizando o ...spread operator)
    //tudo o que tinha antes com o novo link
    setTags(prevState => [...prevState, newTag]);

    // Reseto o input para ser vazio.
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    // Utilizo o prevState para buscar o já foi passado
    // Depois faço um filter nas tags que não são iguais a tag selecionada.
    setTags(prevState => prevState.filter(tag => tag !== deleted));
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
                  key={String(index)}  //A key por padrão tem que ser em formato de string
                  value={link}
                  //Quando tenho que passar um parâmetro, sempre utilizo arrow function.
                  onClick={() => handleRemoveLink(link)}
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
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)} //A key por padrão tem que ser em formato de string
                    value={tag}
                    //Quando tenho que passar um parâmetro, sempre utilizo arrow function.
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Novo Marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />

            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>

    </Container>
  )
}
