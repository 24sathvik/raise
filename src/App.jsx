import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ApplicationsPage from "./pages/ApplicationsPage"
import NewsPage from "./pages/NewsPage"
import ResourcesPage from "./pages/ResourcesPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
