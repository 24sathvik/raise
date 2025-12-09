"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Search } from "lucide-react"

const categories = ["All", "Microscopy", "Spectroscopy", "Separation", "Analysis"]

const products = [
  {
    id: 1,
    name: "Quantum Microscope Pro",
    category: "Microscopy",
    price: "$45,000",
    image: "/advanced-microscope.jpg",
    description: "Ultra-high resolution imaging with AI-powered analysis",
  },
  {
    id: 2,
    name: "Spectro-Max 5000",
    category: "Spectroscopy",
    price: "$32,000",
    image: "/spectrometer.jpg",
    description: "Precision spectral analysis for molecular research",
  },
  {
    id: 3,
    name: "UltraCentrifuge X",
    category: "Separation",
    price: "$28,000",
    image: "/laboratory-centrifuge.png",
    description: "High-speed separation with temperature control",
  },
  {
    id: 4,
    name: "ChromaFlow HPLC",
    category: "Analysis",
    price: "$38,000",
    image: "/hplc-chromatography.jpg",
    description: "Advanced chromatography system for compound analysis",
  },
  {
    id: 5,
    name: "NanoVision SEM",
    category: "Microscopy",
    price: "$125,000",
    image: "/electron-microscope.jpg",
    description: "Scanning electron microscope with nanometer resolution",
  },
  {
    id: 6,
    name: "MassSpec Elite",
    category: "Spectroscopy",
    price: "$95,000",
    image: "/mass-spectrometer.jpg",
    description: "High-resolution mass spectrometry for proteomics",
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-surface-dark text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Precision-engineered laboratory equipment designed for cutting-edge research
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category ? "bg-accent text-primary" : "bg-muted hover:bg-muted-foreground/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/products/${product.id}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-accent font-semibold">{product.category}</span>
                      <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{product.price}</span>
                        <span className="text-accent font-semibold">Learn More →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
