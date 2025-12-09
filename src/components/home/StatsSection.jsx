"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 1000, suffix: "+", label: "Research Institutions" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 99.9, suffix: "%", label: "Uptime Reliability" },
  { value: 24, suffix: "/7", label: "Technical Support" },
]

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
