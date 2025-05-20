import CheckoutForm from "@/components/checkout-form"
import Header from "@/components/header"

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Checkout</h1>
          <p className="mt-2 text-gray-600">Complete your order details.</p>
        </div>
        <CheckoutForm />
      </main>
    </>
  )
}
