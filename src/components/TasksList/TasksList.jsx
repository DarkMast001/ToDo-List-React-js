import './TasksList.css'

import ButtonDelete from '../ButtonDelete/ButtonDelete'
import { useEffect, useState } from 'react'

export default function TasksList({tasksList}) {

	return (

		<ul className='task_ul'>
			{tasksList.map((task, index) => (
				<li key={index} className='task_li'>
					<span className='task_text'>{task}</span>
					<ButtonDelete />
				</li>
			))}
		</ul>
	)
}