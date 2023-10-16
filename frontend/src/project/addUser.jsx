
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { adduser } from './api';
import './addUser.css'
export default () => {

    const navigate = useNavigate();
    const dummyuser = {
        name: "",
        email: "",
        pass: ""
    }

    const [type, setTupe] = useState('password');
    const [itype, isetTupe] = useState('ri-eye-off-line login__eye');
    const [user, setUser] = useState(dummyuser);

    const passhandel = () => {
        (type == "text") ? setTupe("password") : setTupe("text");
        (itype == "ri-eye-line login__eye") ? isetTupe("ri-eye-off-line login__eye") : isetTupe("ri-eye-line login__eye");
    }
    const handelChenge = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }
    const handelChange = async (e) => {
        e.preventDefault();
        await adduser(user);
		// navigate("/")
    }
    return (
        <div className="adduser">
            <div class="login">
                <form action="" class="login__form">
                    <h1 class="login__title">Login</h1>

                    <div class="login__content">
                        <div class="login__box">
                            <i class="ri-user-3-line login__icon"></i>

                            <div class="login__box-input">
                                <input type="text" name='name' onChange={handelChenge} required class="login__input" placeholder=" " />
                                <label for="" class="login__label">Name</label>
                            </div>
                        </div>
                        <div class="login__box">
                            <i class="ri-mail-line login__icon" ></i>

                            <div class="login__box-input">
                                <input type="email" name='email' onChange={handelChenge} required class="login__input" placeholder=" " />
                                <label for="" class="login__label">Email</label>
                            </div>
                        </div>

                        <div class="login__box">
                            <i class="ri-lock-2-line login__icon"></i>

                            <div class="login__box-input">
                                <input type={type} name='pass' onChange={handelChenge} required class="login__input" id="login-pass" placeholder=" " />
                                <label for="" class="login__label">Password</label>
                                <i onClick={passhandel} className={itype} id="login-eye"></i>
                            </div>
                        </div>
                    </div>

                    {/* <div class="login__check">
                            <div class="login__check-group">
                                <input type="checkbox" class="login__check-input" />
                                    <label for="" class="login__check-label">Remember me</label>
                            </div>

                            <a href="#" class="login__forgot">Forgot Password?</a>
                        </div> */}

                    <button type="submit" onClick={handelChange} class="login__button">Login</button>

                    {/* <p class="login__register">
                            Don't have an account? <a href="#">Register</a>
                        </p> */}
                </form>
            </div>
        </div>
    )
}