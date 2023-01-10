import React, {useEffect} from 'react';
import {completedTask} from '../helpers/completedTask';
import {deleteTask, deleteAll} from '../helpers/deleteTask';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export const CompletedComponent = ({tasks, setTasks}) => {

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	let tasksCompleted = tasks.filter(element => element.completed === true);

	return (
		<div>
			{
				tasksCompleted.length > 0 ? tasksCompleted.map(element => {
						return (
							<li key={element.id} className="completedItem task">
								<div>
									<input type="checkbox" onClick={e => completedTask(setTasks, element.id)} defaultChecked={element.completed}/>
									<span className={element.completed ? 'checked' : ''}>{element.nameTask}</span>
								</div>
								<FontAwesomeIcon icon={faTrash} className="deleteBtn" onClick={e => deleteTask(setTasks, element.id)}/>
							</li>
						)
					}
				) : <li></li>
			}
			{
				tasksCompleted.length > 0 ? (
					<div className="delete-all-ctn">
						<button onClick={e => deleteAll(setTasks)}>
							<FontAwesomeIcon icon={faTrash}/>
							Delete all
						</button>
					</div>
				) : ''
			}
		</div>
	);
}