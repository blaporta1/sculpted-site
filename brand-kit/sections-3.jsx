// Iconography, Photography, Components, Applications

const Icon = ({ name, size = 44 }) => {
  const s = size;
  const stroke = { stroke: 'currentColor', strokeWidth: 1.2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    droplet: <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M12 3 C12 3 5 11 5 15.5 C5 19 8 21 12 21 C16 21 19 19 19 15.5 C19 11 12 3 12 3Z"/><path d="M9 15 Q10 17 12 17"/></svg>,
    leaf:    <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M4 20 C4 12 10 4 20 4 C20 14 14 20 6 20"/><path d="M4 20 L14 10"/></svg>,
    calendar:<svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><rect x="4" y="6" width="16" height="14" rx="1"/><path d="M4 10 L20 10 M9 4 L9 8 M15 4 L15 8"/></svg>,
    chat:    <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M4 6 L20 6 L20 16 L13 16 L9 20 L9 16 L4 16 Z"/><circle cx="9" cy="11" r="0.8" fill="currentColor"/><circle cx="12" cy="11" r="0.8" fill="currentColor"/><circle cx="15" cy="11" r="0.8" fill="currentColor"/></svg>,
    heart:   <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M12 20 C7 16 3 13 3 9 C3 6.5 5 5 7 5 C9 5 11 6.5 12 8 C13 6.5 15 5 17 5 C19 5 21 6.5 21 9 C21 13 17 16 12 20Z"/></svg>,
    vial:    <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M9 3 L15 3 M10 3 L10 18 Q10 21 12 21 Q14 21 14 18 L14 3"/><path d="M10 13 L14 13" strokeDasharray="1.5 1.5"/></svg>,
    scale:   <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><rect x="3" y="6" width="18" height="14" rx="1.5"/><path d="M12 6 L12 9 M9 9 L15 9"/><circle cx="12" cy="14" r="2.5"/><path d="M12 11.5 L12 13"/></svg>,
    moon:    <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M20 14 A8 8 0 1 1 10 4 A7 7 0 0 0 20 14Z"/></svg>,
    sparkle: <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M12 3 L13 10 L20 12 L13 14 L12 21 L11 14 L4 12 L11 10 Z"/></svg>,
    shield:  <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M12 3 L20 6 L20 12 Q20 18 12 21 Q4 18 4 12 L4 6 Z"/><path d="M9 12 L11 14 L15 10"/></svg>,
    pulse:   <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M3 12 L7 12 L9 7 L12 17 L14 10 L16 12 L21 12"/></svg>,
    flask:   <svg viewBox="0 0 24 24" width={s} height={s} {...stroke}><path d="M9 3 L15 3 M10 3 L10 9 L5 19 Q4 21 6 21 L18 21 Q20 21 19 19 L14 9 L14 3"/><path d="M7 15 L17 15"/></svg>,
  };
  return <div className="icon-tile"><div className="icon-art">{icons[name]}</div><div className="icon-label">{name}</div></div>;
};

const SectionIcons = () => (
  <section className="doc-section" id="icons">
    <SectionHeader num="05" kicker="ICONOGRAPHY" title="The hairline icon set." lede="Drawn on a 24×24 grid at 1.2px stroke weight. Rounded caps and joins. Single-line. Always tonal with the body text, never colored." />

    <div className="icons-grid">
      {['droplet','leaf','calendar','chat','heart','vial','scale','moon','sparkle','shield','pulse','flask'].map(n => (
        <Icon key={n} name={n} />
      ))}
    </div>

    <h3 className="sub-h">Construction rules</h3>
    <div className="icon-rules">
      <div className="rule-card">
        <div className="rule-num">01</div>
        <p><strong>24 × 24 canvas.</strong> 2px safe-area padding on all sides. Optical corrections over strict pixel snapping.</p>
      </div>
      <div className="rule-card">
        <div className="rule-num">02</div>
        <p><strong>1.2px stroke.</strong> Uniform weight across the set. Scale the stroke, not the icon, at non-standard sizes.</p>
      </div>
      <div className="rule-card">
        <div className="rule-num">03</div>
        <p><strong>Rounded terminals.</strong> Line caps and joins always rounded. No mixed square/round caps in a single icon.</p>
      </div>
      <div className="rule-card">
        <div className="rule-num">04</div>
        <p><strong>No fills.</strong> Outlines only. If a mark requires emphasis, use a solid dot — never a filled shape.</p>
      </div>
    </div>
  </section>
);

