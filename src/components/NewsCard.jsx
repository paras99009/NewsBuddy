import React from 'react'

function NewsCard({img,Title,desc,url,date, author}) {
  let desc1=[desc]
 const description= desc1.slice(0,10);
  
  return (
<div className=''>
  <div className="card mt-2 ml-3  " style={{width:250}}>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{right:0}} >{author}</span>
    <img src={img} className="card-img-top" alt="loading" />
      <div className="card-body">
      <h5 className="card-title">{Title}</h5>
      <p className="card-text">{description}</p>
      <p class="card-text"><small class="text-muted">{new Date(date).toLocaleString()}</small></p>
      <a href={url} className="btn btn-dark">Read more</a>
  </div>
</div>
      
    </div>
  )
}

export default NewsCard
