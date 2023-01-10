export const completedTask = (setTasks, id) => {
	let tasksStorage = JSON.parse(localStorage.getItem('tasks')); 

	let index = tasksStorage.findIndex(task => task.id === id);

	let task = tasksStorage[index];

	if (task.completed === false) {
		task = {
			id,
			nameTask: task.nameTask, 
			active: false,
			completed: true
		}

		tasksStorage[index] = task;
	} else {
		task = {
			id,
			nameTask: task.nameTask, 
			active: true,
			completed: false
		}

		tasksStorage[index] = task;
	}

	localStorage.setItem('tasks', JSON.stringify(tasksStorage));
	setTasks(tasksStorage);
}