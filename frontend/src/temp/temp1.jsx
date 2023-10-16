import { useContext } from "react";
import { Context } from "./context";

export default function temp1() {
    const { state,dispatch } = useContext(Context);
    const hc = ()=>{
        dispatch({
            type:"Loginstart"
        })
    }
    return (
        <>
            {
                state.islogin?<h1>Registrt</h1>:<h1>Login</h1>
            }
            <button onClick={hc}>++</button>
        </>
    )
}