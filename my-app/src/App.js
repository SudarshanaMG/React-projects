
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [bcg, setBcg] = useState('primary');
  

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled.',"success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled.',"success")

    }
  }
  const toggleModeBackD = () =>{
    document.body.style.backgroundColor = '#770505';
    setBcg('danger')
  }
  const toggleModeBackW = () =>{
    document.body.style.backgroundColor = '#8B8704';
    setBcg('warning')
  }
  const toggleModeBackS = () =>{
    document.body.style.backgroundColor = '#087100';
    setBcg('success')
  }
  const toggleModeBackP = () =>{
    document.body.style.backgroundColor = '#0332A6';
    setBcg('primary')
  }
  // const toggle = () =>{
  //   document.body.style.backgroundColor= mode==='dark'?'grey':'white';
  //   document.body.style.color= mode==='dark'?'white':'black'
  // }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleModeBackP={toggleModeBackP} toggleModeBackD={toggleModeBackD} toggleModeBackW={toggleModeBackW} toggleModeBackS={toggleModeBackS} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter the text below" showAlert={showAlert} bcg={bcg}  mode={mode} /> } />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
