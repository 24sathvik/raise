"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Breakthrough in Quantum Microscopy Technology",
    excerpt: "Our latest innovation enables unprecedented resolution in cellular imaging...",
    date: "2024-01-15",
    category: "Innovation",
    image: "/microscopy-innovation.jpg",
  },
  {
    id: 2,
    title: "Partnership with Leading Research Institutes",
    excerpt: "Expanding our global network to accelerate scientific discovery...",
    date: "2024-01-10",
    category: "Partnership",
    image: "/research-partnership.jpg",
  },
]

export default function NewsPreview() {
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
              Latest News
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Stay updated with our latest innovations and announcements
            </motion.p>
          </div>
          <Link
            to="/news"
            className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Link to={`/news/${article.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">{article.category}</span>
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
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
