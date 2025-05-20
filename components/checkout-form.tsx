"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

export default function CheckoutForm() {
  const router = useRouter()
  const { cartItems, cartTotal, clearCart } = useCart()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cash",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, you would make a POST request to /api/checkout
      // const response = await fetch('/api/checkout', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     items: cartItems,
      //     total: orderSummary.total
      //   }),
      // });

      // if (!response.ok) throw new Error('Checkout failed');

      // Show success toast
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. Your order has been placed.",
        duration: 5000,
      })

      // Clear cart
      clearCart()

      // Redirect to success page
      router.push("/dashboard?checkout=success")
    } catch (error) {
      console.error("Checkout error:", error)
      toast({
        title: "Checkout failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate order summary
  const shipping = cartTotal > 0 ? 200 : 0
  const total = cartTotal + shipping

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-medium text-gray-900">Shipping Information</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} required className="mt-1" />
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>

            <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange} className="space-y-3">
              <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="flex-1 cursor-pointer">
                  Cash on Delivery
                </Label>
              </div>

              <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3">
                <RadioGroupItem value="esewa" id="esewa" />
                <Label htmlFor="esewa" className="flex-1 cursor-pointer">
                  eSewa
                </Label>
              </div>

              <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3">
                <RadioGroupItem value="khalti" id="khalti" />
                <Label htmlFor="khalti" className="flex-1 cursor-pointer">
                  Khalti
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Complete Order"}
          </Button>
        </form>
      </div>

      <div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 sticky top-8">
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

          <div className="mt-6 rounded-lg bg-green-50 p-4">
            <h3 className="text-sm font-medium text-gray-900">Your Impact</h3>
            <p className="mt-2 text-sm text-gray-600">
              By purchasing these clearance items, you're helping reduce waste and carbon emissions. Thank you for
              shopping sustainably!
            </p>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            <p>
              By completing your purchase, you agree to our Terms of Service and Privacy Policy. Your order will be
              processed securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
