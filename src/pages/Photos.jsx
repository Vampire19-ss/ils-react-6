
import React, {  useEffect, useState } from 'react'
import { useDispatch } from '../context/Store';
import { fetchPics } from '../context/Actions';


function Photos() {
   const 
  { state , dispatch} = useDispatch()
  //var [Page,SetPage]=useState(1);
   const [page, SetPage] = useState(1);


    useEffect(() => {

    if (state.pics.length === 0) {
      fetchPics(page, dispatch);
    }
  }, []);


  useEffect(() => {
     if(page>1){// no. 1 will never call again after refrish
    fetchPics(page, dispatch);
    }
  }, [page]);

  return (
    
    <div className= {state.darkmode ? "bg-dark "  : "bg-light"} style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap",  }}>
      <p>{state.page}</p>
       <button
            onClick={() => {
              if (page > 1) {
                SetPage((page) => page - 1);
              }
            }}
          >
            Previous
          </button>

          <button
            onClick={() => {
              if (page < 100) {
                SetPage((page) => page + 1);
              }
            }}
          >
            next
          </button>

       
      {state.pics.map((photo) => (
        <img
        
          key={photo.id}
          src={photo.src.medium}
          alt={photo.photographer}
          style={{ width: "350px", height: "350px", margin: "15px", backgroundColor:"black",marginTop:"20px", marginBottom:"20px"    }}
          className= {state.darkmode ? "bg-dark "  : "bg-light"}
        />
      ))}
    </div>
  );
}

export default Photos