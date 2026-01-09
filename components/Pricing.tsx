'use client'

export default function Pricing() {
  return (
    <section id="pricing" className="section-pricing">
      <div className="container pricing-grid">
        {/* pricing cards */}
        <div className="price-card">
          <h3>Starter</h3>
          <p>$50</p>
        </div>

        <div className="price-card featured">
          <h3>Pro</h3>
          <p>$90</p>
        </div>

        <div className="price-card">
          <h3>Custom</h3>
          <p>Let’s Talk</p>
        </div>
      </div>
    </section>
  )
}

