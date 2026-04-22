// Section components for the brand kit

const SectionCover = () => (
  <section className="cover" id="cover">
    <div className="cover-frame">
      <div className="cover-top">
        <div className="cover-id">
          <div>BRAND GUIDELINES</div>
          <div>VOL. 01 — 2026</div>
        </div>
        <div className="cover-id cover-id--right">
          <div>INTERNAL & PARTNER USE</div>
          <div>EDITION 1.0</div>
        </div>
      </div>
      <div className="cover-center">
        <FullLogo tone="black" size={560} />
        <p className="cover-tag">The Brand Book</p>
      </div>
      <div className="cover-bottom">
        <div className="cover-quote">
          <em>"Confidence, engineered."</em>
        </div>
        <div className="cover-meta">
          <div>A visual identity system</div>
          <div>for the science of sculpting</div>
        </div>
      </div>
    </div>
  </section>
);

const SectionIntro = () => (
  <section className="doc-section" id="intro">
    <SectionHeader num="00" kicker="INTRODUCTION" title="A brand built on transformation." lede="Sculpted Medspa helps clients pursue their best self through physician-supervised GLP-1 telehealth. The identity pairs the precision of modern medicine with the softness of a spa — editorial, feminine, and unmistakably confident." />
    <div className="intro-grid">
      <div className="intro-card">
        <div className="intro-num">01</div>
        <div className="intro-label">MISSION</div>
        <p>To make world-class weight-management care as accessible and aspirational as a skincare appointment.</p>
      </div>
      <div className="intro-card">
        <div className="intro-num">02</div>
        <div className="intro-label">AUDIENCE</div>
        <p>Women 28–55 who expect expertise and elegance in equal measure. Results-focused, brand-literate, busy.</p>
      </div>
      <div className="intro-card">
        <div className="intro-num">03</div>
        <div className="intro-label">PROMISE</div>
        <p>A calm, clinical partnership that produces measurable results — sculpted at your own pace, from anywhere.</p>
      </div>
      <div className="intro-card">
        <div className="intro-num">04</div>
        <div className="intro-label">CATEGORY</div>
        <p>GLP-1 telehealth & metabolic wellness. Positioned at the intersection of medspa luxury and clinical care.</p>
      </div>
    </div>
  </section>
);

const SectionLogo = () => (
  <section className="doc-section" id="logo">
    <SectionHeader num="01" kicker="IDENTITY" title="Logo & lockups." lede="The mark is a pairing — a hand-drawn feminine silhouette rising above a high-contrast serif wordmark. It reads as editorial and clinical at once. Use whichever lockup best fits the space; never redraw." />

    <div className="logo-hero">
      <img src="../assets/sculpted-logo-pink.png" alt="Primary Sculpted Medspa logo" />
      <div className="logo-hero-caption">
        <div className="tag">PRIMARY LOCKUP</div>
        <div>Vertical · silhouette above wordmark · on Blush</div>
      </div>
    </div>

    <h3 className="sub-h">Approved lockups</h3>
    <div className="lockups-grid">
      <div>
        <LogoLockup variant="primary" bg="#FCC2E6" fg="#111" />
        <div className="lockup-caption"><strong>Primary</strong> · the full logo on Blush</div>
      </div>
      <div>
        <LogoLockup variant="primary" bg="#FBF6F1" fg="#111" />
        <div className="lockup-caption"><strong>On Cream</strong> · default editorial surface</div>
      </div>
      <div>
        <LogoLockup variant="primary" bg="#FFFFFF" fg="#111" />
        <div className="lockup-caption"><strong>On White</strong> · clinical & print applications</div>
      </div>
      <div>
        <LogoLockup variant="primary" bg="#111" fg="#FBF6F1" />
        <div className="lockup-caption"><strong>Reversed</strong> · white logo on ink for dark surfaces</div>
      </div>
    </div>

    <h3 className="sub-h">Clear space & minimum size</h3>
    <div className="two-col">
      <div className="clearspace-demo">
        <div className="cs-box">
          <div className="cs-guide cs-top"><span>x</span></div>
          <div className="cs-guide cs-bottom"><span>x</span></div>
          <div className="cs-guide cs-left"><span>x</span></div>
          <div className="cs-guide cs-right"><span>x</span></div>
          <LogoLockup variant="primary" bg="#FBF6F1" fg="#111" />
        </div>
        <p className="caption">Maintain clear space equal to <em>x</em>, the cap-height of the wordmark, on all sides.</p>
      </div>
      <div className="min-size-demo">
        <div className="minsize-row">
          <div><LogoLockup variant="primary" bg="#FBF6F1" fg="#111" /></div>
          <div style={{transform:'scale(0.55)', transformOrigin:'left top'}}><LogoLockup variant="primary" bg="#FBF6F1" fg="#111" /></div>
          <div style={{transform:'scale(0.3)', transformOrigin:'left top'}}><LogoLockup variant="primary" bg="#FBF6F1" fg="#111" /></div>
        </div>
        <p className="caption">Minimum print size: 24mm wide. Minimum digital: 96 px wide. Below this, use the mark alone.</p>
      </div>
    </div>

    <h3 className="sub-h">Don'ts</h3>
    <div className="donts-grid">
      <div className="dont">
        <div className="dont-preview" style={{background:'linear-gradient(45deg,#f0c,#0cf)'}}>
          <FullLogo tone="white" size={220} />
        </div>
        <div className="dont-label"><span className="x">✕</span> Don't place on busy gradients</div>
      </div>
      <div className="dont">
        <div className="dont-preview" style={{background:'#FBF6F1'}}>
          <div style={{transform:'scaleX(0.55)', transformOrigin:'center'}}><FullLogo tone="black" size={240} /></div>
        </div>
        <div className="dont-label"><span className="x">✕</span> Don't stretch or distort</div>
      </div>
      <div className="dont">
        <div className="dont-preview" style={{background:'#FBF6F1'}}>
          <div style={{color:'#7c3', fontFamily:'Cormorant Garamond', fontSize:48, letterSpacing:'0.04em', fontWeight:500}}>SCULPTED</div>
        </div>
        <div className="dont-label"><span className="x">✕</span> Don't recolor outside the palette</div>
      </div>
      <div className="dont">
        <div className="dont-preview" style={{background:'#FBF6F1'}}>
          <div style={{fontFamily:'Georgia', fontStyle:'italic', fontSize:42}}>Sculpted</div>
        </div>
        <div className="dont-label"><span className="x">✕</span> Don't re-set the wordmark</div>
      </div>
    </div>
  </section>
);

Object.assign(window, { SectionCover, SectionIntro, SectionLogo });
