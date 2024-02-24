import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import demo from '../demo.avif'
import LoadingBar from 'react-top-loading-bar'



function News({category}) {
const [article,setarticle]= useState([]);
const [page,setpage]=useState(1);
const [totalResult,settotalResult]=useState(1)
const [progress, setProgress] = useState(0)
const  [loading,setloading]=useState(false)
const apiKey= "a204c736c2154362b4ea49e70c18ca4d";

const handlePrev=async()=>{
  const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=`
  const apikey=`${apiKey}&page=${page-1}&pageSize=20`;
  setProgress(30)
  const res= await fetch(url+apikey);
  const result=  await res.json();
  setProgress(100)
  console.log(result.articles)
  setarticle(result.articles)
  setloading(true)
  setpage(page-1)
  }

const handleNext=async()=>{
  const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=`
  const apikey=`a204c736c2154362b4ea49e70c18ca4d&page=${page+1}&pageSize=20`;
setProgress(30)
const res= await fetch(url+apikey);
const result=  await res.json();
setProgress(100)
  setloading(true)
  setpage(page+1)
  console.log(result.articles)
  setarticle(result.articles)
  }

 


const fetchApi= async()=>{
  if(category=="everything"){
  }
  else{

const url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=`
const apikey="a204c736c2154362b4ea49e70c18ca4d&page=1&pageSize=20";
setProgress(30)
const res= await fetch(url+apikey);
const result=  await res.json();
setProgress(100)
setloading(true)
console.log(result.totalResults)
console.log(result.articles)
settotalResult(result.totalResults)
setarticle(result.articles)
console.log(category)
  }
}

useEffect(() => {
fetchApi()
},[]);

  return ( 
<div className='container my-3'>
<LoadingBar
        color='#f11946'
        progress={progress}
      
      />
  <h1 className='text-center mt-90 ' style={{marginTop:90}}>
     News buddy- Top Headlines
  </h1>
    <div className='row'> 
    {article.map((element)=>{
      return(
       <div className=' col-md-4 mb-4 '>
        <NewsCard key={element.urlToImage} author={!element.author?"unknown":element.author} date={element.publishedAt}  img={!element.urlToImage?demo:element.urlToImage} Title={element.title} desc={element.description} url={element.url} />
       </div>
           )
       })}
      </div>
    { loading&& <div className='container'>
      <div className="d-flex justify-content-between">
      <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrev}>Prev</button>
      <button  disabled={Math.ceil(totalResult/2)<=page}type="button" className="btn btn-dark" onClick={handleNext}>Next</button>

      </div>
      </div>}
</div>

  )
}


export default News
