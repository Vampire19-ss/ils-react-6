import axios from "axios";
import { useEffect, useState } from "react";
//import React, { useEffect } from 'react'

function News() {

  const [News, SetNews] = useState([]);
   const [searchQuery , SetSeacrhQuery] =  useState("world")
   const [loadNews , SetLoadNews] = useState(false)
   

  const apiKey = "d75ec0f277194bb6aa1b75d1ebeaf603";
  const fetchnews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2025-07-28&to=2025-07-28&sortBy=popularity&apiKey=${apiKey}`
      );
      if (res.status === 200) {
        console.log(res.data);
        SetNews(res.data.articles);
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

 const handleChange = (e) => {

    const value = e.target.value;
    SetSeacrhQuery (value)

  };


  useEffect(() => {
    fetchnews();
  }, [loadNews]);

  return( <div>

    <h1 className="text-center">News</h1>
    <div className="container">  
      <h2> Latest News around the World</h2>


      <div className="search-bar">
      <input placeholder="search" value={searchQuery} onChange={(e)=>{handleChange(e)}}/>


       <button onClick={()=>{SetLoadNews(!loadNews)}}> search</button>  

      </div>
        
        
       
       
        </div> 

        <div className="nws">
        
        {News.map((news, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
               <img src={news.urlToImage} className="card-img-top" alt={news.title} />
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <a href={news.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}

       </div>
      </div>  
  
  )
}

export default News;
