import axios from 'axios'

import { IPhoto } from '@/interfaces/photo.interfaces'

const PHOTOS = 'photos'

class UsersService {
	async getUsers(url: string) {
		try {
			const { data } = await axios.get<IPhoto[]>(`${url}/${PHOTOS}?_limit=20`, {
				method: 'GET'
			})

			return data
		} catch (error) {
			throw new Error()
		}
	}
}

export default new UsersService()
