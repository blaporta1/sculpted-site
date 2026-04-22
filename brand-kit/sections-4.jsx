// UI Components and Applications (social, stationery)

const SectionComponents = () => {
  const [email, setEmail] = React.useState('');
  const [dose, setDose] = React.useState(0.25);
  return (
    <section className="doc-section" id="components">
      <SectionHeader num="07" kicker="UI COMPONENTS" title="Interface building blocks." lede="Digital product surfaces inherit the editorial system. Generous padding, hairline rules, and a single confident accent per screen." />

      <h3 className="sub-h">Buttons</h3>
      <div className="btn-demo">
        <button className="btn btn--primary">Start your consultation</button>
        <button className="btn btn--secondary">Book a call</button>
        <button className="btn btn--ghost">Learn more</button>
        <button className="btn btn--dark">Member login</button>
        <button className="btn btn--primary" disabled>Submitting…</button>
      </div>

      <h3 className="sub-h">Form fields</h3>
      <div className="form-demo">
        <label className="field">
          <span className="field-label">EMAIL ADDRESS</span>
          <input type="email" placeholder="you@domain.com" value={email} onChange={e=>setEmail(e.target.value)} />
          <span className="field-hint">We'll only email about your consultation.</span>
        </label>
        <label className="field">
          <span className="field-label">WEEKLY DOSE · {dose}mg</span>
          <input type="range" min="0.25" max="2.4" step="0.25" value={dose} onChange={e=>setDose(+e.target.value)} />
          <div className="dose-ticks">
            {[0.25,0.5,1.0,1.7,2.4].map(v=><span key={v}>{v}</span>)}
          </div>
        </label>
        <label className="field field--check">
          <input type="checkbox" defaultChecked /> <span>I agree to the telehealth terms of service</span>
        </label>
      </div>

      <h3 className="sub-h">Cards & modules</h3>
      <div className="cards-demo">
        <article className="s-card">
          <div className="s-card-eyebrow">MEMBERSHIP · MOST POPULAR</div>
          <div className="s-card-title">The Protocol</div>
          <div className="s-card-price"><span>$</span>349<small>/mo</small></div>
          <ul className="s-card-list">
            <li>Physician consultation within 48h</li>
            <li>GLP-1 medication, shipped monthly</li>
            <li>Unlimited clinician messaging</li>
            <li>Quarterly lab work, included</li>
          </ul>
          <button className="btn btn--primary btn--full">Start consultation</button>
        </article>
        <article className="s-card s-card--member">
          <div className="s-card-eyebrow">MEMBER · MONTH 04</div>
          <div className="s-card-member-greet">Good morning, <em>Elena.</em></div>
          <div className="s-card-stat-row">
            <div><div className="stat-big">−14.2<small>lb</small></div><div className="stat-meta">SINCE WEEK 01</div></div>
            <div><div className="stat-big">0.5<small>mg</small></div><div className="stat-meta">CURRENT DOSE</div></div>
          </div>
          <div className="s-card-next">
            <div className="sc-next-label">NEXT CHECK-IN</div>
            <div className="sc-next-date">Thu · Apr 24 · 10:30a</div>
          </div>
        </article>
        <article className="s-card s-card--dark">
          <div className="s-card-eyebrow" style={{color:'#FCC2E6'}}>PROGRESS</div>
          <div className="s-card-title" style={{color:'#FBF6F1'}}>Week 12</div>
          <div className="s-card-quote">"The food noise is gone. I haven't thought about dinner at 10am in months."</div>
          <div className="s-card-attr">— member, age 41, Austin</div>
        </article>
      </div>

      <h3 className="sub-h">Data & indicators</h3>
      <div className="data-demo">
        <div className="pill pill--blush">ACTIVE MEMBER</div>
        <div className="pill pill--ink">LAB WORK DUE</div>
        <div className="pill pill--rose">DOSE INCREASED</div>
        <div className="pill pill--champagne">ANNIVERSARY</div>
        <div className="pill pill--outline">PAUSED</div>
      </div>
    </section>
  );
};

