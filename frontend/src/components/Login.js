import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const navigate = useNavigate();
    sessionStorage.clear();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();
        let user = { email, password };
        try {
            await axios.post("http://localhost:9000/signin", user)
                .then((res) => {
                    console.log(res)
                    alert('Signed In')
                    navigate("/dashboard")
                    sessionStorage.setItem("Token", res.data);
                })
                .catch((err) => console.log(err + "please register first"))

            setEmail("");
            setPassword("");
        } catch (err) {
            console.log(err)
        }
    }

    const handleClickSignUp = () => {
        navigate("/signUp")
    }

    return (
        <div>
            <div className="row">
                <h1>Login Page</h1>
            </div>
            <div className="row">
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                <div className="col-sm-10">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" id="useremail" />
                </div>
            </div>
            <div className="row">
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                <div className="col-sm-10">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" id="userpassword" />
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={handleLogin} >Login</button>
            </div>
            <br />
            <br />
            <div>
                <h4>If you don't have account then register first</h4>
            </div>
            <div>
                <button type="button" className="btn btn-primary btn-sm" onClick={handleClickSignUp} >Click here</button>
            </div>
        </div>
    )
}
