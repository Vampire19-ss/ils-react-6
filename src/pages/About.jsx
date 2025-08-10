import React from 'react';
import Shahid from '../components/Shahid';
import { useDispatch } from '../context/Store';



const About = () => {
   const {state} = useDispatch()
  return (
    <div>
         
     <h1>about {state.username} </h1>
     
      <Shahid />
    </div>
    
  )
}

export default About

