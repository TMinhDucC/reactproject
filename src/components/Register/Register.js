import { useEffect, useState } from 'react'
import './Register.scss'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    let history = useHistory()
    const handleLogin = () => {
        history.push("/login")
    }

    const handleRegister = () => {
        let check = isValidInput()
        if (check == true) {
            axios.post('http://localhost:8080/api/v1/register', {
                email, phone, username, password
            })
        }
        let userData = { email, phone, username, password }
        console.log(userData);
        // toast.success('🦄 Wow so easy !')
    }

    const isValidInput = () => {
        if (!email) {
            toast.error('🦄 Email ko de trong !')
            return false
        }
        if (!phone) {
            toast.error('🦄 phone ko de trong !')
            return false
        }
        if (!username) {
            toast.error('🦄 username ko de trong !')
            return false
        }
        if (!password) {
            toast.error('🦄 password ko de trong !')
            return false
        }
        if (password != confirmPassword) {
            toast.error('🦄 password ko dung  !')
            return false
        }
        return true
    }

    useEffect(() => {
        // axios.get("http://localhost:8080/api/v1/register").then(data => {
        //     console.log('>>>>>check data ', data)
        // })




    }, [])

    return (
        <div >
            <div className="register-container">
                <div className="container">
                    <div className="row">

                        <div className="content-left col-7 ">
                            <div className="brand">
                                React App
                            </div>
                            <div className="detail">
                                Facebook helps you connect and share with the people in your life.
                            </div>
                        </div>

                        <div className="content-right col-5 green d-flex flex-column gap-3 py-3">
                            <div className='form-group'>

                                <label>Email:</label>
                                <input type='text' className="form-control" placeholder="Email address "
                                    value={email} onChange={(event) => setEmail(event.target.value)}
                                />

                            </div>

                            <div className='form-group'>

                                <label>Phone number:</label>
                                <input type='text' className="form-control" placeholder="Phone number "

                                    value={phone} onChange={(event) => setPhone(event.target.value)}

                                />

                            </div>
                            <div className='form-group'>

                                <label>User name:</label>
                                <input type='text' className="form-control" placeholder="User name "

                                    value={username} onChange={(event) => setUserName(event.target.value)}

                                />

                            </div>
                            <div className='form-group'>

                                <label>Password:</label>
                                <input type='password' className="form-control" placeholder="Password"
                                    value={password} onChange={(event) => setPassword(event.target.value)}

                                />

                            </div>
                            <div className='form-group'>

                                <label>Nhap lai Password:</label>
                                <input type='password' className="form-control" placeholder="Password"
                                    value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}

                                />

                            </div>

                            <button className="btn btn-primary" onClick={() => handleRegister()}>Register</button>

                            <hr></hr>

                            <button className="btn btn-success" onClick={() => handleLogin()}>
                                Already Login
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Register;
