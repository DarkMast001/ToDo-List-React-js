import './MakerTasks.css'

import Input from '../Input/Input'
import ButtonPlan from '../ButtonPlan/ButtonPlan'
import { useState } from 'react'

export default function MakerTasks({tasksList, setTasksList}) {
	const [task, setTask] = useState('')

	const handleSaveTask = () => {
		if (task.trim()) {
			setTasksList([task, ...tasksList])
			setTask('')
		}
	}

	return (
		<div className="input_container">
			<Input task={task} setTask={setTask} onEnter={handleSaveTask}/>
			<ButtonPlan onClick={handleSaveTask}>Запланировать!</ButtonPlan>
		</div>
	)
}