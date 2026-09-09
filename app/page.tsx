import Image from "next/image";

const contactHref =
  "mailto:james@jatizo.biz?subject=JATIZO%20AI%20conversation";

const principles = [
  {
    number: "01",
    title: "Start with real work",
    text: "Fashion is shaped by decisions across product, sourcing, production, and market context. We are beginning with the work itself—not a generic AI promise."
  },
  {
    number: "02",
    title: "Keep people in the loop",
    text: "Judgment, taste, relationships, and accountability remain human. AI should help teams see and act more clearly, not hide the reasoning behind a result."
  },
  {
    number: "03",
    title: "Earn usefulness",
    text: "The direction will be shaped by practical learning. We will share more only when an idea is specific enough to be useful and responsible."
  }
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="JATIZO AI home">
          JATIZO <span>AI</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#direction">Direction</a>
          <a href="#principles">Principles</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A JATIZO initiative · In development</p>
          <h1 id="hero-title">
            Fashion moves on <em>judgment.</em>
            <br />
            AI can help make it clearer.
          </h1>
          <p className="hero-intro">
            JATIZO is exploring practical ways for artificial intelligence to support the work behind
            fashion—from complex information to better-informed decisions.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#direction">
              See the direction
            </a>
            <a className="text-link" href={contactHref}>
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Fashion material study">
          <Image
            src="/jatizo/fashion-material-study.webp"
            alt="A coordinated woven fashion look showing material, proportion, and construction detail."
            fill
            priority
            sizes="(max-width: 960px) 100vw, 43vw"
            className="hero-image"
          />
          <div className="image-overlay" />
          <div className="visual-index" aria-hidden="true">
            <span>FASHION</span>
            <span>INTELLIGENCE</span>
            <span>PRACTICE</span>
          </div>
        </div>
      </section>

      <section id="direction" className="direction section-shell">
        <p className="eyebrow">The direction</p>
        <div className="direction-grid">
          <h2>Useful intelligence for the decisions between an idea and a finished product.</h2>
          <div className="direction-copy">
            <p>
              Fashion teams work across fragmented inputs: product intent, commercial constraints,
              supplier context, timing, and constant revision. The opportunity is not more output for
              its own sake. It is a more coherent path through the information already shaping the work.
            </p>
            <p>
              JATIZO AI is an early initiative exploring where that kind of support can be practical.
              The exact form is still being defined through focused conversations and learning.
            </p>
          </div>
        </div>
      </section>

      <section id="principles" className="principles section-shell">
        <div className="section-heading">
          <p className="eyebrow">Working principles</p>
          <h2>Direction before claims.</h2>
        </div>
        <div className="principle-list">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div>
          <p className="eyebrow">Open conversation</p>
          <h2>If you work close to fashion’s real decisions, we would like to listen.</h2>
        </div>
        <div className="contact-copy">
          <p>
            We are interested in thoughtful perspectives from fashion operators, product and sourcing
            teams, technologists, and potential collaborators. This is a conversation about the
            direction—not a product signup or launch promise.
          </p>
          <a className="primary-button" href={contactHref}>
            Talk with JATIZO
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top" aria-label="Back to top">
          JATIZO <span>AI</span>
        </a>
        <p>Exploring practical AI for the work behind fashion.</p>
        <p>© {new Date().getFullYear()} JATIZO LLC</p>
      </footer>
    </main>
  );
}
