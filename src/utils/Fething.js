import axios from 'axios'

export const url = 'https://67094aecaf1a3998baa10d1b.mockapi.io/card'

export async function getData(data) {
	try {
		const res = await axios.get(`${url}` || data)
		console.log(res.data)
		return res.data
	} catch (e) {
		console.log('Ошибка: ' + e)
	}
}

export async function getDataId(id) {
	try {
		const res = await axios.get(`${url}/${id}`)
		console.log(res.data)
		return res.data
	} catch (e) {
		console.log('Ошибка: ' + e)
	}
}
export async function postDataTasks({ id, price, Name, company, quantity }) {
	try {
		const res = await axios.post(`${url}`, {
			id,
			price,
			Name,
			company,
			quantity,
		})
		console.log(res.data)
		return res.data
	} catch (e) {
		console.log('Ошибка: ' + e)
	}
}
