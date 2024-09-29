// create a context

import { createContext,useState } from "react";

export const GlobalContext=createContext(null);

// create the global state that receive component as a childern

function GlobalState({children}){

    const [theme,setTheme]=useState('light');

    function handleClickThemeOnButtonClick(){
       setTheme(theme==="light"?"dark":"light")
    }
    return <GlobalContext.Provider value={{theme,handleClickThemeOnButtonClick}}>{children}</GlobalContext.Provider>
}


export default GlobalState;