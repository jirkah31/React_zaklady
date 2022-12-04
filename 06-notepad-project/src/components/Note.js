import React, {useState} from 'react';
import './Note.css';
import ConfirmButton from './ConfirmButton';

const Note = () => {
	const notes = [
		{
			id: 1,
			headLine: 'Vyvenčit Apola',
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur inventore at facere vitae velit eos, repudiandae ea eligendi rem atque dolor."
		},
		{
			id: 2,
			headLine: 'Uklidit',
			text: " Pariatur inventore at facere vitae velit eos, repudiandae ea eligendi rem atque dolor, doloremque asperiores facilis obcaecati harum optio illum dolore rerum libero iusto?"
		}
	]

	const InputNote = () => {
		const [headLine, setHeadLine] = useState(" ")
		const [text, setText] = useState(" ")

		return (
			<form className='note'>
				<input id="headLine" type="text" onChange={event => setHeadLine(event.target.value)} />
				<input id="text" type="text" onChange={event => setText(event.target.value)} />
				<ConfirmButton />
			</form>
		)
	}

	const Note = () => {
		return (
			<div>
				{notes.map(({headLine, text, id})=>( 
					<div key={id} className='note'>
						<h1>{headLine}</h1>
						<p>{text}</p>
					</div>
				))}
			</div>
		)
	}


	return (
		<div>
			<Note />
			<InputNote />
		</div>
	)
}

export default Note;