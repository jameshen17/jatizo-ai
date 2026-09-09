export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="JATIZO AI home">
          <span className="brand-name">Jatizo</span>
          <span className="brand-ai">(AI)</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="https://jatizo.biz">Jatizo Business ↗</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">JATIZO AI / 2026 / IN DEVELOPMENT</p>
          <h1 id="hero-title"><span>Jatizo</span><strong>(AI)</strong></h1>
          <div className="hero-message">
            <p className="hero-tagline">Intelligence for fashion&apos;s next era.</p>
            <p className="hero-intro">
              Exploring AI-native tools that connect industry data, manufacturing knowledge,
              and better business discovery.
            </p>
          </div>
        </div>
        <div className="hero-status" aria-label="Project status">
          <span>Fashion × AI</span>
          <span>Early exploration</span>
          <span>2026</span>
        </div>
      </section>

      <section className="about-strip" aria-label="About Jatizo">
          <p>
            Jatizo is an independent company exploring AI-native products for the global fashion industry.
          </p>
          <div>
            <span>JATIZO LLC · California, USA</span>
            <a href="https://jatizo.biz">Business inquiries → jatizo.biz</a>
          </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>JATIZO</strong>
          <span>Fashion × AI</span>
        </div>
        <div className="footer-links">
          <a href="https://jatizo.ai">jatizo.ai</a>
          <a href="https://jatizo.biz">jatizo.biz</a>
          <a href="/privacy">Privacy</a>
        </div>
        <p>© 2026 JATIZO LLC</p>
      </footer>
    </main>
  );
}
