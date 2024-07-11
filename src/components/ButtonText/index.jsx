import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, isactive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isactive.toString()} {...rest}>
      {title}
    </Container>
  )
}
