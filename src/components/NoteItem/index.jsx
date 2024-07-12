/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { LuPlus, LuX } from "react-icons/lu"


export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <LuPlus /> : <LuX />}
      </button>

    </Container>
  )
}
