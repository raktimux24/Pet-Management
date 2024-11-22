import { Button } from "@/components/ui/button";
import { PawPrint, Calendar, Bell, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-800/95 backdrop-blur supports-[backdrop-filter]:bg-slate-800/75">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-indigo-500" />
            <span className="text-xl font-bold">PetCare</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-200 hover:text-indigo-500 transition-colors">Features</a>
            <a href="#testimonials" className="text-slate-200 hover:text-indigo-500 transition-colors">Testimonials</a>
            <Button variant="ghost" className="text-slate-200 hover:text-indigo-500">Log in</Button>
            <Button className="bg-indigo-500 text-white hover:bg-indigo-600">Sign up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Simplify Your Pet's Care with Our All-in-One Management App
              </h1>
              <p className="text-xl text-slate-300">
                Track health records, manage routines, and never miss important appointments. Your perfect companion in pet care management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
                alt="Happy dog with owner"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our App?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Everything you need to provide the best care for your furry friends, all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Pet Parents Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.pet}</p>
                  </div>
                </div>
                <p className="text-slate-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Pet's Care?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of happy pet owners who trust our app to manage their pets' care.
          </p>
          <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <PawPrint className="h-8 w-8 text-indigo-500" />
                <span className="text-xl font-bold">PetCare</span>
              </div>
              <p className="text-slate-300">
                Your perfect companion in pet care management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#features" className="hover:text-indigo-500">Features</a></li>
                <li><a href="#testimonials" className="hover:text-indigo-500">Testimonials</a></li>
                <li><a href="#" className="hover:text-indigo-500">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-indigo-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-500">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-indigo-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-indigo-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>© 2024 PetCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-indigo-500" />,
    title: "Smart Scheduling",
    description: "Easily manage vet appointments, grooming sessions, and daily routines with our intuitive calendar.",
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-500" />,
    title: "Health Tracking",
    description: "Keep track of vaccinations, medications, and health records all in one secure place.",
  },
  {
    icon: <Bell className="h-6 w-6 text-indigo-500" />,
    title: "Timely Reminders",
    description: "Never miss important dates with customizable notifications for all your pet care needs.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    pet: "Owner of Max (Golden Retriever)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "This app has made managing Max's care so much easier. I love how I can track everything in one place!",
  },
  {
    name: "Michael Chen",
    pet: "Owner of Luna (Siamese Cat)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "The reminders feature is a lifesaver. I never forget Luna's medication or vet appointments anymore.",
  },
  {
    name: "Emily Rodriguez",
    pet: "Owner of Bella (French Bulldog)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "Beautiful interface and so easy to use. It's exactly what I needed to keep track of Bella's schedule.",
  },
];