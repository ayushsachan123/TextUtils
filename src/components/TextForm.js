import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = () =>{
  //console.log("Uppercase was clicked" + text);
  let newText = text.toLocaleUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase","success");
}

const handleLoClick = () =>{
  let newText = text.toLocaleLowerCase();
  setText(newText);
   props.showAlert("Converted to lowercase", "success");
}

//Remove Extra Space
const handleExtraSpace =() =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra space has been removed", "success");
}

//Copy the data
const handleCopy = () => {
  // var text = document.getElementById("myBox");
  // text.select();
  // document.getSelection().removeAllRanges();
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard", "success");
}

const handleOnChange = (event) => {
  setText(event.target.value);
};
  const [text, setText] = useState('');
  //text = "new state";  //wrong way to change the state
  //setText("new state"); //correct way to change the state
  return (
    <>
      <h2>
        Try TextUtils - Word Counter, Character Counter, Remove extra Spaces
      </h2>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="form-floating my-4">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            className="form-control"
            value={text}
            rows="8"
            placeholder="Leave a comment here"
            id="myBox"
          ></textarea>
          <label htmlFor="myBox"></label>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            //Split text by whitespacses and new line
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read all words
        </p>
        <h2>Preview</h2>
        {text.length > 0 ? text : "Nothing to preview"}
      </div>
    </>
  );
}
