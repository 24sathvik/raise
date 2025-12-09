"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "About", path: "/about" },
    { name: "Products", path: "/products", hasDropdown: true },
    { name: "Applications", path: "/applications" },
    { name: "News", path: "/news" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-white">
              Raise Lab
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path ? "text-accent" : "text-white/90 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-1">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white/90 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="hidden sm:block px-6 py-2.5 bg-accent text-primary rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Get Started
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="pb-4"
            >
              <input
                type="search"
                placeholder="Search products, applications..."
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                autoFocus
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-surface-dark shadow-2xl"
          >
            <div className="flex flex-col h-full p-6 pt-24">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 text-lg font-medium text-white/90 hover:text-accent transition-colors border-b border-white/10"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 px-6 py-3 bg-accent text-primary rounded-full font-medium text-center hover:bg-accent/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
