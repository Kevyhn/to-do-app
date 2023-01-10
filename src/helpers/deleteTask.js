export const deleteTask = (setTask, id) => {

	let tasksStorage = JSON.parse(localStorage.getItem('tasks'));

	let taskFilter = tasksStorage.filter(task => task.id !== id);

	localStorage.setItem('tasks', JSON.stringify(taskFilter));
	setTask(taskFilter);
}

export const deleteAll = (setTask) => {
	let tasksStorage = JSON.parse(localStorage.getItem('tasks'));

	let taskFilter = tasksStorage.filter(task => task.active === true);

	localStorage.setItem('tasks', JSON.stringify(taskFilter));
	setTask(taskFilter);
}