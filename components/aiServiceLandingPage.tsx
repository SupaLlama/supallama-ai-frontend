import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Database, Globe, Layers, Zap } from 'lucide-react'

export default function AIServiceLanding() {
  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="mr-1" role="img" aria-label="Llama">🦙</span>SupaLlama AI Dev Tools & Services</h1>
          <p className="text-xl md:text-2xl mb-8">Take Your AI Apps from Prototype to Production in Under an Hour</p>
          <Link 
            href="/login" 
            className="inline-flex h-12 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-100/10 px-8 text-xl text-indigo-100 shadow-sm transition-colors hover:bg-indigo-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign In 
          </Link>
        </div>
        
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Database className="h-10 w-10 text-indigo-500" />, title: "Automated Dataset Generation", description: "Create high-quality datasets tailored to your needs" },
              { icon: <Layers className="h-10 w-10 text-indigo-500" />, title: "LLM Fine-Tuning & Deployment", description: "Customize and deploy state-of-the-art language models" },
              { icon: <Globe className="h-10 w-10 text-indigo-500" />, title: "AI & Full-Stack App Hosting", description: "Seamlessly deploy and host your AI-powered applications" },
              { icon: <Code className="h-10 w-10 text-indigo-500" />, title: "Code Generation & Iteration", description: "Accelerate development with AI-assisted coding tools" },
              { icon: <Zap className="h-10 w-10 text-indigo-500" />, title: "Scalable Infrastructure", description: "Robust and scalable infrastructure for your AI projects" },
              { icon: <CheckCircle className="h-10 w-10 text-indigo-500" />, title: "Expert Support", description: "White-glove support from our team of AI specialists" },
            ].map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold text-center text-indigo-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-indigo-100 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Small Business", price: "$249", period: "per month", features: ["Ideal for startups, nonprofits & small teams", "Access to all features and managed hosting", "Up to 5 team members", "Standard integrations"] },
              { name: "Enterprise", price: "$999", period: "per month", features: ["For large and government organizations", "Managed hosting and self-hosting options", "Unlimited team members", "Custom integrations"] },
            ].map((plan, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-indigo-700">{plan.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-gray-500">starts at </span>
                    <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                    <span className="text-gray-500"> {plan.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/login/signup" prefetch={false} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-large rounded-large py-3 inline-flex justify-center rounded">Choose Plan</Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800">Ready to Supercharge Your AI Projects?</h2>
          <p className="text-xl mb-8 text-gray-600">Request access to SupaLlama today and transform your business with cutting-edge AI solutions.</p>
          <Image
            src="/supallama-logo.svg"
            width="600"
            height="400"
            alt="Supallama Hero"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:max-w-[500px]"
          />
          <Link href="/login/signup" prefetch={false} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl rounded-large px-8 py-4 inline-flex justify-center rounded">Request an Invite to the Beta</Link>
          {/* <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-8">
            Request an Invite to the Beta
          </Button> */}
        </div>
      </section>
    </div>
  )
}