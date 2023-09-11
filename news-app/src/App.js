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
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
//let pageSize = 21
 apiKey= '03d61486bfa240a98b5130c2f1cfa30e'
 state = {
  progress: 0
 }
 
  render() {
    return (
      <div style={index}>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={10}
      />
        <Routes>
          <Route exact path="/" element={ <News key='general'  pageSize={21} apiKey={this.apiKey} category='general'/>}>
          </Route>
          <Route exact path="/business" element={ <News key='business'  pageSize={21} apiKey={this.apiKey} category='business'/>}>
          </Route>
          <Route exact path="/technology" element={ <News key='technology'   pageSize={21} apiKey={this.apiKey} category='technology'/>}>
          </Route>
          <Route exact path="/sports" element={ <News key='sports'  pageSize={21} apiKey={this.apiKey} category='sports'/>}>
          </Route>
          <Route exact path="/science" element={ <News key='science'  pageSize={21} apiKey={this.apiKey} category='science'/>}>
          </Route>
          <Route exact path="/health" element={ <News key='health'  pageSize={21} apiKey={this.apiKey} category='health'/>}>
          </Route>
          <Route exact path="/entertainment" element={ <News key='entertainment'  pageSize={21} apiKey={this.apiKey} category='entertainment'/>}>
          </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
