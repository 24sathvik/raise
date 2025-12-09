"use client"

import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { Check, Download, ArrowLeft } from "lucide-react"

export default function ProductDetailPage() {
  const { id } = useParams()

  const features = [
    "AI-powered image analysis",
    "Ultra-high resolution optics",
    "Real-time data processing",
    "Cloud connectivity",
    "Automated calibration",
    "Multi-spectral imaging",
  ]

  const specs = [
    { label: "Resolution", value: "0.5 nm" },
    { label: "Magnification", value: "1,000x - 100,000x" },
    { label: "Illumination", value: "LED with adjustable intensity" },
    { label: "Camera", value: "16MP CMOS sensor" },
    { label: "Connectivity", value: "Wi-Fi, Ethernet, USB-C" },
    { label: "Power", value: "100-240V AC" },
  ]

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-muted py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/quantum-microscope-professional.jpg"
                  alt="Quantum Microscope Pro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer">
                    <img
                      src={`/placeholder.svg?height=200&width=200&query=microscope+angle+${i}`}
                      alt={`View ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-accent font-semibold">Microscopy</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Quantum Microscope Pro</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Revolutionary imaging system combining quantum optics with AI-powered analysis for unprecedented
                resolution and insight into cellular structures.
              </p>

              <div className="text-4xl font-bold mb-8">$45,000</div>

              <div className="flex gap-4 mb-12">
                <Link
                  to="/contact"
                  className="flex-1 px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors text-center"
                >
                  Request Quote
                </Link>
                <button className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-muted transition-colors inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Datasheet
                </button>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Specifications</h3>
                <div className="space-y-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-3 border-b border-border">
                      <span className="font-medium">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
