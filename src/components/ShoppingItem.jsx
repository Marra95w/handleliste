export default function ShoppingItem({title, content, id,  setHandleList}) {
      const handleChange = (e) => {
        const {name, value} = e.target 
        
        setHandle((prev) => ({
            ...prev, [name]: value
        })) 
    }
    const handleClick = () => {
        setHandleList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return(
        <main>
            {/* endre denne slik at slettknappen fjerne varene isteden for "checkbox" */}
            {/* <button>Slett vare</button> */}
            <section>
                <article className="shopping-card">
                    <h3>
                        <input type="checkbox" onClick={handleClick}/>
                        {/* får ikke en checked verdi i handlelisten - css? */}
                        {title}
                    </h3>
                    <p>
                    {content}
                    <input id="content" type="number" placeholder="0"  min="1" max="99" value={content} onChange={(e) => 
                        setHandleList(prev => prev.map(item => item.id === id 
                        ? {...item, content: e.target.value} : item))}/>
                        {/* legge input verden i et annet komponent? -> får ikke lagret input verdi tall lagt til handlelisten */}
                    </p>
                </article>
            </section>    
        </main>
    )
}

//  <article className="shopping-card">
//             <h3>{title}</h3>
//             <p>{content}</p>
//             <button onClick={handleClick}></button>
//             <input type="checkbox" />
//         </article>

