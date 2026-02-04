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

        </form>
    )
}
