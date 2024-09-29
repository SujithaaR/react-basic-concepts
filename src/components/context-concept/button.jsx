import { useContext } from "react"
import { GlobalContext } from "../context"



function ContextButtonComponent(){
    const {handleClickThemeOnButtonClick}=useContext(GlobalContext);

    return <button onClick={handleClickThemeOnButtonClick}>change theme</button>
}

export default ContextButtonComponent