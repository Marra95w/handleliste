import "..style/form.scss"
export default function AddForm({handle, setHandle, setHandleList}){
    const handleChange = (e) => {
        const {name, value} = e.target 
        setHandle 
    }

    const handleClick = (e) =>
        e.preventDefault()
    const uniqId = crypto.randomUUID()
    setHandleList
    return(
        <form className="todoform" onSumbit={handleClick}>
            <label htmlFor="handleliste-tittel">Handleliste</label>
            <input type="text" name="title" id="shoppingtitle" placeholder="Egg..." onChange={handleChange} />
            
            <label htmlFor="antall">Antall</label>
            <button id="up"></button>
            <input type="number" value="qty" min="1" onChange={handleChange}/>
            <button onClick={increase}>+</button>
        </form>
    )
}
