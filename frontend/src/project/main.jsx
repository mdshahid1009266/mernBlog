import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './main.css';
import NotFound from './notfound';
import Navber from './navber';
import Home from './home';
import Post from './post';
import Onepost from "./singelPost"
import Write from './write';
import Login from './Login';
import Contact from './contact';
import { setContext } from "./context/context";

export default () => {
    const { state, dispatch } = setContext();

    return (
        <>
            <BrowserRouter>
                <Navber />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Post />} />
                    <Route path="/posts/:id" element={<Onepost />} />
                    <Route path="/Login" element={state.islogin ? <Home /> : <Login />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Register" element={<NotFound />} />
                    <Route path="/Write" element={<Write />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}



