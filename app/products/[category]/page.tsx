import Header from "@/components/header"
import ProductGrid from "@/components/product-grid"
import { capitalizeFirstLetter } from "@/lib/utils"

export default function ProductListingPage({ params }: { params: { category: string } }) {
  const category = params.category
  const formattedCategory = capitalizeFirstLetter(category)

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{formattedCategory}</h1>
          <p className="mt-2 text-gray-600">Browse our discounted {category.toLowerCase()} collection and save.</p>
        </div>
        <ProductGrid category={category} />
      </main>
    </>
  )
}
