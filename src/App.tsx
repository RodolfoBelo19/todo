import { useState } from 'react';
import { Item } from './types/item';
import { 
  Container,
  Area,
  Header,
} from './App.styles';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {

  const [list, setList] = useState<Item[]>([])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length++, 
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>Lista de compras</Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => <ListItem key={index} item={item} />)}
      </Area>
    </Container>
  )
}

export default App