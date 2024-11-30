import { Spinner } from '@material-tailwind/react'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { CgGhostCharacter } from 'react-icons/cg'
import { Link, useParams } from 'react-router-dom'
import Task from '../components/Task/Task'
import { getData } from '../utils/Fething'
import './Profile.css'
function Profile() {
	const { Id } = useParams()
	const { data, error, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => getData(),
	})

	const [searchQuery, setSearchQuery] = useState('')

	// Рандомный цвет ниже))
	const getRandomColor = () => {
		const colors = [
			'blue',
			'red',
			'green',
			'amber',
			'teal',
			'indigo',
			'purple',
			'pink',
		]
		const randomIndex = Math.floor(Math.random() * colors.length)
		return colors[randomIndex]
	}

	if (isLoading) {
		const spinnerColor = getRandomColor()
		return <Spinner className='h-12 w-12' color={spinnerColor} />
	}

	if (error) {
		return (
			<div>
				Error fetching data: {error.message} <a href='/profile/1'>Profile 1</a>
				<CgGhostCharacter />
			</div>
		)
	}

	// Filter tasks based on the search query
	const filteredTasks = data.filter(task =>
		task.Name.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<>
			<body>
				<div className='container1'>
					<div className='avatar'></div>
					<div className='avatarBackground'></div>
					<header className='header bg-gray-100 p-4 shadow-md '>
						<div className='profile flex items-center justify-between gap'>
							<div className='info'>
								<h1 className='name text-3xl font-bold'>Name Surname</h1>
								<p className='title text-2xl text-gray-700'>
									Software Engineer
								</p>
								<p className='company text-lg text-gray-600'>
									CompanyName branch #2
								</p>
								<div className='actions flex space-x-4 mt-5'>
									<button className='btn edit-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
										Edit Profile
									</button>
									<button className='btn exit-btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
										Exit
									</button>
								</div>
							</div>
						</div>
						<div className='role mt-4'>
							<p className='current-role text-lg'>
								Current role:{' '}
								<span className='role-highlight font-semibold'>
									Software Engineer
								</span>
							</p>
						</div>
					</header>

					<section className='rating'>
						<div className='rating-item'>
							your current place
							<br />
							<strong>2-ond place</strong>
						</div>
						<div className='rating-item'>
							your number of orders
							<br />
							<strong>37 orders</strong>
						</div>
						<div className='rating-item'>
							your earning
							<br />
							<strong>30 457$</strong>
						</div>
						<div className='rating-item'>
							премия
							<br />
							<strong>7 713$</strong>
						</div>
						<Link to={`/profile/${Id}/reting`} className='btn'>
							See Rating
						</Link>
					</section>

					<div className='tasks'>
						<div className='tasks-header px-5'>
							<div className='flex gap-10'>
								<button className='btn'>Add new</button>
								<Link to={`/profile/${Id}/tasks`} className='btn'>
									All task
								</Link>
							</div>

							<input
								type='text'
								className='search'
								placeholder='Search...'
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
							/>
						</div>
						<div className='block gap-20'>
							{filteredTasks.slice(-3).map((task, index) => (
								<Task
									key={task.id || index}
									company={task.company}
									price={task.price}
									Name={task.Name}
									quantity={task.quantity}
								/>
							))}
						</div>
					</div>
				</div>
			</body>
		</>
	)
}
export default Profile
