import { Container, Form } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function New() {
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
            <NoteItem value="https://github.com/pcaldi" />
            <NoteItem isNew placeholder="Novo link" />

          </Section >

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
