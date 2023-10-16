import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "./reducer"

const Context = createContext();

const ContextProvider = ({ children }) => {
    const I_S = {
        
        user: JSON.parse(localStorage.getItem("user")) || null,
        isFeatching: false,
        error: false,
        islogin: JSON.parse(localStorage.getItem("user")) ? true :false
    }

    const [state, dispatch] = useReducer(Reducer, I_S);
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user));
    },state.user)
    return (
        <div>
            <Context.Provider value={{ state, dispatch }}>
                {children}
            </Context.Provider>
        </div>
    )
}
export const setContext=()=>useContext(Context)
export default ContextProvider



