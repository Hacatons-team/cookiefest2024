import {
	Button,
	Card,
	CardBody,
	Dialog,
	Input,
	Typography,
} from '@material-tailwind/react'
import React, { useState } from 'react'
export function FormLogIn() {
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleOpen = () => setOpen(cur => !cur)

	const handleSubmit = async event => {
		event.preventDefault()

		try {
			alert(`Email: ${email},\nPasswd: ${password}`)
			setEmail('')
			setPassword('')
			// const res = await axios.post('', {
			// 	body: JSON.stringify({ email, password }),
			// })
			// if (res.status == 200) {
			// 	const data = await res.data
			// 	if (data.role == 'user' || 'admin') {
			// 		redirect(`/${data.id}`)
			// 	} else {
			// 		setEmail('')
			// 		setPassword('')
			// 		redirect('/')
			// 	}
			// } else {
			// 	alert('Error status')
			// }
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<>
			<Button onClick={handleOpen}>Log In</Button>
			<Dialog
				size='xs'
				open={open}
				handler={handleOpen}
				className='bg-transparent shadow-none'
			>
				<Card className='mx-auto w-full max-w-[24rem]'>
					<CardBody className='flex flex-col gap-4'>
						<Typography variant='h4' color='blue-gray'>
							Log In
						</Typography>

						<form onSubmit={handleSubmit}>
							<div className=' grid gap-5'>
								<Input
									label='Email'
									size='lg'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>

								<Input
									label='Password'
									size='lg'
									type='password'
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
								<Button variant='gradient' type='submit' fullWidth>
									Log In
								</Button>
							</div>
						</form>
					</CardBody>
				</Card>
			</Dialog>
		</>
	)
}
