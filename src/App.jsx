import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import RouteTracker from './components/RouteTracker.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Community from './pages/Community.jsx'
import BrewingGuides from './pages/BrewingGuides.jsx'
import HomeEspresso from './pages/HomeEspresso.jsx'
import PourOver from './pages/PourOver.jsx'
import FrenchPress from './pages/FrenchPress.jsx'
import CoffeeBeans from './pages/CoffeeBeans.jsx'
import HomeCoffeeBar from './pages/HomeCoffeeBar.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Refund from './pages/Refund.jsx'
import Affiliate from './pages/Affiliate.jsx'
import Editorial from './pages/Editorial.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-paper focus:text-ink focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      <ScrollToTop />
      <RouteTracker />
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="/brewing-guides" element={<BrewingGuides />} />
          <Route path="/home-espresso" element={<HomeEspresso />} />
          <Route path="/pour-over" element={<PourOver />} />
          <Route path="/french-press" element={<FrenchPress />} />
          <Route path="/coffee-beans" element={<CoffeeBeans />} />
          <Route path="/home-coffee-bar" element={<HomeCoffeeBar />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="/legal/affiliate-disclosure" element={<Affiliate />} />
          <Route path="/legal/editorial-policy" element={<Editorial />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
