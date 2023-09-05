export interface IPhoto {
	albumId?: number
	id: number | string
	thumbnailUrl?: string
	title: string
	url: string | ArrayBuffer | null
}

export interface RootState {
	globalTitle: string
}
