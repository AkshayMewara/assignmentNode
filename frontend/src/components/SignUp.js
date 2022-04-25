import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const SignUp = () => {

    const navigate = useNavigate();
    sessionStorage.clear();


    const handleClick = () => {
        navigate("/");
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            let user = { name, email, password };

            await axios.post("http://localhost:9000/signup", user)
                .then((res) => {
                    console.log(res);
                    setName("");
                    setEmail("");
                    setPassword("");
                    // handleClick();
                    navigate("/");

                })
        } catch (err) {
            console.log(err + "user already exists");
        }
    }

    return (
        <div>
            <div className="row">
                <h1>Sign Up</h1>
                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Name</label>
                <div className="col-sm-10">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        className="form-control form-control-lg" id="username" />
                </div>
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
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
            </div>
            <br />
            <p><i>if you already have an account click here</i></p>
            <div>
                <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>Sign in</button>
            </div>
        </div>
    )
}
