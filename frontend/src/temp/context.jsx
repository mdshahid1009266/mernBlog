import { createContext, useReducer } from "react";
// import products from "./products"

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const I_S = {
        user: null,
        isFeatching: false,
        error: false,
        islogin: false
    }

    const Reducer = (State, Action) => {
        switch (Action.type) {
            case "Loginstart":
                return {
                    user: null,
                    isFeatching: true,
                    error: false,
                    islogin: true
                }
            case "Loginsuccess":
                return {
                    user: Action.userData,
                    isFeatching: false,
                    error: false,
                    islogin: true
                }
            case "Loginfail":
                return {
                    user: null,
                    isFeatching: false,
                    error: true,
                    islogin: false
                }

            default:
                return State;
        }
    }
    const [state, dispatch] = useReducer(Reducer, I_S);
    return (
        <div>
            <Context.Provider value={{ state, dispatch }}>
                {children}
            </Context.Provider>
        </div>
    )
}
export default ContextProvider



