export default function ShoppingItem({title, content, is, setHandleList}) {
    
    return(
        <article className="todo-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleClick}>Done</button>
            {/* legge til trykk via  */}
        </article>
    )
}