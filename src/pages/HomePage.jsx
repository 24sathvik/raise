"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import HeroSection from "../components/home/HeroSection"
import FeaturedProducts from "../components/home/FeaturedProducts"
import StatsSection from "../components/home/StatsSection"
import ApplicationsPreview from "../components/home/ApplicationsPreview"
import NewsPreview from "../components/home/NewsPreview"

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <StatsSection />
      <FeaturedProducts />
      <ApplicationsPreview />
      <NewsPreview />

      {/* CTA Section */}
      <section className="py-24 bg-surface-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Elevate Your Research?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Discover how our precision instruments can accelerate your scientific breakthroughs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
