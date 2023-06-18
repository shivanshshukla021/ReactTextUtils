import React, { useState } from "react";

export default function Form(props) {
  const touppercase = () => {
    // console.log("uppercase");
    let n = text.toLocaleUpperCase();
    setText(n);
    props.showalert("Converted to Uppercase", "success");
  };

  const tolowercase = () => {
    // console.log("lowerrcase");
    let n = text.toLocaleLowerCase();
    setText(n);
    props.showalert("Converted to Lowercase", "success");
  };

  const clearall = () => {
    setText("");
  };

  const handleonchamge = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div id="container">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label mx-3"
          >
            Write Here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleonchamge}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={touppercase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={tolowercase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-3"
          onClick={clearall}
        >
          ClaerAll
        </button>
      </div>

      <div id="container" className="mx-3">
        <h2>{props.title}</h2>
        <h4>Your Summary</h4>
        <p>
          {" "}
          Total Words {text.split(" ").length - 1} Total letters are{" "}
          {text.length}
        </p>
      </div>
    </>
  );
}
