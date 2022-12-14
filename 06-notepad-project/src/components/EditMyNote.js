import React, { useEffect, useState } from 'react'

export default function Zkouska(props) {


	// const editTitle = JSON.parse(localStorage.getItem("notes")) //takohle dostanu všechny záznamy
	//potřebuju získat ID cíle u kterého jsem kliknul na edit button
	//podle toho následně získám záznam, který předvyplním do inputů
	//po potvrzení potřebuji aby se záznam aktualizovaný opět uložil na svoje místo
	const data = JSON.parse(localStorage.getItem("notes"))
	const [notes, setNotes] = useState(data)

	const editNote = data.filter(note => {
		return note.id === props.editId
	})

	const [newTitle, setNewTitle] = useState(editNote[0].headLine)
	const [newText, setNewText] = useState(editNote[0].text)

	const SetLocalStorage = () => {
		useEffect(() => {
			localStorage.setItem("notes", JSON.stringify(notes))
		})
	}

	const handleNoteEdit = (id, newTitle, newText) => {
		setNotes(
			notes.map((note) => {
				console.log(note)
				if (note.id === id) {
					return {...note, headLine: newTitle, text: newText}
				} else {
					return note
				}
			})
			)
			id.preventDefault()
		}
		SetLocalStorage()
	
	return (
		<div className='input-container'>
			<form className='note' >
				<input id="head-line" type="text" autoFocus placeholder='nadpis' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
				<input id="text" type="text" placeholder='text poznámky' value={newText} onChange={(e) => setNewText(e.target.value)} /><br />
				<button type="submit" className="confirmButton" onClick={() => handleNoteEdit(props.editId, newTitle, newText)}>Edit note</button><br />
				<button className="cansel-btn" onClick={props.hideEditNote}>Cancel</button>
			</form>
		</div>
	)
}