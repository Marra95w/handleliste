import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import './App.css'
import { useState } from 'react'

function App() {
  
  const handleListe = [
    {
      id: 0,
      title: "Melk", 
    },
    {
      id: 1,
      title: "Egg", 
    }
  ]

  const [handleList, setHandleList] = useState(handleListe)
  const [handle, setHandle] = useState()
  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm handle={handle} setHandle={setHandle} setHandleList={setHandleList}/>
      <ShoppingList handleliste={handleList} setHandleList={setHandleList}/>
    </main>

    
  )
}

export default App
