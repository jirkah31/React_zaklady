import React, { useState, useEffect } from 'react';
import './App.scss';
import Notes from './components/Notes';
import Nav from './components/Nav'

const App = () => {
	const [showInput, setShowInput] = useState(false)

	const showInputNote = () => {
		setShowInput(true)
	}

	const hideInputNote = () => {
		setShowInput(false)
	}

	const removeAllNotes = (event) => {
		console.log(event)
		console.log("klik4")
	}

	return (
		<>
			<Nav showInputNote={showInputNote} removeAllNotes={removeAllNotes} />
			<Notes showInput={showInput} hideInputNote={hideInputNote} removeAllNotes={removeAllNotes} />
		</>
	)
}
export default App;
