import React, { useState, useEffect } from 'react';
import './Notes.scss';
import { FaTrashAlt } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import InputNote from './InputNote'
import EditMyNote from './EditMyNote'

const Notes = (props) => {
	/*  ÚKOLY
		+přidat možnost sortování, podle title, délky textu, datumu
		+nastylovat celý poznámkový blok
		+udělat upozornění alert, s poznámkama ohledně smazání localStorage
		+tlačítko editace
		+přidat datum poznámky
		*/
	const data = JSON.parse(localStorage.getItem("notes"))

	const [editId, setEditId] = useState()

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

	const EditNote = () => {
		props.showEditNote()
	}

	

	const Note = () => {
		SetLocalStorage()
		return (
			<>
				{notes.map(({ headLine, text, id }) => (
					<div key={id} className='note'>
						<nav>
							<button type='button' onClick={() => {EditNote(); setEditId(id) }}><FaRegEdit /></button>
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
			{props.showEdit && <EditMyNote hideEditNote={props.hideEditNote} editId={editId} />}
			{props.showInput && <InputNote handleSubmit={HandleSubmit} setNewHeadLine={setNewHeadLine} setNewText={setNewText} hideInputNote={props.hideInputNote} />}


			{/* <EditNote handleSubmit={HandleSubmit} setNewHeadLine={setNewHeadLine} setNewText={setNewText} hideEditNote={props.hideEditNote} /> */}
		</div>
	)
}

export default Notes;