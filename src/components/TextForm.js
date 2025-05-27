import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
      };

    const handleOnChange = (e) =>{
        setText(e.target.value)
    }

    const handleDownClick = () => {
      setText(text.toLowerCase());
    };

    const handleclearClick = () => {
      setText("");
    };
    
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

  return (
    <>
     <div>
       <h1>{props.heading}</h1>
       <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className='btn btn-primary ' onClick={handleUpClick}>Convert to uppercase</button>
       <button className='btn btn-primary mx-3' onClick={handleDownClick}>Convert to lowercase</button>
       <button className='btn btn-primary mx-3' onClick={handleclearClick}>clear Text</button>
       <button className='btn btn-primary mx-3' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

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
