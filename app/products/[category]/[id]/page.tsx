import Header from "@/components/header"
import ProductDetail from "@/components/product-detail"

export default function ProductDetailPage({ params }: { params: { id: string; category: string } }) {
  const productId = params.id
  const category = params.category

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductDetail productId={productId} category={category} />
      </main>
    </>
  )
}
