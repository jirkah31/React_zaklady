import React, { useState } from 'react';
import './Note.css';


const Note = () => {

	const [notes, setNotes] = useState([
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
	])


	const InputNote = () => {
		const [newHeadLine, setHeadLine] = useState(" ")
		const [newText, setText] = useState(" ")

		const handleSubmit = () => {
			setNotes( current => [...current, {
				id: Math.max(...notes.map(note => note.id)) + 1,
				headLine: newHeadLine,
				text: newText
			}]
			)
		}

		return (
			<form className='note'>
				<input id="headLine" type="text" onChange={event => setHeadLine(event.target.value)} />
				<input id="text" type="text" onChange={event => setText(event.target.value)} />
				<button type="submit" className="confirmButton" onClick={handleSubmit}>Zapsat poznámku</button>
			</form>
		)
	}


	const Note = () => {
		return (
			<div>
				{notes.map(({ headLine, text, id }) => (
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
			{/* {console.log(notes)}  kontrola, že v notes je to stejný jako je vykreslený */}
			<InputNote />
		</div>
	)
}

export default Note;