import { useState, useEffect } from 'react';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { FiPlus } from "react-icons/fi";

import { api } from '../../services/api'

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      // Pego a resposta da api pegando as tags
      const response = await api.get('/tags');
      // Guardo os dados em um estado
      setTags(response.data);
    }

    fetchTags();
  }, []);

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

        { // Se existir tags eu pego a tags e percorro utilizando o map.
          tags && tags.map(tag => (
            <li key={tag.id}>
              <ButtonText title={tag.name} />
            </li>
          ))
        }

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

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}
