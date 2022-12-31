import React, { useState, useEffect } from 'react';
import './Notes.scss';
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import InputNote from './InputNote'

const Notes = (props) => {
	/*  ÚKOLY
		+přidat možnost sortování, podle title, délky textu, datumu
		+nastylovat celý poznámkový blok
		+udělat upozornění alert, s poznámkama ohledně smazání localStorage
		+tlačítko editace
		+přidat datum poznámky
		*/
	const data = JSON.parse(localStorage.getItem("notes"))

	const [newHeadLine, setHeadLine] = useState("")
	const [newText, setText] = useState("")
	const [notes, setNotes] = useState(() => {
		if (!data) {
			return []
		} else {
			return data
		}
	})

	const setNewHeadLine = event => {
		setHeadLine(event.target.value)
	}

	const setNewText = event => setText(event.target.value)

	const HandleSubmit = (event) => {
		event.preventDefault()
		if (newHeadLine && newText) {
			setNotes(notes => [...notes, {
				id: SetId(),
				headLine: newHeadLine,
				text: newText
			}])
		}
	}

	const SetId = () => {
		if (notes.length > 0) {
			return (Math.max(...notes.map(note => note.id)) + 1)
		} else {
			return 0
		}
	}

	const SetLocalStorage = () => {
		useEffect(() => {
			localStorage.setItem("notes", JSON.stringify(notes))
		})
	}

	const DeleteNote = id => {
		setNotes(notes.filter(note => note.id !== id))
	}

	const removeAllNotes = () => {
		console.log("rmeove all notes")
	}

	const EditNote = id => {
		console.log("edit")
	}

	useEffect(()=>{
		removeAllNotes(removeAllNotes)
	})

	const Note = () => {
		SetLocalStorage()
		return (
			<>
				{notes.map(({ headLine, text, id }) => (
					<div key={id} className='note'>
						<nav>
							<button type='button' onClick={() => EditNote(id)}><FaRegEdit /></button>
							<button type='button' onClick={() => DeleteNote(id)}><FaTrashAlt /></button>
						</nav>

						<h1>{headLine}</h1>
						<p>{text}</p>
					</div>
				))}
			</>
		)
	}

	return (
		<div className='container'>
			<Note />
			{props.showInput && <InputNote handleSubmit={HandleSubmit} setNewHeadLine={setNewHeadLine} setNewText={setNewText} hideInputNote={props.hideInputNote} />}
		</div>
	)
}

export default Notes;