import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SigninScreen(){

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault();
        //TODO: signin action
    }
    return (

    <div>
        <form className = "form" onSubmit = {submitHandler}>
        <div>
            <h1>Sign in</h1>
        </div>
        <div>
            <label htmlFor= "email">Email Adress</label>
            <input type="email" id="email" placeholder="Enter Email" required onChange={e => setEmail(e.target.value)}>

            </input>
            </div>

            <div>
            <label htmlFor= "password">Email Adress</label>
            <input type="password" id="password" placeholder="Enter password" required onChange={e => setPassword(e.target.value)}>

            </input>
            </div>
            <div>
                <label />
                <button className="primary" type="submit">Sign In</button>
            </div>
            <div>
                <label />
                <div>
                    New customer? {' '}
                    <Link to="/register">Create you account</Link>
                </div>
            </div>
        </form>
    </div>
    );
}