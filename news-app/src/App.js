import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import index from './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div style={index}>
        <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News key='general' pageSize={21} category='general'/>}>
          </Route>
          <Route exact path="/business" element={ <News key='business'  pageSize={21} category='business'/>}>
          </Route>
          <Route exact path="/technology" element={ <News key='technology'  pageSize={21} category='technology'/>}>
          </Route>
          <Route exact path="/sports" element={ <News key='sports'  pageSize={21} category='sports'/>}>
          </Route>
          <Route exact path="/science" element={ <News key='science'  pageSize={21} category='science'/>}>
          </Route>
          <Route exact path="/health" element={ <News key='health'  pageSize={21} category='health'/>}>
          </Route>
          <Route exact path="/entertainment" element={ <News key='entertainment'  pageSize={21} category='entertainment'/>}>
          </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
