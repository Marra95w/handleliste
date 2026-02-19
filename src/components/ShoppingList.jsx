import ShoppingItem from "../components/ShoppingItem"
export default function ShoppingList({handleListe, setHandleList}){
  return(
    <section className="flex-r">
      
      {handleListe.map((item) => 
      <ShoppingItem 
        key={item.id} 
        title={item.title} 
        content={item.content}
        id={item.id} 
        setHandleList={setHandleList}/>)}
    </section>
  )
}