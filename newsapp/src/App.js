import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
//let pageSize = 21
 const apiKey= process.env.REACT_APP_NEWS_API
 const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        loaderSpeed={100}
        waitingTime={500}
        color='#f11946'
        progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News key='general'  pageSize={21} setProgress={setProgress} apiKey={apiKey} category='general'/>}>
          </Route>
          <Route exact path="/business" element={ <News key='business'  pageSize={21} setProgress={setProgress} apiKey={apiKey} category='business'/>}>
          </Route>
          <Route exact path="/technology" element={ <News key='technology'   pageSize={21} setProgress={setProgress} apiKey={apiKey} category='technology'/>}>
          </Route>
          <Route exact path="/sports" element={ <News key='sports'  pageSize={21} setProgress={setProgress} apiKey={apiKey} category='sports'/>}>
          </Route>
          <Route exact path="/science" element={ <News key='science'  pageSize={21} setProgress={setProgress} apiKey={apiKey} category='science'/>}>
          </Route>
          <Route exact path="/health" element={ <News key='health'  pageSize={21} setProgress={setProgress} apiKey={apiKey} category='health'/>}>
          </Route>
          <Route exact path="/entertainment" element={ <News key='entertainment'  pageSize={21} setProgress={setProgress} apiKey={apiKey} category='entertainment'/>}>
          </Route>
        </Routes>
        </Router>
      </div>
    )
  
}
export default App