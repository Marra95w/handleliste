
export default function AddForm({handle, setHandle, setHandleList}){
    //funksjon tar imot prps fra forelder
    const handleChange = (e) => {
        //henter name og value fra input feltet
        const {name, value} = e.target 
        
        //oppdaterer handle state ved å bruke setHandle funksjonen, 
        // og beholder tidligere verdier i handle objektet ved å spre det ut med ...prev, 
        // og oppdaterer den spesifikke egenskapen som samsvarer med name til den nye value
        setHandle((prev) => ({
            ...prev, 
            [name]: value
        })) 
    }
   


    const handleClick = (e) => {
        e.preventDefault()
            const uniqId = crypto.randomUUID()
            setHandleList((prev) => ([...prev, {id:uniqId,...handle}]))
            console.log(handle)
    }
     
    return(
        <main>   
            <form className="handleform" onSubmit={handleClick}>
                {/* denne printer ut html input felt */}
                <label htmlFor="handleliste-tittel" id="vare">Vare
                    <input 
                        type="text" 
                        name="title"  
                        placeholder="Egg..." 
                        onChange={handleChange} /> 
                    </label>
                {/* legg til antall varer  */}
                <label 
                    htmlFor="handleNumber" 
                    id="antall"
                >Antall 
                    <input 
                    type="number" 
                    placeholder="0"  
                    name="content"
                    min="0" 
                    max="99" 
                    onChange={handleChange}
                    /> 
                    <button>Legg til vare</button>
                </label>
            </form>
       </main> 
    ) 
  
}
            
            {/* ================================
            ====================================
            Fikk inspirasjon til et input felt med å øke antall produkter fra ChatGPT
            https://chatgpt.com/share/6985fdfb-3500-8008-8b40-9ec202e27e66 
            ===================================
            ===================================*/}
    

