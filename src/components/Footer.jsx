import { Link } from "react-router-dom"
import { Mail, Phone, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Product: ["Microscopes", "Spectrometers", "Centrifuges", "All Products"],
    Company: ["About Us", "Careers", "News", "Contact"],
    Resources: ["Documentation", "Case Studies", "Support", "Blog"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  }

  return (
    <footer className="bg-surface-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              Raise Lab
            </Link>
            <p className="text-sm mb-6 leading-relaxed">
              Advancing scientific discovery with precision laboratory equipment and innovative solutions for
              researchers worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-sm hover:text-accent transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 Raise Lab Equipment. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:contact@raiselab.com" className="flex items-center gap-2 hover:text-accent">
              <Mail className="w-4 h-4" />
              contact@raiselab.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
