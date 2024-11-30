import React from 'react'
import { CiCircleCheck, CiCircleRemove, CiClock1 } from 'react-icons/ci'
import './Task.css'

function Task({ id, company, price, Name, quantity }) {
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
							className={`focus:bg-green-700 hover:bg-green-700/70 rounded-xl`}
						>
							<CiCircleCheck color='white' size={30} />
						</button>
						<button
							className={`focus:bg-yellow-800 hover:bg-yellow-800/70 rounded-xl`}
						>
							<CiClock1 color='white' size={30} />
						</button>
						<button
							className={`focus:bg-red-800/90 hover:bg-red-800/70 rounded-xl`}
						>
							<CiCircleRemove color='white' size={30} />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Task
