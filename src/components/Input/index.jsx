import { Container } from "./styles";


// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {/*Verificação passando o - && - operador que só vai mostrar o ícone caso ele existir, caso contrário não. */}
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}
