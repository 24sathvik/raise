"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Microscope, Beaker, Dna, ArrowRight } from "lucide-react"

const applications = [
  {
    icon: Microscope,
    title: "Clinical Research",
    description: "Advanced diagnostics and pathology analysis for medical breakthroughs",
    image: "/clinical-laboratory-research.jpg",
  },
  {
    icon: Dna,
    title: "Genomics",
    description: "DNA sequencing and genetic analysis for precision medicine",
    image: "/genomics-dna-sequencing.jpg",
  },
  {
    icon: Beaker,
    title: "Pharmaceutical",
    description: "Drug development and quality control testing solutions",
    image: "/pharmaceutical-laboratory.png",
  },
]

export default function ApplicationsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Supporting diverse scientific fields with specialized solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-muted hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={app.image || "/placeholder.svg"}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <app.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                <p className="text-muted-foreground mb-4">{app.description}</p>
                <Link
                  to="/applications"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
