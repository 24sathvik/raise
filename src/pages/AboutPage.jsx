"use client"

import { motion } from "framer-motion"
import { Target, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Uncompromising accuracy in every instrument we design",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Partnering with researchers to drive innovation",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Setting the standard for laboratory equipment quality",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Supporting scientific advancement worldwide",
    },
  ]

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
            About Raise Lab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            For over 25 years, we've been at the forefront of laboratory equipment innovation, empowering researchers to
            push the boundaries of scientific discovery.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded in 1999 by a team of passionate scientists and engineers, Raise Lab Equipment began with a
                simple mission: to create laboratory instruments that scientists actually want to use.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Today, we serve over 1,000 research institutions across 50 countries, providing cutting-edge equipment
                that accelerates discovery in fields ranging from genomics to materials science.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to precision engineering, exceptional support, and continuous innovation has made us a
                trusted partner for researchers worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="/modern-laboratory-facility.jpg" alt="Our Laboratory" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
