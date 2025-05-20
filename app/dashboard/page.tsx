import CategoryGrid from "@/components/category-grid"
import Header from "@/components/header"

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Welcome to Clearance App</h1>
          <p className="mt-2 text-gray-600">Discover overstocked and clearance products at amazing prices.</p>
        </div>
        <CategoryGrid />
      </main>
    </>
  )
}
