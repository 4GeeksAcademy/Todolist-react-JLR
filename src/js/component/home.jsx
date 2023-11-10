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
	  	  <h1 className="display-1 toDos">ToDos</h1>
		  <div className="contenedor">
		  <div className="input-group mb-3">
			<label></label>
			<input className="elInput" placeholder="What needs to be done?" onKeyDown={(e) => (e.keyCode === 13 ? cambiarElement(e) : null)} value={input} type="text" onChange={cambioDeImput} />
		  </div>
		  {elements.map( (element, index ) => 
		  <div className="position-relative contenedorDo">
		  <p className="does ms-0 border-top" id={index} key={index}> {element}</p> <button className="position-absolute top-50 end-0 translate-middle-y me-2 deleteBoton" onClick={() => deleteElementById(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  		  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
		  </svg></button>
		  </div>)}
		  <p className="border-top footer">{elements.length} items left</p>
		  </div>
		  
	  </>
  );
};

export default Home;
