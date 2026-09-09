import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | JATIZO AI",
  description: "Privacy information for jatizo.ai.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy | JATIZO AI",
    description: "Privacy information for jatizo.ai.",
    url: "https://jatizo.ai/privacy",
    siteName: "JATIZO AI",
    type: "website"
  }
};

export default function Privacy() {
  return (
    <div className="privacy-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="JATIZO AI home">
          <span className="brand-name">JATIZO</span>
          <span className="brand-ai">AI</span>
        </a>
        <nav aria-label="Privacy navigation">
          <a href="/">Back to home</a>
          <a href="https://jatizo.biz">Jatizo Business ↗</a>
        </nav>
      </header>

      <main className="privacy-main">
        <div className="privacy-hero">
          <div>
            <p className="eyebrow">JATIZO AI · Privacy</p>
            <h1>Privacy</h1>
          </div>
          <p>
            This notice explains the limited information associated with visiting jatizo.ai.
            Effective September 10, 2026.
          </p>
        </div>

        <div className="privacy-content">
          <section>
            <h2>About this site</h2>
            <p>
              Jatizo.ai is an informational website operated by JATIZO LLC. It does not currently
              provide user accounts, sign-in, a contact form, or other interactive services.
            </p>
          </section>

          <section>
            <h2>Analytics and cookies</h2>
            <p>
              We do not currently run an analytics service, place marketing cookies, or use advertising
              trackers on this site. If that changes, this notice will be updated before those tools are enabled.
            </p>
          </section>

          <section>
            <h2>Hosting information</h2>
            <p>
              Like most websites, our infrastructure providers may process limited technical information
              needed to deliver and protect the site, such as IP addresses, browser information, request
              timestamps, and security logs.
            </p>
          </section>

          <section>
            <h2>Business correspondence and external links</h2>
            <p>
              If you choose to contact Jatizo directly, we use the information you provide to respond to
              your inquiry and manage the related correspondence. Links to other websites, including
              jatizo.biz, are governed by the policies of those websites.
            </p>
          </section>

          <section>
            <h2>Changes and contact</h2>
            <p>
              We may revise this notice as the site develops. Questions about this notice can be sent to
              {" "}<a href="mailto:james@jatizo.biz">james@jatizo.biz</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div><strong>JATIZO</strong><span>Fashion × AI</span></div>
        <div className="footer-links"><a href="https://jatizo.ai">jatizo.ai</a><a href="https://jatizo.biz">jatizo.biz</a></div>
        <p>© 2026 JATIZO LLC</p>
      </footer>
    </div>
  );
}
