import './signup.css';
import React from 'react';
import { database } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const history = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const uname = e.target.uname.value;

        createUserWithEmailAndPassword(database, email, password)
            .then(
                data => {
                    console.log(data);
                    history('../Home');
                }
            )
            .catch(
                err => {
                    alert(err.message);
                }
            )
    }

    return <div className='container bg-dark'>
        <h1 id='title' style={{ color: 'white' }}>Register Here</h1>
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Username</span>
                <input type="text" id='uname' class="form-control" placeholder="Enter Your Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Email</span>
                <input type="email" id='email' class="form-control" placeholder="Enter Your Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input type="password" id='password' class="form-control" placeholder="Enter Your Password" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
        </form>
    </div>
}

export default SignUp;