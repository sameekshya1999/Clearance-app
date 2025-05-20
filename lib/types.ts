export interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  originalPrice: number
  image: string
  features?: string[]
}

export interface CartItem extends Product {
  quantity: number
}
