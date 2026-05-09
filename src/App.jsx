import { useEffect } from 'react';

const logo = new URL('../lens.jpg', import.meta.url).href;

const processSteps = [
  {
    title: 'Position with Purpose',
    description:
      'Establish a clear market narrative so customers instantly understand why your brand matters.',
  },
  {
    title: 'Design a Distinct Identity',
    description:
      'Turn strategy into visual systems and messaging that make your business impossible to ignore.',
  },
  {
    title: 'Activate with Momentum',
    description:
      'Use targeted channels and brand-led growth systems to convert attention into trust and traction.',
  },
];

const stats = [
  { label: 'Startups failing from unclear positioning', value: '90%' },
  { label: 'Lack of differentiation', value: '56%' },
  { label: 'Customers don’t understand offerings', value: '42%' },
];

const clients = ['Horizon', 'Hylpandua', 'MyArteLab', 'King Empire', 'Gifted', 'Safe Space', 'SurePlug', 'Trump Concept'];

const team = [
  { name: 'Abdullahi Fauziya', role: 'Founder, Lead Brand Positioning Specialist' },
  { name: 'Godwin Ambrose', role: 'Co-founder, Lead Differentiated Identity Designer' },
  { name: 'David Rahab', role: 'Graphic Designer' },
  { name: 'David Favour', role: 'Secretary' },
];

const heroHeadline = 'Clarity that cuts through noise.';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-copy reveal-on-scroll">
          <div className="site-brand">
            <img src={logo} alt="Lens logo" className="site-logo" />
            <div>
              <div className="brand-tag">Strategic brand clarity</div>
            </div>
          </div>
          <p className="eyebrow">Strategic clarity for brands that want to stand out</p>
          <h1 className="animated-title">
            {heroHeadline.split('').map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={`animated-letter${char === ' ' ? ' word-space' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="hero-text">
            Lens helps businesses define who they are, design how they appear, and dominate the market through
            psychology-led positioning and identity systems.
          </p>
          <div className="hero-actions reveal-on-scroll">
            <a href="#contact" className="button primary">Start your brand clarity journey</a>
            <a href="#approach" className="button secondary">Explore our process</a>
          </div>
          <p className="hero-note">
            8 businesses joined the waitlist in days — proof that clarity is what growing brands need most.
          </p>
        </div>
        <div className="hero-visual reveal-on-scroll">
          <div className="hero-card reveal-on-scroll">
            <span>Problem</span>
            <p>Strong products lose traction because markets are crowded and messaging is unclear.</p>
          </div>
          <div className="hero-card accent reveal-on-scroll">
            <span>Lens solution</span>
            <p>Strategic positioning, differentiated identity, and activation systems that make brands visible.</p>
          </div>
        </div>
      </header>

      <section className="section reveal-on-scroll" id="problem">
        <div className="section-grid">
          <div>
            <p className="section-label">The challenge</p>
            <h2>Businesses are being drowned in noise.</h2>
            <p>
              Innovative founders often struggle to communicate what makes them different. When clarity is missing,
              traction stalls, recognition drops, and growth becomes harder to sustain.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-card reveal-on-scroll">
                <span className="stat-value">{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt reveal-on-scroll" id="approach">
        <div className="section-intro reveal-on-scroll">
          <p className="section-label">Our approach</p>
          <h2>Clarity-first branding with measurable momentum.</h2>
          <p>
            Lens blends psychology-driven positioning with strategic identity systems and targeted digital activation to
            help your brand stand out and grow with confidence.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.title} className="process-card reveal-on-scroll">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal-on-scroll" id="traction">
        <div className="section-grid">
          <div>
            <p className="section-label">Early traction</p>
            <h2>Demand is already building.</h2>
            <p>
              Lens launched with an immediate waitlist response and a growing client roster. These early wins show a
              market need for better brand clarity and strategic differentiation.
            </p>
          </div>
          <div className="clients-card reveal-on-scroll">
            <h3>Trusted by growing brands</h3>
            <div className="client-list">
              {clients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt reveal-on-scroll" id="why-us">
        <div className="section-intro reveal-on-scroll">
          <p className="section-label">Why Lens</p>
          <h2>We are not just designers or marketers.</h2>
          <p>
            We are a strategic clarity company. Through proven frameworks, brand psychology, and research-based
            positioning, we help businesses find their strongest narrative and make it impossible to ignore.
          </p>
        </div>
        <div className="feature-grid">
          <div className="feature-card reveal-on-scroll">
            <h3>DEFINE</h3>
            <p>Customers understand your value immediately, so your brand becomes the obvious choice.</p>
          </div>
          <div className="feature-card reveal-on-scroll">
            <h3>DESIGN</h3>
            <p>Design systems that reflect who you are and help you stand out in crowded markets.</p>
          </div>
          <div className="feature-card reveal-on-scroll">
            <h3>DOMINATE</h3>
            <p>Marketing systems built around your unique story and the audiences most likely to engage.</p>
          </div>
        </div>
      </section>

      <section className="section reveal-on-scroll" id="team">
        <div className="section-intro reveal-on-scroll">
          <p className="section-label">Leadership</p>
          <h2>Experienced strategists and creatives.</h2>
          <p>
            A focused team combining brand positioning, identity design, and operational support to deliver
            consistent brand clarity across every touchpoint.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card reveal-on-scroll">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-cta reveal-on-scroll" id="contact">
        <div>
          <p className="section-label">Ready for clarity?</p>
          <h2>Launch your brand with purpose and momentum.</h2>
          <p>
            Lens is built for businesses that want to come out of the noise with a strong position, a distinctive brand,
            and a plan for sustainable growth.
          </p>
          <div className="hero-actions reveal-on-scroll">
            <a href="https://form.typeform.com/to/INRHtNez" target="_blank" rel="noopener noreferrer" className="button primary">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
