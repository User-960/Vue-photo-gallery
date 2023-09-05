import { IPhoto } from '@/interfaces/photo.interfaces'

export interface PhotosState {
	photos: Array<IPhoto>
	photosEmptyText: string
}
