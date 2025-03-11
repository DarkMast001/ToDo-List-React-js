import { useState, useEffect } from "react"
import IntroText from "./components/IntroText/IntroText"
import MakerTasks from './components/MakerTasks/MakerTasks'
import TasksList from "./components/TasksList/TasksList"

function App() {
    const [tasksList, setTasksList] = useState(() => {
		const savedTasks = localStorage.getItem('tasks');
		return savedTasks ? JSON.parse(savedTasks) : []
	})

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksList));
    }, [tasksList])

    return (
        <>
            <IntroText />
            <MakerTasks tasksList={tasksList} setTasksList={setTasksList} />
            <TasksList tasksList={tasksList}/>
        </>
    )
}

export default App
