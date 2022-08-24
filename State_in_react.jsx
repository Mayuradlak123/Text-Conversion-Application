import React,{useState} from 'react'
export default function State_in_react(props) {
  const handleClick=()=>{
    console.log("Handle Clicked ");
    // setText("You Have Clicked Handler"+text);
    let temp=text.toLocaleUpperCase();
    setText(temp);
    // document.write("You Have clicked change handleClick");
  }
  const LowerClick=()=>{
    let low=text.toLocaleLowerCase();
    setText(low);
  }
  const changeHandler=()=>{
    console.log(" on change ");
    setText(event.target.value);
  }
  
    const [text,setText] =useState("You can Write Here ");
  return (
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"> {props.head} </label>
            <textarea name="" onChange={changeHandler} className="form-control" id="textarea" cols="" value={text} rows="8"></textarea>
            <button className="btn btn-primary btn-sm my-3" onClick={handleClick}>Covert To Uppercase</button>
            <button className="btn btn-primary btn-sm ml-3" onClick={LowerClick}>Covert To Lowercase</button>
        </div>
    </div>
  )
}
