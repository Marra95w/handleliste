export default function ShoppingItem({title, content, id,  setHandleList}) {
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
                        {title}
                    </h3>
                    <p>
                    {content}
                    <input id="content" type="number" placeholder=""  min="1" max="99" />
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

