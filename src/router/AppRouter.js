import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import {AllComponent} from '../components/AllComponent';
import {ActiveComponent} from '../components/ActiveComponent';
import {CompletedComponent} from '../components/CompletedComponent';

export const AppRouter = ({tasks, setTasks, sendValue}) => {
	return (
		<BrowserRouter>
			<nav>
              <ul>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/to-do-app/all">All</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/to-do-app/active">Active</NavLink>
                </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/to-do-app/completed">Completed</NavLink>
                </li>
              </ul>
            </nav>
			<Routes>
				<Route path="/" element={<AllComponent tasks={tasks} setTasks={setTasks}/>}/>
				<Route path="/to-do-app" element={<AllComponent tasks={tasks} setTasks={setTasks}/>}/>
				<Route path="/to-do-app/all" element={<AllComponent tasks={tasks} setTasks={setTasks} sendValue={sendValue}/>}/>
				<Route path="/to-do-app/active" element={<ActiveComponent tasks={tasks} setTasks={setTasks} sendValue={sendValue}/>}/>
				<Route path="/to-do-app/completed" element={<CompletedComponent tasks={tasks} setTasks={setTasks}/>}/>
				<Route path="*" element={<AllComponent tasks={tasks} setTasks={setTasks}/>}/>
			</Routes>	
		</BrowserRouter>
	);
}