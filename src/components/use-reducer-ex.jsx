import { useReducer } from "react";

const initialState={
    showTextFlag:false,
    changeTextStyleFlag:false,
}

const HIDE_TEXT='HIDE_TEXT';
const SHOW_TEXT='SHOW_TEXT';
const CHANGE_TEXT_STYLE='CHANGE_TEXT_STYLE';

function reducer(state,action){

    switch(action.type){
        case "HIDE_TEXT":
            console.log(state,action);
            return state;
        case "SHOW_TEXT":
            return state;
        case "CHANGE_TEXT_STYLE":
            return state;
        default:
            return state;
    }


}

function UseReducerExample(){

    const [state,dispatch]=useReducer(reducer,initialState)

        console.log(state);
        
    return <div>
        <h1>Use Reducer Example</h1>
        <button onClick={()=>dispatch({type:HIDE_TEXT})}>HIDE TEXT</button>
        <button onClick={()=>dispatch({type:SHOW_TEXT})}>SHOW TEXT</button>
        <button onClick={()=>dispatch({type:CHANGE_TEXT_STYLE})}>Toggle TEXT STYLES</button>
    </div>
}

export default UseReducerExample;