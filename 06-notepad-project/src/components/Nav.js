import React from 'react'
import './Nav.scss'

export default function Nav(props) {

	return (
		<nav>
			<button className='nav-btn' onClick={() => props.showInputNote()}>Add New Note</button>
			<button className='nav-btn' onClick={() => props.removeAllNotes()}>Remove All Notes</button>
		</nav>
	)
}