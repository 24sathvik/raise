"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Quantum Microscope Pro",
    category: "Microscopy",
    image: "/advanced-scientific-microscope.jpg",
    description: "Ultra-high resolution imaging with AI-powered analysis",
  },
  {
    id: 2,
    name: "Spectro-Max 5000",
    category: "Spectroscopy",
    image: "/laboratory-spectrometer-device.jpg",
    description: "Precision spectral analysis for molecular research",
  },
  {
    id: 3,
    name: "UltraCentrifuge X",
    category: "Separation",
    image: "/laboratory-centrifuge-machine.jpg",
    description: "High-speed separation with temperature control",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Discover our most advanced laboratory instruments
            </motion.p>
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/products/${product.id}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="text-sm text-accent mb-2 block">{product.category}</span>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          to="/products"
          className="md:hidden flex items-center justify-center gap-2 text-accent font-semibold mt-8"
        >
          View All Products
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
