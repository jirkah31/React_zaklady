import React, {useState} from 'react';


const InputNote = () => {
	const [headLine, setHeadLine] = useState(" ")
	const [text, setText] = useState(" ")



	console.log(text);


	return (
		<form className='note'>
			<input id="headLine" type="text" onChange={ event => setHeadLine(event.target.value) } />
			<input id="text" type="text" onChange={ event => setText(event.target.value) } />
		</form>
	)
}

export default InputNote;