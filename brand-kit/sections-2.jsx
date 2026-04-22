// Color, Typography, Voice sections

const PALETTE = {
  blush:    { hex: '#FCC2E6', name: 'Signature Blush',   role: 'Primary · hero surfaces',   pantone: 'PMS 684 C', cmyk: '0 / 23 / 0 / 0' },
  rose:     { hex: '#E4739E', name: 'Deep Rose',         role: 'Accent · emphasis & hover', pantone: 'PMS 190 C', cmyk: '0 / 70 / 27 / 0' },
  ink:      { hex: '#111111', name: 'Medspa Ink',        role: 'Typography · structure',    pantone: 'PMS Black 6',cmyk:'0 / 0 / 0 / 100', dark: true },
  cream:    { hex: '#FBF6F1', name: 'Oat Cream',         role: 'Canvas · editorial ground', pantone: 'PMS 9040 C',cmyk: '1 / 3 / 5 / 0' },
  champagne:{ hex: '#C9A96E', name: 'Champagne',         role: 'Luxe accent · use sparingly',pantone:'PMS 4515 C', cmyk: '20 / 33 / 68 / 0' },
  sand:     { hex: '#E8DFD4', name: 'Sand',              role: 'Neutral · dividers & fills',pantone: 'PMS 7527 C',cmyk: '8 / 12 / 18 / 0' },
};

