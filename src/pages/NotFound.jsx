import { Link } from 'react-router-dom'
import { Section } from '../components/Section.jsx'

export default function NotFound() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <p className="pill">Error 404</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-ink">The kettle’s off the boil.</h1>
        <p className="mt-6 text-ink/75">
          The page you were looking for isn’t here — probably a mistyped URL, or a link that has moved. Try one of
          these entry points instead.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="rounded-2xl px-5 py-3 bg-espresso-900 text-cream font-medium">Return home</Link>
          <Link to="/brewing-guides" className="rounded-2xl px-5 py-3 border border-border text-ink">Read the brewing guides</Link>
          <Link to="/blog" className="rounded-2xl px-5 py-3 border border-border text-ink">Browse the Journal</Link>
        </div>
      </div>
    </Section>
  )
}
