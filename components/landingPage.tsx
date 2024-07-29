/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k1g41T63K5A
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gradient-to-r from-indigo-500 to-indigo-700 py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-indigo-100 sm:text-5xl md:text-6xl">
              Supallama: The Ultimate Dev Tool SaaS
            </h1>
            <p className="max-w-[600px] text-indigo-100/80 md:text-xl">
              Streamline your development workflow with Supallama&apos;s powerful suite of tools. Boost productivity, improve
              collaboration, and deliver better software, faster.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-100 px-8 text-sm font-medium text-indigo-500 shadow transition-colors hover:bg-indigo-100/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Request Access
              </Link>
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-md border border-indigo-100 bg-indigo-100/10 px-8 text-sm font-medium text-indigo-100 shadow-sm transition-colors hover:bg-indigo-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Sign In
              </Link>
            </div>
          </div>
          <Image
            src="/supallama-logo.svg"
            width="600"
            height="400"
            alt="Supallama Hero"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:max-w-[500px]"
          />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-5xl">
                  Key Features of Supallama
                </h2>
                <p className="max-w-[900px] text-indigo-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Supallama offers a comprehensive suite of tools to streamline your development workflow and boost
                  productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-indigo-900">Test Drive your AI Infra before Coding!</h3>
                      <p className="text-indigo-700">
                        SupaLlama&apos;s UI allows you to quickly generate, use and benchmark the starter code for AI apps using multiple combinations of GenAI models and software architectures
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-indigo-900">Compatible with v0.dev UIs</h3>
                      <p className="text-indigo-700">
                        Use v0.dev to quickly generate, copy and paste the UI code for SupaLlama apps that are prebuilt with Next.js and Shadcn/UI.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-indigo-900">Deployment Automation</h3>
                      <p className="text-indigo-700">
                        Supallama&apos;s CI/CD tools make it easy to deploy your AI applications with a single click, ensuring
                        consistent and reliable releases.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/supallama-logo.svg"
                width="550"
                height="310"
                alt="Supallama Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-5xl">Supallama Tools</h2>
                <p className="max-w-[900px] text-indigo-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Supallama offers a simple set of open source tools to 
                  generate a starter project in the form of one or more
                  GitHub repositories!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/supallama-logo.svg"
                width="550"
                height="310"
                alt="Supallama Tools"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-indigo-900">Code Sandboxes</h3>
                      <p className="text-indigo-700">
                        Supallama&apos;s CodeSandboxes allow you to quickly test out new AI-generated user interfaces without spinning up a development environment.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-indigo-900">Avoid Vendor Lock-in</h3>
                      <p className="text-indigo-700">
                        SupaLlama&apos;s platform allows you to generate the code for standalone LLM apps that can be run independent of third-party vendors.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-indigo-900">Deployment</h3>
                      <p className="text-indigo-700">
                        Supallama&apos;s automated deployment tools make it easy to push your code to production with a
                        single click.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-indigo-900 sm:text-5xl">Pricing</h2>
                <p className="max-w-[900px] text-indigo-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Supallama offers flexible pricing plans to fit your team&apos;s needs. Choose the plan that works best for
                  you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 md:gap-8">
              <Card className="flex flex-col justify-between rounded-lg border border-indigo-100 p-6 shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-900">Starter</h3>
                  <p className="text-6xl font-bold">$19</p>
                  <p className="text-indigo-700">per developer per month</p>
                  <ul className="space-y-2 text-indigo-700">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Up to 5 team members
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Advanced collaboration tools
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Limited storage and bandwidth
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-full border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100"
                  disabled
                >
                  Get Started
                </Button>
              </Card>
              <Card className="flex flex-col justify-between rounded-lg border border-indigo-100 p-6 shadow-sm opacity-90">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-900">Pro</h3>
                  <p className="text-6xl font-bold">$49</p>
                  <p className="text-indigo-700">per developer per month</p>
                  <ul className="space-y-2 text-indigo-700">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Up to 20 team members
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Advanced collaboration tools
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Increased storage and bandwidth
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-full border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100"
                  disabled
                >
                  Get Started
                </Button>
              </Card>
              <Card className="flex flex-col justify-between rounded-lg border border-indigo-100 p-6 shadow-sm opacity-90">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-900">Enterprise</h3>
                  <p className="text-6xl font-bold">$99</p>
                  <p className="text-indigo-700">per developer per month</p>
                  <ul className="space-y-2 text-indigo-700">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Unlimited team members
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Enterprise-grade collaboration tools
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Unlimited storage and bandwidth
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="mt-6 w-full border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100"
                  disabled
                >
                  Get Started
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}