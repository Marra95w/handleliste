
import { useState } from "react";
export default function ShoppingItem({title, content, id,  setHandleList}) {
    //sjekker om checked er true eller false, og setter det til false som default
    const [checked] = useState(false)
    const [amount, setAmount] = useState("") //endre antall varer i handleliste
    //oppdaterer stete når en input endres
      const handleChange = (e) => {
        const {name, value} = e.target 
        
      setHandle((prev) => ({
            ...prev, 
            [name]
            : value
        })) 
        setAmount(value) // oppdaterer tallet i inputen
    }
    const handleClick = () => {
        setHandleList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return(
        <main>
            <section>
                <article className="shopping-card">
                    <h3>
                        <input type="checkbox"
                        id="checkbox"
                        checked={checked}
                        onChange={handleClick}
                        />
                        {title}
                    </h3>
                        {content}
                    <input 
                        id="content" 
                        type="number" 
                        placeholder="0"  
                        min="1" 
                        max="99" 
                        value={amount}
                        onChange={handleChange}
                        />
                
                </article>
            </section>    
        </main>
    )
}
{/* ===============================
    fikk inspirasjon fra stackoverflow til sjekklisten for å leggetil checked, men fikk denne til å fungere
    med antall varer i handleliste checked
    https://stackoverflow.com/questions/39120007/setting-a-checkbox-check-property-in-react
===================================*/}
