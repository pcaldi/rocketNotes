import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}
