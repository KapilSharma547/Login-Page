import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css';


const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPasssword] = useState("")

    async function signUp() {
        let item = { email, password }
        // console.warn(item)

        let result = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        console.log("result", result)

    }

    return (
        <div className="signup" >
            <h1>Log in</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="block" /><br /><br />
            <input type="password" value={password} onChange={(e) => setPasssword(e.target.value)} placeholder="password" className="block" /><br /> <br />
            <button className="btn btn-primary" onClick={signUp}  >Sing up</button>

           
        </div>
    )

}

export default Register;