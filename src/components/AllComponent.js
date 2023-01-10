import React, {useEffect} from 'react';
import {completedTask} from '../helpers/completedTask';

export const AllComponent = ({tasks, setTasks, sendValue}) => {

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div>
			<form className="form" onSubmit={sendValue}>
              <input className="input" type="text" name="task" placeholder="Add details"/>
              <input className="add-btn" type="submit" value="Add"/>
            </form>
			{
				tasks.length > 0 ? tasks.map(element => {
						return (
							<li key={element.id} className="task">
								<input type="checkbox" onClick={e => completedTask(setTasks, element.id)} defaultChecked={element.completed}/>
								<span className={element.completed ? 'checked' : ''}>{element.nameTask}</span>
							</li>
						)
					}
				) : <li></li>
			}
		</div>
	);
}