const SectionApplications = () => (
  <section className="doc-section" id="applications">
    <SectionHeader num="08" kicker="APPLICATIONS" title="The brand, in the world." lede="A few representative surfaces. Every application follows the same rules: one dominant image or word per composition, hairline structure, and Blush as the emotional key." />

    <h3 className="sub-h">Social — Instagram grid</h3>
    <div className="ig-grid">
      <div className="ig ig--quote">
        <div className="ig-eyebrow">NO. 01</div>
        <div className="ig-quote"><em>Food noise</em>,<br/>quieted.</div>
        <div className="ig-foot"><Rule width={24}/> SCULPTED <Rule width={24}/></div>
      </div>
      <div className="ig ig--photo">
        <PhotoPlaceholder label="portrait · morning light" ratio="1/1" mood="MEMBER · MONTH 03" />
      </div>
      <div className="ig ig--stat">
        <div className="ig-stat-num">15%</div>
        <div className="ig-stat-label">AVERAGE BODY WEIGHT<br/>REDUCTION AT MONTH SIX</div>
        <div className="ig-foot"><Rule width={24} color="#111"/> SCULPTED <Rule width={24} color="#111"/></div>
      </div>
      <div className="ig ig--lesson">
        <div className="ig-eyebrow">PROTOCOL / 04</div>
        <div className="ig-lesson-title">How GLP-1 <em>actually</em> works.</div>
        <div className="ig-lesson-body">A four-slide explainer on appetite signaling, dosing curves, and why week three feels different.</div>
        <div className="ig-swipe">SWIPE →</div>
      </div>
      <div className="ig ig--photo ig--photo-dark">
        <PhotoPlaceholder label="hand · water · ritual" ratio="1/1" mood="THE RITUAL" />
      </div>
      <div className="ig ig--mark">
        <FullLogo tone="black" size={260} />
      </div>
    </div>

    <h3 className="sub-h">Stories & vertical</h3>
    <div className="stories-row">
      <div className="story story--takeover">
        <div className="story-label">DOSE WEEK</div>
        <div className="story-big">0.5<small>mg</small></div>
        <div className="story-sub">WEEK 04 · MORNING 1</div>
        <div className="story-foot">SCULPTED<sup>™</sup></div>
      </div>
      <div className="story story--quote">
        <div className="story-quote"><em>"I haven't weighed myself in six weeks.<br/>I just feel different."</em></div>
        <div className="story-attr">— L. · MEMBER · HOUSTON</div>
      </div>
      <div className="story story--cta">
        <div className="story-eyebrow">NOW ENROLLING</div>
        <div className="story-cta-title">Spring<br/><em>Cohort.</em></div>
        <div className="story-cta-body">48-hour clinician consultation. Month-to-month.</div>
        <div className="story-swipe">SWIPE UP →</div>
      </div>
    </div>

    <h3 className="sub-h">Business card — both sides</h3>
    <div className="cards-set">
      <div className="bcard bcard--front">
        <FullLogo tone="black" size={220} />
      </div>
      <div className="bcard bcard--back">
        <div className="bcard-name">Dr. Amara Solis, MD</div>
        <div className="bcard-role">MEDICAL DIRECTOR</div>
        <div className="bcard-divider"><Rule width={80} color="#111"/></div>
        <div className="bcard-meta">
          <div>amara@sculptedmedspa.com</div>
          <div>(512) 555 · 0142</div>
          <div>sculptedmedspa.com</div>
        </div>
      </div>
    </div>

    <h3 className="sub-h">Email signature</h3>
    <div className="esig">
      <div className="esig-left">
        <FullLogo tone="black" size={140}/>
      </div>
      <div className="esig-mid">
        <div className="esig-name">Elena Reyes</div>
        <div className="esig-role">MEMBER ADVOCATE · SCULPTED MEDSPA</div>
        <div className="esig-rule"><Rule width={160} color="#111"/></div>
        <div className="esig-meta">
          <div>elena@sculptedmedspa.com</div>
          <div>sculptedmedspa.com · (512) 555 · 0100</div>
        </div>
        <div className="esig-tag"><em>Confidence, engineered.</em></div>
      </div>
    </div>

    <h3 className="sub-h">Packaging — monthly shipment</h3>
    <div className="pkg-row">
      <div className="pkg pkg--box">
        <div className="pkg-corner tl"/>
        <div className="pkg-corner tr"/>
        <div className="pkg-corner bl"/>
        <div className="pkg-corner br"/>
        <div className="pkg-center">
          <FullLogo tone="black" size={240}/>
          <div className="pkg-sub" style={{marginTop:16}}><Rule width={32}/> MONTH 04 <Rule width={32}/></div>
        </div>
        <div className="pkg-bottom">MONTHLY PROTOCOL · HANDLE WITH CARE</div>
      </div>
      <div className="pkg pkg--card">
        <div className="pkg-card-eyebrow">A NOTE FROM YOUR CLINICIAN</div>
        <div className="pkg-card-title"><em>Elena,</em><br/>you're right on pace.</div>
        <p className="pkg-card-body">Your labs came back beautifully. We're moving to 0.5mg this month — the next step in a careful titration. I'll check in Thursday.</p>
        <div className="pkg-card-sign">— Dr. Solis</div>
      </div>
    </div>
  </section>
);

Object.assign(window, { SectionComponents, SectionApplications });