const PhotoPlaceholder = ({ label, ratio = '1/1', mood }) => (
  <div className="photo" style={{aspectRatio: ratio}}>
    <div className="photo-stripes" />
    <div className="photo-mood">{mood}</div>
    <div className="photo-label">{label}</div>
  </div>
);

const SectionPhoto = () => (
  <section className="doc-section" id="photography">
    <SectionHeader num="06" kicker="IMAGERY" title="Photography direction." lede="Skin-first. Light-led. Never a stock-photo body. Photography should feel like a morning ritual: slow, warm, intentional." />

    <h3 className="sub-h">Mood boards</h3>
    <div className="moodboard">
      <PhotoPlaceholder label="portrait · soft daylight · 3/4 profile" ratio="3/4" mood="QUIET MORNING"/>
      <PhotoPlaceholder label="hand · dropper · bathroom counter" ratio="1/1" mood="RITUAL"/>
      <PhotoPlaceholder label="linen · cream · negative space" ratio="1/1" mood="BREATHE"/>
      <PhotoPlaceholder label="clinician · gloved hand · syringe (blurred)" ratio="4/5" mood="CLINICAL"/>
      <PhotoPlaceholder label="wide lifestyle · kitchen · breakfast bowl" ratio="16/9" mood="EVERYDAY"/>
      <PhotoPlaceholder label="macro · water on skin" ratio="1/1" mood="TEXTURE"/>
    </div>

    <h3 className="sub-h">Shot list essentials</h3>
    <div className="shotlist">
      <div><div className="sl-num">01</div><div><strong>The client, present.</strong> Eyes closed or turned; never a sales smile. Natural skin texture, no heavy retouching.</div></div>
      <div><div className="sl-num">02</div><div><strong>The ritual.</strong> Hands, surfaces, light. The product or protocol as part of a morning — not a drug.</div></div>
      <div><div className="sl-num">03</div><div><strong>The clinic, softened.</strong> Medical is present but diffused. Out-of-focus vials beat sharp syringes every time.</div></div>
      <div><div className="sl-num">04</div><div><strong>Texture.</strong> Linen, milk, water, skin, paper. Close-ups that let the viewer feel the brand before reading it.</div></div>
    </div>

    <h3 className="sub-h">Light & color treatment</h3>
    <div className="photo-treatments">
      <div className="treat">
        <div className="treat-swatch" style={{background:'linear-gradient(135deg,#FBF6F1,#FCC2E6)'}}/>
        <strong>Window light</strong>
        <p>East-facing, 9–11am. Warm fill. No hard shadows.</p>
      </div>
      <div className="treat">
        <div className="treat-swatch" style={{background:'linear-gradient(135deg,#FCC2E6,#E8DFD4)'}}/>
        <strong>Skin tones</strong>
        <p>Warm-shifted, +5 magenta. Never cyan or sickly.</p>
      </div>
      <div className="treat">
        <div className="treat-swatch" style={{background:'linear-gradient(135deg,#FBF6F1,#C9A96E)'}}/>
        <strong>Grain & grade</strong>
        <p>A whisper of film grain (Fuji 400H). Lifted blacks.</p>
      </div>
    </div>
  </section>
);

Object.assign(window, { SectionIcons, SectionPhoto, Icon, PhotoPlaceholder });
