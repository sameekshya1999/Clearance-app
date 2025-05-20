import LoginForm from "@/components/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Clearance App Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Clearance App</h1>
          <p className="mt-2 text-sm text-green-600 font-medium">Save money. Save the planet.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
