
import { useDispatch } from '../context/Store';


function Shahid() {
   const {state} = useDispatch()
  return (
    <div> my name is {state.username}</div>
  )
}

export default Shahid
