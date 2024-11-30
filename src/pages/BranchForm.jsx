import React, { useState } from 'react'

const BranchForm = () => {
	const [branchName, setBranchName] = useState('')
	const [employees, setEmployees] = useState('')
	const [earnings, setEarnings] = useState('')
	const [dateRange, setDateRange] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		// Process the form data here
		console.log({ branchName, employees, earnings, dateRange })
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Branch Name:
				<input
					type='text'
					value={branchName}
					onChange={e => setBranchName(e.target.value)}
				/>
			</label>
			<label>
				Employees:
				<input
					type='number'
					value={employees}
					onChange={e => setEmployees(e.target.value)}
				/>
			</label>
			<label>
				Earnings:
				<input
					type='text'
					value={earnings}
					onChange={e => setEarnings(e.target.value)}
				/>
			</label>
			<label>
				Date Range:
				<input
					type='text'
					value={dateRange}
					onChange={e => setDateRange(e.target.value)}
				/>
			</label>
			<button type='submit'>Submit</button>
		</form>
	)
}

export default BranchForm
