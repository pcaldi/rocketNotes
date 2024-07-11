import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

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

        <Tag title="React" />
        <Tag title="React Native" />
        <Tag title="Node" />

      </Section>


      <Button title="Voltar" />
    </Container>
  )
}
