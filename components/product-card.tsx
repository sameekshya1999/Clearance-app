"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

export default function ProductCard({ product }: { product: Product }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAddingToCart(true)

    // Add to cart
    addToCart(product, 1)

    // Show success toast
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    })

    setTimeout(() => {
      setIsAddingToCart(false)
    }, 500)
  }

  return (
    <Link
      href={`/products/${product.category}/${product.id}`}
      className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=400"}
          alt={product.name}
          width={400}
          height={300}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discountPercentage > 0 && (
          <div className="absolute right-0 top-0 rounded-bl-lg bg-green-600 px-2 py-1 text-xs font-bold text-white">
            {discountPercentage}% OFF
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 md:text-base">{product.name}</h3>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">{product.description}</p>

        <div className="mt-2 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500 line-through">{formatCurrency(product.originalPrice)}</p>
            <p className="text-lg font-bold text-green-600">{formatCurrency(product.price)}</p>
          </div>

          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            {isAddingToCart ? "Adding..." : "Add"}
          </Button>
        </div>
      </div>
    </Link>
  )
}
