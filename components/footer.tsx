import Link from "next/link"
import { Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
            <Leaf className="h-5 w-5" />
            <span className="font-medium">Clearance App</span>
          </div>

          <p className="max-w-2xl text-sm text-gray-600 mb-6">
            🌿 Every clearance purchase helps reduce waste and carbon emissions. Together, we make Nepal cleaner and
            greener.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-600">
            <Link href="/about" className="hover:text-green-600">
              About Us
            </Link>
            <Link href="#" className="hover:text-green-600">
              Contact
            </Link>
            <Link href="#" className="hover:text-green-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-green-600">
              Terms of Service
            </Link>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Clearance App. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
