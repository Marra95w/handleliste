import ShoppingItem from "../components/ShoppingItem"
export default function ShoppingList({handleListe, setHandleList}){
  return(
    <section className="flex-r">
      
      {handleListe.map((item) => 
      <ShoppingItem 
        key={item.id} 
        title={item.title} 
        content={item.content}
        checked={item.id === 0}
        value={item.content}
        id={item.id} 
        setHandleList={setHandleList}/>)}
    </section>
  )
}
{/* ===============================
     fikk inspirasjon fra stackoverflow til sjekklisten for å leggetil checked, men fikk denne til å fungere
     med content i handleliste checked
     https://stackoverflow.com/questions/39120007/setting-a-checkbox-check-property-in-react
 ===================================*/}