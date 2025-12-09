"use client"

import { motion } from "framer-motion"
import { Microscope, Beaker, FlaskConical, Dna, Pill, Leaf } from "lucide-react"

const applications = [
  {
    icon: Microscope,
    title: "Clinical Research",
    description: "Advanced diagnostics and pathology analysis for medical breakthroughs",
    image: "/placeholder.svg?height=400&width=600",
    details: ["Diagnostic pathology", "Cellular imaging", "Tissue analysis", "Blood testing"],
  },
  {
    icon: Dna,
    title: "Genomics & Proteomics",
    description: "DNA sequencing and protein analysis for precision medicine",
    image: "/genomics-dna-sequencing.jpg",
    details: ["DNA sequencing", "Gene expression analysis", "Protein identification", "Biomarker discovery"],
  },
  {
    icon: Pill,
    title: "Pharmaceutical Development",
    description: "Drug discovery and quality control testing solutions",
    image: "/placeholder.svg?height=400&width=600",
    details: ["Drug formulation", "Quality control", "Stability testing", "Purity analysis"],
  },
  {
    icon: Beaker,
    title: "Materials Science",
    description: "Characterization and analysis of advanced materials",
    image: "/placeholder.svg?height=400&width=600",
    details: ["Surface analysis", "Crystal structure", "Elemental composition", "Material testing"],
  },
  {
    icon: Leaf,
    title: "Environmental Science",
    description: "Monitoring and analysis for environmental protection",
    image: "/placeholder.svg?height=400&width=600",
    details: ["Water quality testing", "Soil analysis", "Air pollution monitoring", "Contaminant detection"],
  },
  {
    icon: FlaskConical,
    title: "Food & Beverage",
    description: "Quality assurance and safety testing for food products",
    image: "/placeholder.svg?height=400&width=600",
    details: ["Nutritional analysis", "Contamination detection", "Shelf life testing", "Authenticity verification"],
  },
]

export default function ApplicationsPage() {
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
            Applications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Supporting diverse scientific fields with specialized solutions
          </motion.p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
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
                  <ul className="space-y-2">
                    {app.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
