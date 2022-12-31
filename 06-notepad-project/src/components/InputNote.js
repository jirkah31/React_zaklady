import React from 'react'
import './InputNote.scss'

export default function InputNote(props) {

	const confirmBtn = (event) => {
		props.handleSubmit(event)
		props.hideInputNote(event)
	}

	return (
		<div className='input-container'>
			<form className='note' >
				<input id="head-line" type="text" autoFocus placeholder='nadpis' onChange={props.setNewHeadLine} />
				<input id="text" type="text" placeholder='text poznámky' onChange={props.setNewText} />
				<button type="submit" className="confirmButton" onClick={confirmBtn}>Zapsat poznámku</button><br />
				<button className="cansel-btn" onClick={props.hideInputNote}>Cancel</button>
			</form>
		</div>
	)
}