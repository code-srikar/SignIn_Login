import './signup.css';

const SignUp = () => {
    return <div className='container bg-dark'>
        <h1 id='title' style={{ color: 'white' }}>Register Here</h1>
        <form>
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