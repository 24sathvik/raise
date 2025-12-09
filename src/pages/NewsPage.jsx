"use client"

import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Breakthrough in Quantum Microscopy Technology",
    excerpt:
      "Our latest innovation enables unprecedented resolution in cellular imaging, pushing the boundaries of what scientists can observe...",
    date: "2024-01-15",
    author: "Dr. Sarah Chen",
    category: "Innovation",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Partnership with Leading Research Institutes",
    excerpt:
      "Expanding our global network to accelerate scientific discovery and foster collaboration across continents...",
    date: "2024-01-10",
    author: "Michael Roberts",
    category: "Partnership",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "New AI-Powered Analysis Platform Launch",
    excerpt:
      "Introducing our revolutionary software that transforms raw data into actionable insights faster than ever before...",
    date: "2024-01-05",
    author: "Dr. James Liu",
    category: "Product Launch",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Sustainability Initiative: Carbon Neutral by 2025",
    excerpt:
      "Our commitment to environmental responsibility and the steps we are taking to minimize our carbon footprint...",
    date: "2023-12-20",
    author: "Emma Watson",
    category: "Sustainability",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function NewsPage() {
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
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Stay informed about our latest innovations, partnerships, and industry insights
          </motion.p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
