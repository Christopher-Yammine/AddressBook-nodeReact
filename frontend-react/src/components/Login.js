import { useState } from 'react';
const Login = ({ onPressed }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function register() {
        window.location.href = '/register';
    }
    const onsubmit = (e) => {
        e.preventDefault();
        if (!email) {
            alert("add email")
            return
        }
        onPressed({ email, password })

    }
    return (
        <form className='add-form' onSubmit={onsubmit}>
            <div className='form-control'>
                <label>Email</label>
                <input
                    type='text'
                    placeholder='enter email'
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)}
                ></input>
            </div>
            <div className='form-control'>
                <label>password</label>
                <input
                    type='password'
                    placeholder='enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <input type='submit' className='btn btn-block' value='Log in'></input>
            <div>
                <button type='button' className='logOut btn-block' onClick={register}>Register</button>
            </div>
        </form>
    )
}

export default Login