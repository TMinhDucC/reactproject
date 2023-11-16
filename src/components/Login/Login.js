import './Login.scss'
import { useHistory } from 'react-router-dom'

const Login = () => {
    let history = useHistory()
    const handleRegister = () => {
        history.push("/register")
    }

    return (
        <div >
            <div className="login-container">
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
                            <input type='text' className="form-control" placeholder="Email address or  phone number" />
                            <input type='password' className="form-control" placeholder="Password" />
                            <button className="btn btn-primary" >Login</button>
                            <span class='text-center'><a href='#'>Forgot your password?</a></span>
                            <hr></hr>
                            <button className="btn btn-success" onClick={() => handleRegister()}>
                                Create new account
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login;
