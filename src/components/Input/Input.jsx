import { useState } from 'react'
import './Input.css'

export default function Input({task, setTask, onEnter}) {
	return (
		<input 
			className='input_field' 
			type="text" 
			placeholder='Введите задачу...'
			id='task'
			value={task}
			onChange={(event) => setTask(event.target.value)}
			onKeyDown={(event) => {
				if (event.key == 'Enter'){
					onEnter();
				}
			}}
		/>
	)
}