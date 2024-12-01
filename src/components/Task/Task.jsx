import axios from 'axios'
import React, { useState } from 'react'
import { CiCircleCheck, CiCircleRemove, CiClock1 } from 'react-icons/ci'
import './Task.css'

function Task({ id, company, price, Name, quantity }) {
	const handleStatusChange = async newStatus => {
		setStatus(newStatus)
		await axios.post('https://67094aecaf1a3998baa10d1b.mockapi.io/card', {
			id,
			status: newStatus,
		})
	}
	const [status, setStatus] = useState('compl')
	return (
		<>
			<div key={id} className='container gap-10'>
				<div className='card'>
					<h3>
						сумма сделки: <span>{price} Рублей</span>
					</h3>
					<h3>Имя товара: {Name}</h3>
				</div>
				<div className='date'>
					<code>{company} inc.</code>
					<p>Колличество: {quantity}</p>
					<div className='date2 '>
						<button
							className={`rounded-xl ${
								status === 'compl' ? 'bg-green-700' : 'bg-o'
							} hover:bg-green-700/70`}
							onClick={() => handleStatusChange('compl')}
							disabled={status === 'compl'}
						>
							<CiCircleCheck color='green' size={30} />
						</button>
						<button
							className={`rounded-xl ${
								status === 'proc' ? 'bg-yellow-800' : 'bg-o'
							} hover:bg-yellow-700/70`}
							onClick={() => handleStatusChange('proc')}
							disabled={status === 'proc'}
						>
							<CiClock1 color='yellow' size={30} />
						</button>
						<button
							className={`rounded-xl ${
								status === 'canc' ? 'bg-red-800' : 'bg-o'
							} hover:bg-red-700/70`}
							onClick={() => handleStatusChange('canc')}
							disabled={status === 'canc'}
						>
							<CiCircleRemove color='red' size={30} />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Task
