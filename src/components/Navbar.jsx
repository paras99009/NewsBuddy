import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
<div className='d-flex flex-row fixed-top bd-highlight navbar-dark  bg-dark '>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark  bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">NewsBuddy</a>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link "  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment
        </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="health">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="science">science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="sports">sports</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="technology">technology</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>

    </div>
    </div>
  )
}

export default Navbar

