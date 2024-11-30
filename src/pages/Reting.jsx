import { Card, CardBody, Collapse, Typography } from '@material-tailwind/react'
import React from 'react'
import { CiMoneyCheck1, CiUser, CiViewList } from 'react-icons/ci'
import { Link, useParams } from 'react-router-dom'
import './Reting.css'
function Reting() {
	const { Id } = useParams()
	const [open, setOpen] = React.useState(false)

	const toggleOpen = () => setOpen(cur => !cur)
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
					<button className='bat'>branch competition</button>
					<Collapse open={open}>
						<Card className='my-2 mx-auto w-12/12'>
							<CardBody>
								<Typography>
									Use our Tailwind CSS collapse for your website. You can use if
									for accordion, collapsible items and much more.
								</Typography>
							</CardBody>
						</Card>
					</Collapse>
				</div>
			</div>
		</>
	)
}

export default Reting
