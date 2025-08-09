
import  { useState } from 'react'
import { Link } from "react-router-dom";
import { registerHandler } from '../../../context/Actions';
import { useDispatch } from '../../../context/Store';

import { BeatLoader } from 'react-spinners';

const Register = ({setShowRegister}) => {


    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPass] = useState("");

    const formBody = { username, email, password }

    const {state, dispatch} = useDispatch()

    return (
        <div className= {state.darkmode ? "regsiter-dark register register animate__animated animate__backInDown "  : "register-light register register animate__animated animate__backInDown "} >

            <h2 style={{ textAlign: "center", color: "grey" }}> Register with us  </h2>
            <form>


                <div>
                    <label> Username </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>



                <div>
                    <label> Email </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>


                <div>
                    <label> Password </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                    />
                </div>

                <div className="links" >
                    <p>Already have an account go to <Link onClick={() => { setShowRegister(false) }}>  Login </Link> </p>
                    <p> Checkout our <Link> user agreement policy  </Link>  & <Link> Terms and Conditions</Link> </p>
                </div>

                <button type="button" onClick={()=>{registerHandler(formBody , dispatch)}} disabled={state.loading} > {state.loading ? <BeatLoader /> : "Register"}</button>
            </form>
        </div>
    )
}

export default Register