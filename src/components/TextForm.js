import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
      };

    const handleOnChange = (e) =>{
        setText(e.target.value)
    }

  return (
    <>
     <div>
       <h1>{props.heading}</h1>
       <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
    </div>
    <div className="container my-3">
       <h1>your text summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008  * text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
    
  )
}
