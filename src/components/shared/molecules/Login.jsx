
import  { useState } from 'react'
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { loginHandler } from '../../../context/Actions';
import { useDispatch } from '../../../context/Store';

const Login = ({darkmode , setShowRegister}) => {


    //const {state , dispatch} = useContext(Context)
    const {state, dispatch} = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const formBody = { email, password }


    return (
        <div className= {darkmode ? "regsiter-dark register register animate__animated animate__backInDown "  : "register-light register register animate__animated animate__backInDown "}>

            <h2 style={{ textAlign: "center" }}> Login your account    </h2>
            <form>

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
                    <p>Dont have an accound <Link onClick={() => { setShowRegister(true) }}> Regeister Here </Link> </p>
                    <p> Checkout our <Link> user agreement policy  </Link>  & <Link> Terms and Conditions</Link> </p>
                </div>

                <button type="button" onClick={() => loginHandler(formBody, dispatch)} disabled={state.loading} > {state.loading ? <BeatLoader /> : "Login"}</button>
            </form>
        </div>

    )
}

export default Login