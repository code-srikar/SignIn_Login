import './signup.css';
import React, { useState } from 'react';
import { database } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const history = useNavigate();

    const [login, setLogin] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!login) {
            const uname = e.target.uname.value;
            createUserWithEmailAndPassword(database, email, password)
                .then(
                    data => {
                        console.log(data);
                        setLogin(true)
                    }
                )
                .catch(
                    err => {
                        alert(err.message);
                    }
                )
        }
        else {
            signInWithEmailAndPassword(database, email, password)
                .then(
                    history('/home')
                )
                .catch(
                    err => {
                        alert(err.message);
                    }
                )
        }
    }

    return <div className='container bg-dark'>
        {
            login ?
                <div id='title'>
                    <h1>Sign In</h1>
                </div>
                :
                <div id='title'>
                    <h1>Create Account</h1>
                </div>
        }
        <form onSubmit={(e) => handleOnSubmit(e)}>
            {
                login ?
                    <></>
                    : <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Username</span>
                        <input type="text" id='uname' class="form-control" placeholder="Enter Your Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
            }

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Email</span>
                <input type="email" id='email' class="form-control" placeholder="Enter Your Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Password</span>
                <input type="password" id='password' class="form-control" placeholder="Enter Your Password" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            {
                login ?
                    <input class="btn btn-primary" type="submit" value={'Sign In'}></input>
                    :
                    <input class="btn btn-primary" type="submit" value={'Sign Up'}></input>
            }
        </form>
    </div>
}

export default SignUp;