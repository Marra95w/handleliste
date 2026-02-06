export default function ShoppingItem({title, content, id,  setHandleList}) {
    const handleClick = () => {
        setHandleList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }
    return(
        <article className="shopping-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleClick}>Done</button>
        </article>
    )
}