import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 bg-espresso-950 text-cream/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-full bg-copper-600 inline-flex items-center justify-center text-cream font-display">B</span>
            <span className="font-display text-lg">Brew &amp; Bean Journal</span>
          </div>
          <p className="mt-4 text-sm text-cream/70 max-w-xs">
            An independent editorial guide to specialty coffee for people who care about how their morning cup is made.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-cream">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li><Link to="/brewing-guides" className="hover:text-copper-500">Brewing Guides</Link></li>
            <li><Link to="/home-espresso" className="hover:text-copper-500">Home Espresso</Link></li>
            <li><Link to="/pour-over" className="hover:text-copper-500">Pour Over</Link></li>
            <li><Link to="/french-press" className="hover:text-copper-500">French Press</Link></li>
            <li><Link to="/coffee-beans" className="hover:text-copper-500">Coffee Beans</Link></li>
            <li><Link to="/home-coffee-bar" className="hover:text-copper-500">Home Coffee Bar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-cream">Journal</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li><Link to="/blog" className="hover:text-copper-500">All articles</Link></li>
            <li><Link to="/community" className="hover:text-copper-500">Community</Link></li>
            <li><Link to="/about" className="hover:text-copper-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-copper-500">Contact</Link></li>
          </ul>
          <h4 className="mt-8 font-display text-sm uppercase tracking-widest text-cream">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li><Link to="/legal/privacy" className="hover:text-copper-500">Privacy</Link></li>
            <li><Link to="/legal/terms" className="hover:text-copper-500">Terms</Link></li>
            <li><Link to="/legal/refund" className="hover:text-copper-500">Refund</Link></li>
            <li><Link to="/legal/affiliate-disclosure" className="hover:text-copper-500">Affiliate Disclosure</Link></li>
            <li><Link to="/legal/editorial-policy" className="hover:text-copper-500">Editorial Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-cream">Get in touch</h4>
          <address className="not-italic mt-4 text-sm text-cream/80 space-y-1.5">
            <div><a className="hover:text-copper-500" href="mailto:brewandbeanjournal@gmail.com">brewandbeanjournal@gmail.com</a></div>
            <div>Phone: available on request via email</div>
            <div>Editorial address: available on request via email</div>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-cream/60 space-y-3">
          <p>
            <strong className="text-cream/90">Editorial disclosure:</strong> Brew &amp; Bean Journal is an independent
            editorial publication about specialty coffee. All content is general educational information and personal
            opinion, not professional advice. When we recommend equipment we do so from our own hands-on brewing
            experience. Some outbound links may be affiliate links (see the
            <Link to="/legal/affiliate-disclosure" className="text-copper-500 hover:text-copper-500 underline decoration-copper-500/40 mx-1">Affiliate Disclosure</Link>
            for details); editorial choices are made independently of any commercial relationship.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Brew &amp; Bean Journal. All rights reserved.</p>
            <p>Independent publication. Not affiliated with any coffee roaster, equipment brand or trade association.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
