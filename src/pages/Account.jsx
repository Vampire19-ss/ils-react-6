
import { useState } from "react";
import { useDispatch } from '../context/Store';
import Register from "../components/shared/molecules/Register";
import Login from "../components/shared/molecules/Login";



const Account = () => {
  const {state} = useDispatch()
 
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div
      className={state.darkmode ? "account-dark account" : "account-light account"}
    >
      {showRegister ? (
        <Register darkmode={state.darkmode} setShowRegister={setShowRegister} />
      ) : (
        <Login darkmode={state.darkmode} setShowRegister={setShowRegister} />
      )}
    </div>
  );
};

export default Account;