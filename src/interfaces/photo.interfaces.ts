export interface IPhoto {
	albumId?: number
	id: number | string
	thumbnailUrl?: string
	title: string
	url: string | ArrayBuffer | null
}
