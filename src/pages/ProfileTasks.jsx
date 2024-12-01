import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Skell from '../components/Skell'
import Task from '../components/Task/Task'
import { getData, postDataTasks } from '../utils/Fething'
import './ProfileTasks.css'

const ProfileTasks = () => {
	const { Id } = useParams()
	const { data, error, isLoading } = useQuery({
		queryKey: ['profile-tasks'],
		queryFn: () => getData(),
	})
	const mutation = useMutation({
		mutationFn: newTodo => {
			return postDataTasks(newTodo)
		},
	})
	const [isFormVisible, setFormVisible] = useState(false)
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState({
		company: '',
		price: '',
		Name: '',
		quantity: '',
	})
	const [searchQuery, setSearchQuery] = useState('')

	if (isLoading) {
		return (
			<>
				<Skell />
				<Skell />
				<Skell />
				<Skell />
				<Skell />
			</>
		)
	}

	if (error) {
		return (
			<div>
				Error fetching data: {error.message} <a href='/profile/1'>Profile 1</a>
			</div>
		)
	}

	const handleAddTask = () => {
		setFormVisible(true)
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setNewTask(prevTask => ({
			...prevTask,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		const taskToAdd = {
			id: tasks.length + 1,
			...newTask,
		}
		setTasks(prevTasks => [...prevTasks, taskToAdd])
		setNewTask({
			company: '',
			price: '',
			Name: '',
			quantity: '',
		})
		setFormVisible(false)
		mutation.mutate({ taskToAdd })
	}

	const handleSearchChange = e => {
		setSearchQuery(e.target.value)
	}

	// Filter tasks based on search query
	const filteredTasks = data
		? data.filter(
				task =>
					task.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
					task.price.toString().includes(searchQuery) ||
					task.Name.toLowerCase().includes(searchQuery) ||
					task.quantity.toString().includes(searchQuery)
		  )
		: []

	return (
		<div className='cont block grid-cols-2 bg-black m-5 p-5 rounded-lg '>
			<div className='flex justify-between'>
				<div>
					<Link to={`/profile/${Id}`} className='btn'>
						Back
					</Link>
					<button className='button-pt' onClick={handleAddTask}>
						Add New
					</button>
				</div>
				<input
					type='text'
					className='search'
					placeholder='Search...'
					value={searchQuery}
					onChange={handleSearchChange}
				/>
			</div>

			<div className='task-list'>
				{filteredTasks.length > 3 ? (
					<div className='scrollable-tasks'>
						{filteredTasks.map(task => (
							<Task
								key={task.id}
								company={task.company}
								price={task.price}
								Name={task.Name}
								quantity={task.quantity}
							/>
						))}
					</div>
				) : (
					filteredTasks.map(task => (
						<Task
							key={task.id}
							company={task.company}
							price={task.price}
							Name={task.Name}
							quantity={task.quantity}
						/>
					))
				)}
			</div>

			{/* Modal for the form */}
			{isFormVisible && (
				<div className='modal'>
					<div className='modal-content'>
						<h2 className='p-2'>Add New Task</h2>
						<form onSubmit={handleSubmit}>
							<input
								className='inp'
								type='text'
								name='company'
								value={newTask.company}
								onChange={handleInputChange}
								placeholder='Company'
								required
							/>
							<input
								className='inp'
								type='number'
								name='price'
								value={newTask.price}
								onChange={handleInputChange}
								placeholder='Price'
								required
							/>
							<input
								className='inp'
								type='text'
								name='Name'
								value={newTask.Name}
								onChange={handleInputChange}
								placeholder='Name'
								required
							/>
							<input
								className='inp'
								type='number'
								name='quantity'
								value={newTask.quantity}
								onChange={handleInputChange}
								placeholder='Quantity'
								required
							/>
							<button type='submit' className='button-pt'>
								Add Task
							</button>
							<button
								className='button-pt'
								type='button'
								onClick={() => setFormVisible(false)}
							>
								Cancel
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProfileTasks
