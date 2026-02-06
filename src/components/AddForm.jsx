import "../style/layout.scss"
export default function AddForm({handle, setHandle, setHandleList}){
    const handleChange = (e) => {
        const {name, value} = e.target 
        setHandle 
    }

    const handleClick = (e) =>
        e.preventDefault()
    const uniqId = crypto.randomUUID()
    
    
    
    return(
        <form className="handleform" onSumbit={handleClick}>
            <label htmlFor="handleliste-tittel">Vare</label>
            <input type="text" name="title" id="shoppingtitle" placeholder="Egg..." onChange={handleChange} />
            {/* <textarea name="content" id="handlecontent"></textarea> */}
            
            <label htmlFor="handleNumber">Antall</label>
            <input type="number" value="qty" min="1" onChange={handleChange}/>
            

            {/* ===============================
            ===================================
            Fikk litt inspirasjon i denne videoen til å lage en formel om hvordan en øker verdien når en trykker på opp og ned, fortsatt inder arbeid
            
            
            // const handleChange = ({ minValue = 0, maxValue = 100}) => {
            //     const [count, setCount] = useState()
            
        
            // const handleCounter = () => {
            //     if (count > maxValue) {
            //         setCount((prev) => prev + 1)
            //     }
            // }

            https://www.google.com/search?q=increase+a+number+in+a+button+react+file&rlz=1C5CHFA_
            enNO1176NO1176&oq=increase+a+number+in+a+button+react+file&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRi
            gAdIBCTI5NzY1ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:3911d7e2,vid:s8qMfDPGKxo,st:0
            ===================================
            ===================================*/}
            
            
            {/* ================================
            ====================================
            Fikk inspirasjon til et input felt med å øke antall produkter fra ChatGPT
            https://chatgpt.com/share/6985fdfb-3500-8008-8b40-9ec202e27e66 
            ===================================
            ===================================*/}
        </form>
    )
}
