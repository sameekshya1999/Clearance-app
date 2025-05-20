import CartItems from "@/components/cart-items"
import Header from "@/components/header"

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Your Cart</h1>
          <p className="mt-2 text-gray-600">Review your items before checkout.</p>
        </div>
        <CartItems />
      </main>
    </>
  )
}
