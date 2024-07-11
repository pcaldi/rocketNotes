import { Container } from "./styles";


// eslint-disable-next-line react/prop-types
export function Section({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}
