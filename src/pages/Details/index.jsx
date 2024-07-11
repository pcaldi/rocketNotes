import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://github.com/pcaldi</a>
          </li>
          <li>
            <a href="#">https://github.com/pcaldi</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">


      </Section>


      <Button title="Voltar" />
    </Container>
  )
}
