"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Play } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-surface-dark">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/60 to-surface-dark z-10" />
        <img src="/scientific-laboratory-microscope-precision-equipme.jpg" alt="Laboratory Equipment" className="w-full h-full object-cover" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm text-accent rounded-full text-sm font-semibold mb-8">
            Precision Engineering for Scientific Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Advanced Laboratory
          <br />
          <span className="text-accent">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Empowering researchers worldwide with cutting-edge instruments designed for precision, reliability, and
          innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/products"
            className="px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2 backdrop-blur-sm">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
