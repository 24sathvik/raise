"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Have questions? Our team is ready to help you find the perfect solution
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Institution</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="University or Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Sales</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:contact@raiselab.com" className="text-muted-foreground hover:text-accent">
                        contact@raiselab.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <div className="text-muted-foreground">
                        123 Science Drive
                        <br />
                        Innovation Park, CA 94025
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                        <br />
                        24/7 Emergency Support Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
