"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Leaf, ShoppingCart, CreditCard, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"
import { getProductById } from "@/lib/data"
import type { Product } from "@/lib/types"
import { formatCurrency, capitalizeFirstLetter } from "@/lib/utils"

export default function ProductDetail({ productId, category }: { productId: string; category: string }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be an API call
        const data = await getProductById(productId)
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number.parseInt(e.target.value))
  }

  const handleAddToCart = () => {
    if (!product) return

    setIsAddingToCart(true)

    // Add to cart
    addToCart(product, quantity)

    // Show success toast
    toast({
      title: "Added to cart",
      description: `${quantity} ${quantity > 1 ? "items" : "item"} added to your cart.`,
      duration: 3000,
    })

    setTimeout(() => {
      setIsAddingToCart(false)
    }, 500)
  }

  const handleBuyNow = () => {
    if (!product) return

    // Add to cart and redirect to checkout
    addToCart(product, quantity)
    window.location.href = "/checkout"
  }

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="h-96 rounded-lg bg-gray-200"></div>
          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            <div className="h-32 rounded bg-gray-200"></div>
            <div className="h-8 w-1/3 rounded bg-gray-200"></div>
            <div className="h-10 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return <div className="text-center">Product not found</div>
  }

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <>
      <div className="mb-6">
        <Link
          href={`/products/${category}`}
          className="inline-flex items-center text-sm text-gray-600 hover:text-green-600"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to {capitalizeFirstLetter(category)}
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg bg-white">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
          {discountPercentage > 0 && (
            <div className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">
              {discountPercentage}% OFF
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{product.name}</h1>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-500 line-through">{formatCurrency(product.originalPrice)}</p>
            <p className="text-3xl font-bold text-green-600">{formatCurrency(product.price)}</p>
            <p className="text-sm text-green-600">You save {formatCurrency(product.originalPrice - product.price)}</p>
          </div>

          <div className="prose prose-sm max-w-none text-gray-700">
            <p>{product.description}</p>
            <ul>
              {product.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-green-500 focus:ring-green-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {isAddingToCart ? "Adding..." : "Add to Cart"}
            </Button>
            <Button className="flex-1 bg-green-700 hover:bg-green-800" onClick={handleBuyNow}>
              <CreditCard className="mr-2 h-5 w-5" />
              Buy Now
            </Button>
          </div>

          <div className="rounded-lg bg-green-50 p-4 text-sm text-gray-700">
            <div className="flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-green-600" />
              <p className="font-medium">Environmental Impact</p>
            </div>
            <p className="mt-2">
              Buying this product saves approximately 0.3kg CO₂ emissions by preventing it from becoming waste.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-medium text-gray-900">Shipping Information</h3>
            <p className="mt-1 text-sm text-gray-600">
              Free delivery within Kathmandu Valley. Delivery to other locations within 3-5 business days.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
