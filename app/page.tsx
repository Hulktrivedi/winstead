'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, Cpu, Cloud, Shield, BarChart } from 'lucide-react'

const services = [
  {
    title: "IT Consulting",
    description: "Expert advice on IT strategy and implementation",
    icon: Cpu
  },
  {
    title: "Cloud Solutions",
    description: "Seamless cloud integration and management",
    icon: Cloud
  },
  {
    title: "Cybersecurity",
    description: "Robust security measures to protect your digital assets",
    icon: Shield
  },
  {
    title: "Data Analytics",
    description: "Insightful data analysis for informed decision-making",
    icon: BarChart
  }
]

export default function Component() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white overflow-hidden">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full z-50 bg-slate-900/80 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <Mountain className="h-6 w-6 text-emerald-400" />
          <span className="ml-2 text-xl font-bold">Winstead IT Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-emerald-400 transition-colors relative group" href="#">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-screen flex items-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-slate-900"></div>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  transform: `translateY(${scrollY * (i % 5 + 1) * 0.1}px)`,
                  transition: 'transform 0.1s linear',
                }}
              ></div>
            ))}
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                  Innovate. Transform. Succeed.
                </h1>
                <p className="max-w-[600px] text-slate-200 md:text-xl/relaxed lg:text-2xl/relaxed mb-8">
                  Empowering businesses with cutting-edge IT solutions for a digital future.
                </p>
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-8 py-3 text-lg">
                  Get Started
                </Button>
              </div>
              <div className="flex-1 relative">
                <div className="w-72 h-72 rounded-full bg-emerald-500/20 absolute top-0 left-0 animate-pulse"></div>
                <div className="w-64 h-64 rounded-full bg-slate-700/50 absolute bottom-0 right-0 animate-pulse delay-300"></div>
                <Mountain className="w-full h-full text-emerald-400 relative z-10" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-slate-700 border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-emerald-400 group-hover:text-white transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© 2023 Winstead IT Solutions Private Limited. All rights reserved.</p>
            <nav className="flex gap-4">
              {['Terms', 'Privacy', 'Contact'].map((item) => (
                <Link key={item} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors" href="#">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
