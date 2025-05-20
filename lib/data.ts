import type { Product } from "./types"

// Mock data for products
const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton T-Shirt",
    description: "Eco-friendly and comfortable cotton t-shirt, perfect for everyday wear.",
    category: "clothes",
    price: 800,
    originalPrice: 1500,
    image: "/placeholder.svg?height=300&width=300",
    features: ["100% organic cotton", "Eco-friendly dyes", "Fair trade certified"],
  },
  {
    id: "2",
    name: "Denim Jeans",
    description: "Classic denim jeans with a modern fit. Durable and stylish.",
    category: "clothes",
    price: 1200,
    originalPrice: 2500,
    image: "/placeholder.svg?height=300&width=300",
    features: ["Premium denim", "Comfortable stretch", "Multiple pockets"],
  },
  {
    id: "3",
    name: "Stainless Steel Water Bottle",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "kitchen",
    price: 600,
    originalPrice: 1200,
    image: "/placeholder.svg?height=300&width=300",
    features: ["BPA-free", "Leak-proof lid", "Fits standard cup holders"],
  },
  {
    id: "4",
    name: "Non-Stick Frying Pan",
    description: "High-quality non-stick frying pan with ergonomic handle.",
    category: "kitchen",
    price: 1500,
    originalPrice: 2800,
    image: "/placeholder.svg?height=300&width=300",
    features: ["PFOA-free coating", "Induction compatible", "Dishwasher safe"],
  },
  {
    id: "5",
    name: "Wooden Coffee Table",
    description: "Elegant wooden coffee table with storage shelf. Perfect centerpiece for any living room.",
    category: "furniture",
    price: 4500,
    originalPrice: 8000,
    image: "/placeholder.svg?height=300&width=300",
    features: ["Solid wood construction", "Easy assembly", "Scratch-resistant finish"],
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    description: "Comfortable office chair with lumbar support and adjustable height.",
    category: "furniture",
    price: 3500,
    originalPrice: 6000,
    image: "/placeholder.svg?height=300&width=300",
    features: ["Breathable mesh back", "Adjustable armrests", "360° swivel"],
  },
  {
    id: "7",
    name: "Cordless Drill Set",
    description: "Powerful cordless drill with multiple drill bits and carrying case.",
    category: "hardware",
    price: 2800,
    originalPrice: 4500,
    image: "/placeholder.svg?height=300&width=300",
    features: ["20V lithium-ion battery", "Variable speed", "LED work light"],
  },
  {
    id: "8",
    name: "Tool Box Kit",
    description: "Complete tool box with essential tools for home repairs and maintenance.",
    category: "hardware",
    price: 3200,
    originalPrice: 5500,
    image: "/placeholder.svg?height=300&width=300",
    features: ["72 pieces included", "Durable carrying case", "Heat-treated steel tools"],
  },
]

// Mock API functions
export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return products.filter((product) => product.category === category)
}

export async function getProductById(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const product = products.find((product) => product.id === id)
  return product || null
}
