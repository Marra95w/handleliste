import ShoppingItem from "../components/ShoppingItem"
export default function ShoppingList({handleListe, setHandleList}){
  return(
    <section className="flex-r">
        <h3>Handleliste</h3>
        {handleListe.map(item => <ShoppingItem key={item.id} id={item.id} title={item.title} setHandleList={setHandleList}/>)}
    </section>
  )
}