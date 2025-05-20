"use client"

import { useState, useEffect } from "react"
import ProductCard from "./product-card"
import { getProductsByCategory } from "@/lib/data"
import type { Product } from "@/lib/types"

export default function ProductGrid({ category }: { category: string }) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        const data = await getProductsByCategory(category)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse rounded-lg bg-gray-100 p-4">
            <div className="mb-4 h-48 w-full rounded-md bg-gray-200"></div>
            <div className="mb-2 h-4 w-2/3 rounded bg-gray-200"></div>
            <div className="mb-4 h-3 w-1/2 rounded bg-gray-200"></div>
            <div className="mb-2 h-5 w-1/3 rounded bg-gray-200"></div>
            <div className="h-8 w-full rounded-md bg-gray-200"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
