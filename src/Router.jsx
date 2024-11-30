import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Profile from './pages/Profile'
import ProfileTasks from './pages/ProfileTasks'
import ProfileReting from './pages/Reting'
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Profile />} />
					<Route path='/profile/:Id' element={<Profile />} />
					<Route path='/profile/:Id/tasks' element={<ProfileTasks />} />
					<Route path='/profile/:Id/reting' element={<ProfileReting />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
