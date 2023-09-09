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
          <Route exact path="/business" element={ <News key='business' title='Top Headlines - Business' pageSize={21} category='business'/>}>
          </Route>
          <Route exact path="/technology" element={ <News key='technology' title='Top Headlines - Technology' pageSize={21} category='technology'/>}>
          </Route>
          <Route exact path="/sports" element={ <News key='sports' title='Top Headlines - Sports' pageSize={21} category='sports'/>}>
          </Route>
          <Route exact path="/science" element={ <News key='science' title='Top Headlines - Science' pageSize={21} category='science'/>}>
          </Route>
          <Route exact path="/health" element={ <News key='health' title='Top Headlines - Health' pageSize={21} category='health'/>}>
          </Route>
          <Route exact path="/entertainment" element={ <News key='entertainment' title='Top Headlines - Entertainment' pageSize={21} category='entertainment'/>}>
          </Route>
          <Route exact path="/general" element={ <News key='general' title='Top Headlines - General' pageSize={21} category='general'/>}>
          </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
