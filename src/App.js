

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';



function App(){
  
  const [progress, setProgress] = useState(0)
    return (
    <>
    <Navbar/>

    <Routes>
    <Route path='/' element={<News key={"home"}  progress={progress} category={"general"}/>}/>
    <Route path='/sports' element={<News key={"sports"} progress={progress}  category={"sports"}/>}/>
    <Route path='/entertainment' element={<News key={"entertainment"} progress={progress}  category={"entertainment"}/>}/>
    <Route path='/technology' element={<News key={"technology"} progress={progress}  category={"technology"}/>}/>
    <Route path='/general' element={<News key={"general"} progress={progress}   category={"general"}/>}/>
    <Route path='/health' element={<News key={"health"}  progress={progress}  category={"health"}/>}/>
    <Route path='/science' element={<News  key={"science"} progress={progress}  category={"science"}/>}/>
    </Routes>

    </>
      );

}

export default App

