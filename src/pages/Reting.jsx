import { Card, CardBody, Collapse } from '@material-tailwind/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { CiMoneyCheck1, CiUser, CiViewList } from 'react-icons/ci'
import { Link, useParams } from 'react-router-dom'
import { getDataBranchRating } from '../utils/Fething'
import './Reting.css'
function Reting() {
	const { Id } = useParams()
	const [open, setOpen] = React.useState(false)
	const [open2, setOpen2] = React.useState(false)
	const { data } = useQuery({
		queryKey: ['branch-rating'],
		queryFn: getDataBranchRating,
	})

	const toggleOpen = () => {
		setOpen(true)
		setOpen2(false)
	}

	const toggleOpen2 = () => {
		setOpen2(true)
		setOpen(false)
	}
	return (
		<>
			<div class='RatingContainer'>
				<Link to={`/profile/${Id}`} className='bat'>
					Back
				</Link>
				<div class='CardContainer'>
					<h1>Новосибирск</h1>
					<p>О нас</p>
					<p className='flex justify-center gap-5'>
						<CiUser size={24} />
						180 сотрудников
					</p>
					<p className='flex justify-center '>
						<CiViewList size={24} />
						450 000$ заработка
					</p>
					<p className='flex justify-center gap-5'>
						<CiMoneyCheck1 size={24} />
						01.08.24-28.12.25
					</p>
					<button className='bat' onClick={toggleOpen}>
						my branch
					</button>
					<button className='bat' onClick={toggleOpen2}>
						branch competition
					</button>
					<Collapse open={open}>
						<Card className='my-2 mx-auto w-12/12'>
							<CardBody>
								<div class='RetingContainer'>
									<div class='containerCOntain'>
										<div class='circleReting'></div>
										<div class='boxreting'>
											<p>Id: {Id}</p>
											<p>Id2: {Id}</p>
											<p>Id3: {Id}</p>
											<p>Id4: {Id}</p>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</Collapse>
					<Collapse open={open2}>
						<Card className='my-2 mx-auto w-12/12'>
							<CardBody>
								<div class='RetingContainer'>
									<div class='containerCOntain'>
										<div class='circleReting'></div>
										<div class='boxreting'>
											{data &&
												Array.from(data).map(({ id, branch }) => (
													<p key={id}>{branch}</p>
												))}
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</Collapse>
				</div>
			</div>
		</>
	)
}

export default Reting
