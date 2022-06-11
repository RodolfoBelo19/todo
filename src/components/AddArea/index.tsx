import { useState, KeyboardEvent } from "react"
import { Container } from "./styles"

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ( { onEnter } : Props) => {

  const [inputText, setInputText] = useState('');

  const handleKeyUp = (eventKeyboard: KeyboardEvent) => {
    if(eventKeyboard.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
    }
  }

  return (
    <Container>
      <span>+</span>
      <input
        type="text" 
        placeholder="Adicionar nova tarefa"
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  )
}