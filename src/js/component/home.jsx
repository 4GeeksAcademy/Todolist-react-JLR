import { useState } from "react";
import React from "react";

const Home = () => {
	const [input, setImput] = useState("")
	const [elements, setElements] = useState([])

	function cambioDeImput(e){
		setImput(e.target.value)
		console.log(e.target.value)

};

	function cambiarElement(){
		setElements(elements.concat(input))
		

};



	return (
		<>
		<div className="input-group mb-3">
			<label></label>
 		 	<input value={input} type="text" onChange={cambioDeImput} className="form-control" aria-describedby="basic-addon1"/>
		</div>
		{elements.map( (element, index ) =><p key={index}> {element}</p>)}
		<button onClick={cambiarElement}></button>
		<p>{elements.length} shit to do</p>
		</>

	);
};

export default Home;