const SectionColor = () => (
  <section className="doc-section" id="color">
    <SectionHeader num="02" kicker="PALETTE" title="Color system." lede="Blush leads. Ink grounds. Cream breathes. Everything else is measured restraint." />

    <h3 className="sub-h">Primary</h3>
    <div className="palette-row palette-row--hero">
      <Swatch {...PALETTE.blush} />
      <Swatch {...PALETTE.ink} />
      <Swatch {...PALETTE.cream} />
    </div>

    <h3 className="sub-h">Secondary & accents</h3>
    <div className="palette-row">
      <Swatch {...PALETTE.rose} />
      <Swatch {...PALETTE.champagne} />
      <Swatch {...PALETTE.sand} />
    </div>

    <h3 className="sub-h">Tonal scale · Blush</h3>
    <div className="tonal-scale">
      {[
        ['50',  '#FFF5FB'],
        ['100', '#FEE4F3'],
        ['200', '#FDD3EC'],
        ['300', '#FCC2E6'],
        ['400', '#F5A3D2'],
        ['500', '#EC85BE'],
        ['600', '#E4739E'],
        ['700', '#B75B7E'],
        ['800', '#83425A'],
        ['900', '#4F2836'],
      ].map(([step, hex]) => (
        <div key={step} className="tone">
          <div className="tone-chip" style={{background: hex}} />
          <div className="tone-step">Blush / {step}</div>
          <div className="tone-hex">{hex}</div>
        </div>
      ))}
    </div>

    <h3 className="sub-h">Usage proportions</h3>
    <div className="proportion-bar">
      <div style={{flex: 55, background:'#FBF6F1', color:'#111'}}><span>55% Cream</span></div>
      <div style={{flex: 20, background:'#FCC2E6', color:'#111'}}><span>20% Blush</span></div>
      <div style={{flex: 15, background:'#111', color:'#FCC2E6'}}><span>15% Ink</span></div>
      <div style={{flex: 6,  background:'#E4739E', color:'#fff'}}><span>6% Rose</span></div>
      <div style={{flex: 4,  background:'#C9A96E', color:'#fff'}}><span>4% Champagne</span></div>
    </div>
    <p className="caption">The 55 / 20 / 15 / 6 / 4 rule keeps Cream as the breathing canvas and Blush as the emotional anchor. Champagne is a seasoning — never a course.</p>

    <h3 className="sub-h">Accessibility pairings</h3>
    <div className="a11y-grid">
      {[
        {fg:'#111', bg:'#FBF6F1', label:'Ink on Cream', ratio:'18.7 : 1', pass:'AAA'},
        {fg:'#111', bg:'#FCC2E6', label:'Ink on Blush', ratio:'14.2 : 1', pass:'AAA'},
        {fg:'#FBF6F1', bg:'#111', label:'Cream on Ink', ratio:'17.9 : 1', pass:'AAA'},
        {fg:'#111', bg:'#E4739E', label:'Ink on Rose',  ratio:'6.1 : 1',  pass:'AA'},
        {fg:'#FBF6F1', bg:'#E4739E', label:'Cream on Rose', ratio:'3.0 : 1', pass:'AA Large only'},
        {fg:'#111', bg:'#C9A96E', label:'Ink on Champagne', ratio:'8.4 : 1', pass:'AAA'},
      ].map(p => (
        <div key={p.label} className="a11y-tile" style={{background:p.bg, color:p.fg}}>
          <div className="a11y-label">{p.label}</div>
          <div className="a11y-sample">Aa</div>
          <div className="a11y-meta">
            <span>{p.ratio}</span>
            <span className="a11y-badge">{p.pass}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SectionType = () => (
  <section className="doc-section" id="type">
    <SectionHeader num="03" kicker="TYPOGRAPHY" title="Type system." lede="A high-contrast didone serif for display, paired with a neutral grotesk for everything functional. Spaced generously. Set confidently." />

    <div className="type-hero">
      <div className="type-hero-display">Confidence,<br/><em>engineered.</em></div>
      <div className="type-hero-meta">
        <div><dt>Display</dt><dd>Cormorant Garamond</dd></div>
        <div><dt>Text</dt><dd>Inter</dd></div>
        <div><dt>Mono</dt><dd>JetBrains Mono</dd></div>
      </div>
    </div>

    <h3 className="sub-h">Display — Cormorant Garamond</h3>
    <TypeSpec family="'Cormorant Garamond', serif" weight={500} size="88px" tracking="-0.01em" leading="0.95" label="H1 — Editorial Display" sample="The science of sculpting." />
    <TypeSpec family="'Cormorant Garamond', serif" weight={500} size="56px" tracking="-0.005em" leading="1.05" label="H2 — Section Title" sample="Your results, elevated." italic />
    <TypeSpec family="'Cormorant Garamond', serif" weight={500} size="36px" tracking="0em" leading="1.15" label="H3 — Subsection" sample="Clinically supervised GLP-1 care." />

    <h3 className="sub-h">Text — Inter</h3>
    <TypeSpec family="Inter, sans-serif" weight={500} size="18px" tracking="0em" leading="1.55" label="Body Large — opening paragraphs" sample="Sculpted Medspa pairs board-certified clinicians with a telehealth experience designed to feel less like a pharmacy and more like your favorite skincare appointment." />
    <TypeSpec family="Inter, sans-serif" weight={400} size="15px" tracking="0em" leading="1.6" label="Body — default running text" sample="Members receive a personalized GLP-1 protocol, monthly check-ins, and in-app messaging with a clinician — all priced as a flat monthly membership." />
    <TypeSpec family="Inter, sans-serif" weight={600} size="12px" tracking="0.18em" leading="1.2" label="Eyebrow / Label · tracked caps" sample="A MONTHLY MEMBERSHIP" />

    <h3 className="sub-h">Mono — JetBrains Mono</h3>
    <TypeSpec family="'JetBrains Mono', monospace" weight={400} size="13px" tracking="0.04em" leading="1.5" label="Specs, lab values, data" sample="DOSE · 0.25mg / weekly · WEEK 04" />

    <h3 className="sub-h">Type pairings in use</h3>
    <div className="pairing-demos">
      <div className="pairing-demo">
        <div className="pd-eyebrow">A MONTHLY MEMBERSHIP</div>
        <div className="pd-title">Lose 15–20%<br/>of your body weight,<br/><em>gently.</em></div>
        <div className="pd-body">Members work one-to-one with a clinician to design a GLP-1 protocol that fits their life. Month-to-month. Cancel anytime.</div>
        <div className="pd-cta">Start your consultation <Rule width={40}/></div>
      </div>
      <div className="pairing-demo pairing-demo--dark">
        <div className="pd-eyebrow">PROTOCOL · 12 WEEKS</div>
        <div className="pd-title"><em>Week four.</em><br/>The calm begins.</div>
        <div className="pd-body">Food noise quiets. Energy stabilizes. You stop bargaining with yourself at 4pm. This is what a working protocol feels like.</div>
      </div>
    </div>
  </section>
);

const SectionVoice = () => (
  <section className="doc-section" id="voice">
    <SectionHeader num="04" kicker="VOICE" title="How Sculpted sounds." lede="Warm enough for a wellness brand. Precise enough for a clinic. Never cute. Never shameful." />

    <div className="voice-pillars">
      {[
        {num:'01', word:'Empowering', note:'We speak to a decision-maker. No shame, no pressure.'},
        {num:'02', word:'Precise',    note:'We name dosages, timelines, and trade-offs plainly.'},
        {num:'03', word:'Editorial',  note:'We write like a magazine, not a pamphlet.'},
        {num:'04', word:'Warm',       note:'We address you, not "the patient."'},
      ].map(p => (
        <div key={p.num} className="voice-pillar">
          <div className="voice-num">{p.num}</div>
          <div className="voice-word">{p.word}</div>
          <p>{p.note}</p>
        </div>
      ))}
    </div>

    <h3 className="sub-h">Do / Don't</h3>
    <div className="dodont">
      <div className="do">
        <div className="dd-label">WE SAY</div>
        <ul>
          <li>"A clinician will design your protocol in 48 hours."</li>
          <li>"Month four is where most members see the biggest shift."</li>
          <li>"Appetite suppression is a side effect, not the goal."</li>
          <li>"Sculpted is a membership, not a subscription."</li>
        </ul>
      </div>
      <div className="dont">
        <div className="dd-label">WE DON'T SAY</div>
        <ul>
          <li>"Unlock your dream body in just 30 days!"</li>
          <li>"Melt the fat with this one weird weekly shot 💉"</li>
          <li>"Revolutionary. Game-changing. Life-changing."</li>
          <li>"Don't feel guilty about dessert, Queen 👑"</li>
        </ul>
      </div>
    </div>

    <h3 className="sub-h">Tagline system</h3>
    <div className="taglines">
      <div className="tagline tagline--primary"><em>Confidence,</em> engineered.</div>
      <div className="tagline">The science of sculpting.</div>
      <div className="tagline">A softer approach to a stronger you.</div>
      <div className="tagline">Clinically guided. Editorially refined.</div>
    </div>
  </section>
);

Object.assign(window, { SectionColor, SectionType, SectionVoice });
