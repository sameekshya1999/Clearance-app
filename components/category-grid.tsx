import Link from "next/link"
import { Shirt, Utensils, Sofa, Wrench } from "lucide-react"

export default function CategoryGrid() {
  const categories = [
    {
      name: "Clothes",
      icon: Shirt,
      href: "/products/clothes",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      name: "Kitchen",
      icon: Utensils,
      href: "/products/kitchen",
      color: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      name: "Furniture",
      icon: Sofa,
      href: "/products/furniture",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      name: "Hardware",
      icon: Wrench,
      href: "/products/hardware",
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md"
        >
          <div className={`flex h-48 flex-col items-center justify-center ${category.color}`}>
            <category.icon className={`h-16 w-16 ${category.iconColor} mb-4`} />
            <h3 className="text-xl font-medium text-gray-900">{category.name}</h3>
            <p className="mt-1 text-sm text-gray-600">Shop discounted items</p>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-green-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></div>
        </Link>
      ))}

      <div className="col-span-full mt-8">
        <div className="rounded-lg bg-green-50 p-6 border border-green-100">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Why Shop Clearance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 rounded-full bg-green-100 p-2">
                <span className="text-green-600">💰</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Save Money</h3>
                <p className="mt-1 text-xs text-gray-600">Up to 70% off retail prices</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 rounded-full bg-green-100 p-2">
                <span className="text-green-600">🌍</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Save the Planet</h3>
                <p className="mt-1 text-xs text-gray-600">Reduce waste and emissions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 rounded-full bg-green-100 p-2">
                <span className="text-green-600">✨</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Quality Products</h3>
                <p className="mt-1 text-xs text-gray-600">Same quality, lower prices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
