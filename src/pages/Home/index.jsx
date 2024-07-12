import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { FiPlus } from "react-icons/fi";


import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isactive />
        </li>

        <li>
          <ButtonText title="Frontend" />
        </li>

        <li>
          <ButtonText title="Node" />
        </li>

        <li>
          <ButtonText title="React" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />

      </Search>

      <Content>

        <Section title="Minhas notas">

          <Note data={{
            title: 'React',
            tags: [{
              id: '1',
              name: 'React'
            },
            {
              id: '2',
              name: 'React Native'
            }]
          }} />

        </Section>

      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}
