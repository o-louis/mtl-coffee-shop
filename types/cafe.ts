export type CategoryId =
  | 'work'
  | 'takeaway'
  | 'reading'
  | 'social'
  | 'specialty'

export interface Category {
  id: CategoryId
  icon: string
}

export interface Cafe {
  id: string
  name: string
  address: string
  neighborhood: string
  coordinates: {
    lat: number
    lng: number
  }
  categories: CategoryId[]
  description?: string
  website?: string
  instagram?: string
  hours?: string
  imageUrl?: string
}
