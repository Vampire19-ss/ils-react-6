import React, {  useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

import { useDispatch } from '../context/Store';
//import loadingGif from "../assets/loading.png"

const Home = () => {

    const {state} = useDispatch()
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 4000);

    })

    const handleIncrement = () => {
        setCount(count => count + 1)
    }


    const handleDecrement = () => {
        setCount(count => count - 1)
    }

    return (
       
        <div className={ state.darkmode ? "home-dark home"  : "home-light home" } >
            {
                loading ?
                    <div>
                        <PropagateLoader color="#348375" />
                    </div>
                    :
                    <div>
                        <h1>  Welcome from the app{state.user.username} </h1>
                        <h2>   This is function based component  </h2>
                        <h2> This is the counter </h2>
                        <h2> {count} </h2>
                        <div>
                            <button className='btn-home' onClick={handleDecrement}> decrement  </button>
                            <button className='btn-home' onClick={handleIncrement}> increment  </button>
                        </div>
                    </div>
            }
        </div>



    )

}

export default Home