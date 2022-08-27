import './App.css';
import { useState } from 'react'
import AddForm from './components/AddForm'
import Item from './components/Item'

const initialList = [
  {title: 'item 1', status: 'incomplete'},
  {title: 'item 2', status: 'incomplete'},
  {title: 'item 3', status: 'incomplete'}
]

function App() {

  const [list, setList] = useState([])



  return (
    <main style={{width: '100%',maxWidth:'800px',marginInline:'auto'}}>
      <AddForm list={list} setList = {setList} />
      <ul>
        {list.map((item, index) => <Item key={index} 
                                          list={list} 
                                          setList={setList} 
                                          title={item.title} 
                                          status={item.status} 
                                          index={index}
                                    />
          )
        }
      </ul>

    </main>
  );
}

export default App;
