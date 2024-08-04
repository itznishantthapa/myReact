import React, { useState } from 'react'
import  './TextFrom.css'




export default function TextFrom(props) {
  let [text, setText] = useState("Your text goes here............")

  const handingEvent = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handlingChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handlingChange} id="exampleFormControlTextarea1" rows="8"></textarea>
          <button type="submit" onClick={handingEvent} className="btn btn-primary mt-3">Change to UpperCase</button>
        </div>
      </div>
      <div className="container my-3">
        <h3> Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Time to read your text : {0.2 * text.split(" ").length} seconds</p>
        <h2>Preview</h2>
        <p className='preview'>{text}</p>
      </div>

    </>
  )
}
