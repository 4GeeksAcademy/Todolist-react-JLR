import { useState } from "react";
import React from "react";

const Home = () => {
	const [input, setImput] = useState("")
	const [elements, setElements] = useState([])

	function cambioDeImput(e){
		setImput(e.target.value)
		console.log(e.target.value)

};

function deleteElementById(index) {
	setElements(elements.filter((element, i) => i !== index));
  }
  
  function cambiarElement(){
	  if(input !== "" ){
		  setElements(elements.concat(input))}
		  setImput("")
		  elements.forEach((element, index) => {
			  if (element === input) {
				  deleteElementById(index);
			  }
		  });
  };
  
  return (
	  <>
	  	  <h1>ToDos</h1>
		  <div className="input-group mb-3">
			  <label></label>
				<input placeholder="What needs to be done?" onKeyDown={(e) => (e.keyCode === 13 ? cambiarElement(e) : null)} value={input} type="text" onChange={cambioDeImput} className="form-control" aria-describedby="basic-addon1"/>
		  </div>
		  {elements.map( (element, index ) => <p id={index} key={index}> {element} <button onClick={() => deleteElementById(index)}>Delete</button></p>)}
		  <p>{elements.length} items left</p>
	  </>
  );
};

export default Home;
