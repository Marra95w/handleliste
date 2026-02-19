import './App.css'

import './style/shoppingcard.scss'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import { useState } from 'react'
import js from '@eslint/js'

function App() {
  
  const handleListe = [
    {
      id: 0,
      title: "Melk", 
      content: 1,
      checked: false,
      // skal det legges inn verdi her for å merke denne som checked?
    },
    {
      id: 1,
      title: "Egg", 
      content: 8,
      checked: true,
    },
  ]

  const [handleList, setHandleList] = useState(handleListe)
  const [handle, setHandle] = useState()
  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm handle={handle} setHandle={setHandle} setHandleList={setHandleList}/> 
      <ShoppingList handleListe={handleList} setHandleList={setHandleList} />
    </main>
    
  )
}

export default App
