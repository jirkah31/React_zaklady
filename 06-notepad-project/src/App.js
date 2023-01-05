import React, { useState } from 'react';
import './App.scss';
import Notes from './components/Notes';
import Nav from './components/Nav'

const App = () => {
	const [showInput, setShowInput] = useState(false)
	const [showEdit, setShowEdit] = useState(false)

	const showInputNote = () => {
		setShowInput(true)
	}

	const hideInputNote = () => {
		setShowInput(false)
	}

	const showEditNote = () => {
		setShowEdit(true)
	}

	const hideEditNote = () => {
		setShowEdit(false)
	}

	const removeAllNotes = (event) => {
		alert("I'm working hard on it")
	}

	return (
		<>
			<Nav showInputNote={showInputNote} removeAllNotes={removeAllNotes} />
			<Notes 	showInput={showInput} hideInputNote={hideInputNote} removeAllNotes={removeAllNotes}
					showEdit={showEdit} hideEditNote={hideEditNote} showEditNote={showEditNote} />
		</>
	)
}
export default App;
