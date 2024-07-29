/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3LSi5vRyusD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import { login } from "./actions"

export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#6c5ce7] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-indigo-200">
            Or{" "}
            <Link href="#" className="font-medium text-indigo-400 hover:text-indigo-300" prefetch={false}>
              request an invite to the private beta
            </Link>
          </p>
        </div>
        <form className="space-y-6" action={login} method="POST">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-md border border-transparent bg-white/10 px-3 py-2 text-white placeholder-indigo-200 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-md border border-transparent bg-white/10 px-3 py-2 text-white placeholder-indigo-200 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
                disabled
              />
              <Label htmlFor="remember-me" className="ml-2 block text-sm text-indigo-200">
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-indigo-400 hover:text-indigo-300" prefetch={false}>
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}