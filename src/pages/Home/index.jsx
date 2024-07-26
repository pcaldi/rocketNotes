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
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);


  function handleTagSelected(tagName) {
    // Verifico se o usuário clicar em "Todas", desmarco todas as outras tags;
    if (tagName === "all") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {

      setTagsSelected(prevState => [...prevState, tagName]);
    }


  }

  useEffect(() => {
    async function fetchTags() {
      // Pego a resposta da api pegando as tags
      const response = await api.get('/tags');
      // Guardo os dados em um estado
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }
    fetchNotes();


  }, [search, tagsSelected])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isactive={tagsSelected.length == 0} // Verifico se o array está vazio
          />
        </li>

        { // Se existir ( && ) tags eu pego a tags e percorro utilizando o map.
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isactive={tagsSelected.includes(tag.name)} //Verifico se a tag existir, ele vai retornar verdadeiro se existir e falso caso não exista.
              />
            </li>
          ))
        }

      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}  // Quando o input é alterado, ele vai atualizar o valor de search.
        />

      </Search>

      <Content>

        <Section title="Minhas notas">

          {
            notes.map(note => (
              <Note
                key={note.id}
                data={note}
              />
            ))
          }

        </Section>

      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  )
}
