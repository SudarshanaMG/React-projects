import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase.", "success") ;
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase.", "success");
  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard.", "success") ;
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };
  const handleOnChange = (event) => {
    // console.log("onChanged");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // console.log(setText('Enter here'));
  return (
    <>
      <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            style={{backgroundColor: props.mode==='dark'?'#456F8F':'white',color: props.mode==='dark'?'white':'black'}}
            onChange={handleOnChange}
            value={text}
            rows="6"
          ></textarea>
        </div>
        <button className={`btn btn-${props.bcg} mx-2 my-2`} onClick={handleUpClick} disabled={text.length===0}>
          Convert to uppercase
        </button>
        <button className={`btn btn-${props.bcg} mx-2 my-2`} onClick={handleLowClick} disabled={text.length===0}>
          Convert to lowercase
        </button>
        <button className={`btn btn-${props.bcg} mx-2 my-2`} onClick={handleClear} disabled={text.length===0}>
          Clear
        </button>
        <button className={`btn btn-${props.bcg} mx-2 my-2`} onClick={handleCopy} disabled={text.length===0}>
          Copy Text
        </button>
        <button className={`btn btn-${props.bcg} mx-2 my-2`} onClick={handleExtraSpace} disabled={text.length===0}>
          Remove extra space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((num)=>{return num!==''}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((num)=>{return num!==''}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'"Nothing to preview"'}</p>
      </div>
    </>
  );
}
