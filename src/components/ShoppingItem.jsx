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
            <section>
                <article className="shopping-card">
                    <h3>
                        <input type="checkbox" onClick={handleClick}/>
                        {title}
                    </h3>
                    <p>{content}</p>
                    <input id="content" type="number" placeholder="0"  min="1" max="99" onChange={handleChange}/>
                
                </article>
            </section>    
        </main>
    )
}



