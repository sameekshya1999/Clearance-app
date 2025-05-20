import Header from "@/components/header"
import { Leaf, Package, ShoppingBag } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">About Clearance App</h1>
          <p className="mt-2 text-gray-600">Our mission and impact.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Clearance App was created with a dual purpose: to help consumers save money while simultaneously reducing
            waste and environmental impact. By connecting shoppers with overstocked and clearance products, we prevent
            perfectly good items from ending up in landfills.
          </p>

          <h2 className="text-xl font-semibold mb-4">Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">CO₂ Saved</h3>
              <p className="text-gray-700">Over 5,000 tons of CO₂ emissions prevented through sustainable shopping.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Package className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Less Waste</h3>
              <p className="text-gray-700">
                More than 100,000 products saved from landfills and given a second chance.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <ShoppingBag className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Sustainable Shopping</h3>
              <p className="text-gray-700">Helping build a circular economy in Nepal through conscious consumption.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border border-green-100">
          <h2 className="text-xl font-semibold mb-4">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-green-600">25,000+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-green-600">100+</p>
              <p className="text-sm text-gray-600">Retail Partners</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-green-600">रु 15M+</p>
              <p className="text-sm text-gray-600">Customer Savings</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-green-600">30+</p>
              <p className="text-sm text-gray-600">Tons of Waste Prevented</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
