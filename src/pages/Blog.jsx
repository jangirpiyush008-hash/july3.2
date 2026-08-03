import { PageHero, Section } from '../components/Section.jsx'
import { Accordion } from '../components/Accordion.jsx'
import Search from '../components/Search.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Long-form writing about specialty coffee."
        subtitle="A rolling collection of beginner-oriented essays on brewing, equipment, beans and the culture of coffee. Use the filters below to narrow by category, brewing method or difficulty."
        image={img.beans.roasted}
        alt="Close-up of glossy dark-roasted whole coffee beans"
      />

      <Section eyebrow="Browse the archive" title="Search &amp; filter articles">
        <Search />
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions about brewing">
        <Accordion items={GLOBAL_FAQS.slice(16, 25)} idPrefix="blog-faq" />
      </Section>
    </>
  )
}
