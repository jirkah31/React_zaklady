import React from 'react';
import './Note.css';

const Note = () => {
	const notes = [
		{
			id: 1,
			headLine: 'Nadpis1',
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur inventore at facere vitae velit eos, repudiandae ea eligendi rem atque dolor, doloremque asperiores facilis obcaecati harum optio illum dolore rerum libero iusto?"
		}
	]

	const note = (
		<div className='note'>
			<h1>{notes[0].headLine}</h1>
			<p>{notes[0].text}</p>
		</div>
	)

	return (
		note
	)
}

export default Note;