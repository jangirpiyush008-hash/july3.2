export const GLOBAL_FAQS = [
  { q: 'What ratio of coffee to water should I use?', a: 'For filter methods a common starting point is 1:16 by weight — 30g of coffee to 480g of water. Adjust up (1:15 = stronger) or down (1:17 = milder) to taste. Espresso is typically 1:2 (18g dose, 36g yield) for a modern shot.' },
  { q: 'Do I really need a scale?', a: 'Yes. A cheap digital scale that reads to 0.1 g is the single most under-rated purchase in home coffee. Measuring by volume is too imprecise for repeatable brewing.' },
  { q: 'How important is the grinder compared to the brewer?', a: 'For most home setups the grinder matters more. A modest brewer and a good grinder outperforms an expensive brewer with a bad grinder almost every time.' },
  { q: 'What temperature should my brewing water be?', a: 'Between 92°C and 96°C (198°F–205°F) for most filter and espresso brewing. Slightly cooler for very light roasts is a matter of taste, not a rule.' },
  { q: 'How fresh should coffee beans be?', a: 'Ideally rested 7–21 days after the roast date. Beans that are one day off the roaster are still degassing and can taste hollow; beans past six weeks lose aromatic clarity even if stored well.' },
  { q: 'Should I store coffee in the freezer?', a: 'Only for long-term storage of unopened bags. For daily use, an airtight, opaque container at room temperature is better — repeated freeze/thaw cycles cause condensation, which damages beans.' },
  { q: 'Is filtered water necessary?', a: 'It helps. Very hard or very soft water both distort extraction. If your tap water tastes fine on its own it is usually fine for brewing; if it tastes chlorinated or metallic, a Brita-type filter is worth the small effort.' },
  { q: 'What is the "bloom" and why does it matter?', a: 'The bloom is the initial 30–45 seconds of a pour-over brew where you pour just enough water to saturate the grounds. It releases trapped CO₂ from fresh coffee, so the main pour extracts more evenly and tastes cleaner.' },
  { q: 'Which is easier for beginners: pour-over or French press?', a: 'French press. It is more forgiving of grind size and technique. Pour-over rewards attention but takes a few weeks of practice to master; French press produces a good cup on your first try.' },
  { q: 'How do I know if my espresso is under- or over-extracted?', a: 'Under-extracted espresso tastes sharp, sour and thin; over-extracted tastes bitter, hollow and drying. A balanced shot tastes sweet with clear acidity and a lingering finish.' },
  { q: 'Can I use pre-ground coffee for espresso?', a: 'Not well. Espresso needs a very fine, freshly ground dose because grind particle distribution and freshness both matter enormously at nine bars of pressure. Pre-ground works far better for filter methods.' },
  { q: 'What is a "single origin" versus a "blend"?', a: 'Single origin means the beans come from one farm, cooperative or region — you taste the character of that place. A blend combines beans from several origins to create a specific balanced profile, often for espresso.' },
  { q: 'How long does an espresso shot take?', a: 'For a modern shot: 25–32 seconds from the moment the pump starts, producing a 1:2 yield (e.g. 18g in → 36g out). Times outside that window are not wrong, but usually mean your grind needs adjusting.' },
  { q: 'Is decaf coffee any good these days?', a: 'Yes, much better than it used to be. Look for beans decaffeinated using Swiss Water, sugarcane ethyl acetate (EA), or CO₂ processes — all of which preserve most of the flavour of the original green coffee.' },
  { q: 'What is milk microfoam?', a: 'Microfoam is milk steamed to about 55°C–65°C with air folded into it so evenly that the bubbles are individually too small to see. It is what makes latte art possible and what gives a good flat white its silky texture.' },
  { q: 'Do I need an expensive kettle?', a: 'For pour-over, yes — a gooseneck kettle is genuinely useful because it lets you pour a thin, controlled stream. Temperature control is a bonus, not a necessity.' },
  { q: 'What is the "channelling" problem in espresso?', a: 'Channelling is when water finds a low-resistance path through the puck and rushes through, leaving the rest under-extracted. Symptoms include a fast, blonde shot and sour taste. It is usually caused by uneven distribution or an under-tamped puck.' },
  { q: 'How do I clean a French press properly?', a: 'Rinse the used grounds into a compost bin or the trash (not the sink — they clog drains). Wash the beaker with warm soapy water. Once a month, take the plunger apart and clean the mesh disks with a soft brush.' },
  { q: 'What is the "TDS" of coffee?', a: 'Total Dissolved Solids — the percentage of your brewed cup that is actually dissolved coffee (typically 1.2%–1.5% for filter, 8%–12% for espresso). A refractometer measures it. For most home brewers, taste is a more useful guide.' },
  { q: 'Can I brew good coffee without any special equipment?', a: 'Yes. A kettle, a scale, and a Melitta paper filter placed over a mug will make a very drinkable pour-over. Everything above that is refinement, not requirement.' },
  { q: 'How long does a bag of coffee actually last after opening?', a: 'Two to three weeks for peak flavour when stored well. It is still safe to drink for months, but the aromatic top notes fade quickly after the first week.' },
  { q: 'What does "third wave coffee" mean?', a: 'A movement — starting around 2000 — that treats coffee like wine: attention paid to origin, processing, roast profile, and brewing technique, with the goal of highlighting the character of a specific coffee rather than covering it with milk and sugar.' },
  { q: 'Is Fair Trade the same as specialty coffee?', a: 'No. Fair Trade is a trade certification aimed at farmer minimum pricing. Specialty coffee is a quality classification. Many specialty coffees are Fair Trade, and many aren’t — a good roaster will explain their sourcing directly.' },
  { q: 'What is the shelf life of ground coffee?', a: 'Days, at best. Ground coffee begins losing aromatics within 20 minutes and is noticeably stale within a week. Whole beans keep for weeks. This is the argument for owning a grinder.' },
  { q: 'Should I preheat my brewer?', a: 'Yes. Rinsing a ceramic V60 or Chemex with hot water before brewing preheats the vessel, rinses paper flavour off the filter, and stabilises brew temperature — a small step that meaningfully improves the cup.' }
]

export const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: GLOBAL_FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
}
