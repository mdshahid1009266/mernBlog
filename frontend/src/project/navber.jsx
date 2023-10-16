import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./navber.css";
import { setContext } from "./context/context";



export default () => {
    const { state,dispatch} = setContext();
    // const userName= state && ;

    return (
        <nav>
            <div className="mainnav">
                <div className="frist">
                    <Link className="link" to="/"><h1>SDblogs<span>.</span></h1></Link>
                </div>
                <div className="mid">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="./Cover">About</Link></li>
                        <li><Link to="./posts">Posts</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to={state.islogin ? "/Write" : "/login"}>Write</Link></li>
                    </ul>
                </div>
                <div className="last">
                    <input type="text" placeholder="Search" />
                    {
                        state.islogin ? <li><Link to="/" onClick={()=>dispatch({type:"Logout"})}>Logout</Link></li> :<li><Link to="/login">Login</Link></li>
                    }
                    {
                        state.islogin && <li><Link to={`/${state.user.name}`}>{state.user.name.replace(" ","")}</Link></li> 
                    }
                </div>
            </div>
        </nav>
    )
}