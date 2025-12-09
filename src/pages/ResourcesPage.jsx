"use client"

import { motion } from "framer-motion"
import { FileText, Video, Book, Download } from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "Technical Documentation",
    description: "Comprehensive guides and manuals for all our products",
    items: ["User Manuals", "Installation Guides", "Maintenance Protocols", "API Documentation"],
  },
  {
    icon: Video,
    title: "Training Videos",
    description: "Step-by-step video tutorials and webinars",
    items: ["Product Tutorials", "Best Practices", "Troubleshooting", "Webinar Archive"],
  },
  {
    icon: Book,
    title: "Case Studies",
    description: "Real-world applications and success stories",
    items: ["Research Papers", "Application Notes", "Customer Stories", "White Papers"],
  },
]

const downloads = [
  { name: "Product Catalog 2024", size: "12 MB", type: "PDF" },
  { name: "Quantum Microscope Manual", size: "8 MB", type: "PDF" },
  { name: "Spectro-Max Datasheet", size: "2 MB", type: "PDF" },
  { name: "Installation Guide", size: "5 MB", type: "PDF" },
]

export default function ResourcesPage() {
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
            Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Access documentation, training materials, and technical support
          </motion.p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8">Popular Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {downloads.map((download) => (
                <div
                  key={download.name}
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">{download.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {download.type} • {download.size}
                      </div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-accent" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
