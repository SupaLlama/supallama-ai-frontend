import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react'

import { login } from "@/app/login/actions"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-indigo-600 text-white p-6">
          <CardTitle className="text-2xl font-bold">Welcome Back to SupaLlama <span className="mr-2" role="img" aria-label="Llama">🦙</span></CardTitle>
          <CardDescription className="text-indigo-200">Log in to your account</CardDescription>
        </CardHeader>
          <form action={login}>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-indigo-800">Email</Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" size={18} />
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    className="pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-indigo-800">Password</Label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" size={18} />
                  <Input 
                    id="password" 
                    name="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    className="pl-10 pr-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500" 
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-indigo-500 hover:text-indigo-600"
                  >
                    {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="remember" className="ml-2 block text-sm text-indigo-800">
                    Remember me
                  </Label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </Link>
                </div>
              </div> */}
            </CardContent>
            <CardFooter className="bg-indigo-50 p-6">
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Log In
              </Button>
            </CardFooter>
          </form>
        {/* <div className="text-center pb-6">
          <p className="text-sm text-indigo-800">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div> */}

      </Card>
    </div>
  )
}