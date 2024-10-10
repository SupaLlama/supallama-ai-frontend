import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Database, Globe, Layers, Zap } from 'lucide-react'

export default function AIServiceLanding() {
  return (
    <div className="min-h-screen bg-indigo-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SupaLlama Managed AI Services</h1>
          <p className="text-xl md:text-2xl mb-8">Empower Your Business with Cutting-Edge AI Solutions</p>
          <Button className="bg-white text-indigo-600 hover:bg-indigo-100 text-lg py-6 px-8">
            Get Started
          </Button>
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
              { icon: <Globe className="h-10 w-10 text-indigo-500" />, title: "API & Full-Stack App Deployment", description: "Seamlessly deploy and host your AI-powered applications" },
              { icon: <Code className="h-10 w-10 text-indigo-500" />, title: "Code Generation & Iteration", description: "Accelerate development with AI-assisted coding tools" },
              { icon: <Zap className="h-10 w-10 text-indigo-500" />, title: "Scalable Infrastructure", description: "Robust and scalable infrastructure for your AI projects" },
              { icon: <CheckCircle className="h-10 w-10 text-indigo-500" />, title: "Expert Support", description: "24/7 support from our team of AI specialists" },
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
              { name: "Small Business", price: "$249", period: "per month", features: ["Ideal for startups & small teams", "Full access to all features", "Up to 5 team members", "24/7 support"] },
              { name: "Enterprise", price: "$999", period: "per month", features: ["For large organizations", "Advanced security features", "Unlimited team members", "Dedicated account manager", "Custom integrations"] },
            ].map((plan, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-indigo-700">{plan.name}</CardTitle>
                  <CardDescription className="text-center">
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
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Choose Plan</Button>
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
          <p className="text-xl mb-8 text-gray-600">Join SupaLlama AI Services today and transform your business with cutting-edge AI solutions.</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-8">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  )
}