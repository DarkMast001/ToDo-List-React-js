import './TasksList.css'

import ButtonDelete from '../ButtonDelete/ButtonDelete'
import { useEffect, useState } from 'react'

export default function TasksList({tasksList, setTasksList}) {

	const handleDeleteTask = (delIndex) => {
		const newTasks = tasksList.filter((task, index) => index != delIndex)
		setTasksList(newTasks)
	}

	return (
		<ul className='task_ul'>
			{tasksList.map((task, index) => (
				<li key={index} className='task_li'>
					<span className='task_text'>{task}</span>
					<ButtonDelete onClick={() => handleDeleteTask(index)} />
				</li>
			))}
		</ul>
	)
}