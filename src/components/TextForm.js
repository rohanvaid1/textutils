import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
      };

    const handleOnChange = (e) =>{
        setText(e.target.value)
        props.showAlert("Text changed", "success");
    }

    const handleDownClick = () => {
      setText(text.toLowerCase());
      props.showAlert("Converted to lowercase", "success");
    };

    const handleclearClick = () => {
      setText("");
      props.showAlert("Text cleared", "success");
    };
    
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
      props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }

  return (
    <>
     <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
       <h1>{props.heading}</h1>
       <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode=== 'dark' ? 'gray' : 'white', color : props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
       </div>
       <button className='btn btn-primary ' onClick={handleUpClick}>Convert to uppercase</button>
       <button className='btn btn-primary mx-3' onClick={handleDownClick}>Convert to lowercase</button>
       <button className='btn btn-primary mx-3' onClick={handleclearClick}>clear Text</button>
       <button className='btn btn-primary mx-3' onClick={handleCopyClick}>Copy Text</button>
        <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"  style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
       <h1>your text summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008  * text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length > 0 ? text:"Enter someting in the textbox above to preview in here"}</p>
    </div>
    </>
    
  )
}
