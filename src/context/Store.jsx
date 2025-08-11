import React, {  createContext, useContext, useReducer,  } from "react";
import "../global.scss";


import { initialState } from "./State";
import { Reducer } from "./Reducer";

 const Context = createContext();


export const Store = ({children}) => {

  const [state, dispatch] = useReducer(Reducer ,  initialState);

  return (
    <Context.Provider value={{state , dispatch}}>
      {children} 
    </Context.Provider>
  );
};

// const {state , dispatch } = useContext(Context)

//custom hook 
export const useDispatch = () => useContext(Context);

