"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, ShoppingBag, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

export default function CartItems() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  const shipping = cartTotal > 0 ? 200 : 0 // रु 200 shipping fee
  const total = cartTotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-12">
        <ShoppingBag className="mb-4 h-16 w-16 text-gray-400" />
        <h2 className="text-xl font-medium text-gray-900">Your cart is empty</h2>
        <p className="mt-1 text-gray-500">Start shopping to add items to your cart</p>
        <Link href="/dashboard">
          <Button className="mt-6 bg-green-600 hover:bg-green-700">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
            >
              <div className="mb-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 sm:mb-0">
                <Image
                  src={item.image || "/placeholder.svg?height=80&width=80"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col sm:ml-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      <Link href={`/products/${item.category}/${item.id}`}>{item.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                  </div>
                  <p className="text-base font-medium text-gray-900">{formatCurrency(item.price)}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm text-gray-600">
                      Qty:
                    </label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                      className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-green-500 focus:ring-green-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    className="text-sm font-medium text-red-600 hover:text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">{formatCurrency(cartTotal)}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-sm text-gray-600">Shipping</p>
              <p className="text-sm font-medium text-gray-900">{formatCurrency(shipping)}</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <p className="text-base font-medium text-gray-900">Total</p>
                <p className="text-base font-medium text-gray-900">{formatCurrency(total)}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/checkout">
              <Button className="w-full bg-green-600 hover:bg-green-700">Proceed to Checkout</Button>
            </Link>
          </div>

          <div className="mt-6 rounded-lg bg-green-50 p-4">
            <div className="flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-green-600" />
              <p className="text-sm font-medium text-gray-900">Environmental Impact</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Your purchase will help save approximately 0.8kg CO₂ emissions by preventing these items from becoming
              waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
