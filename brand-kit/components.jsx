// Reusable brand-kit components

const Rule = ({ width = 60, color = 'currentColor' }) => (
  <span style={{display:'inline-block', width, height:1, background:color, verticalAlign:'middle'}} />
);

const Eyebrow = ({ children, color }) => (
  <div className="eyebrow" style={color ? {color} : {}}>
    <Rule width={28} /> <span>{children}</span> <Rule width={28} />
  </div>
);

const SectionHeader = ({ num, kicker, title, lede }) => (
  <header className="section-head">
    <div className="section-meta">
      <span className="sec-num">{num}</span>
      <span className="sec-kicker">{kicker}</span>
    </div>
    <h2 className="section-title">{title}</h2>
    {lede && <p className="section-lede">{lede}</p>}
  </header>
);

const Swatch = ({ hex, name, role, pantone, cmyk, dark }) => (
  <div className={`swatch ${dark ? 'swatch--dark' : ''}`}>
    <div className="swatch-chip" style={{background: hex}}>
      <span className="swatch-hex-overlay">{hex}</span>
    </div>
    <div className="swatch-info">
      <div className="swatch-name">{name}</div>
      <div className="swatch-role">{role}</div>
      <dl className="swatch-specs">
        <div><dt>HEX</dt><dd>{hex}</dd></div>
        {pantone && <div><dt>PMS</dt><dd>{pantone}</dd></div>}
        {cmyk && <div><dt>CMYK</dt><dd>{cmyk}</dd></div>}
      </dl>
    </div>
  </div>
);

const TypeSpec = ({ family, weight, size, tracking, leading, label, sample, italic }) => (
  <div className="type-spec">
    <div className="type-sample" style={{
      fontFamily: family,
      fontWeight: weight,
      fontSize: size,
      letterSpacing: tracking,
      lineHeight: leading,
      fontStyle: italic ? 'italic' : 'normal',
    }}>{sample}</div>
    <div className="type-meta">
      <div className="type-label">{label}</div>
      <dl>
        <div><dt>Family</dt><dd>{family}</dd></div>
        <div><dt>Weight</dt><dd>{weight}</dd></div>
        <div><dt>Size</dt><dd>{size}</dd></div>
        <div><dt>Tracking</dt><dd>{tracking}</dd></div>
        <div><dt>Leading</dt><dd>{leading}</dd></div>
      </dl>
    </div>
  </div>
);

// The full Sculpted logo — the original artwork as shipped (silhouette + wordmark + MEDSPA rule, all together).
// `tone` selects a recolored version of the same artwork for dark backgrounds.
const FullLogo = ({ tone = 'black', size = 280, style = {} }) => {
  const src = tone === 'white'
    ? '../assets/sculpted-logo-white.png'
    : tone === 'pink'
    ? '../assets/sculpted-logo-pink.png'
    : '../assets/sculpted-logo-black.png';
  return <img src={src} alt="Sculpted Medspa" style={{width: size, height: 'auto', display:'block', ...style}} />;
};

const LogoLockup = ({ variant = 'primary', bg = '#FCC2E6', fg = '#111' }) => {
  // The original logo already contains the silhouette + wordmark + "MEDSPA" rule.
  // Pick the tone variant of the artwork that sits best on the background.
  const tone = (bg === '#111' || bg === '#000' || bg === '#1a1d1a' || bg === '#3B2F2F' || bg === '#0a5e3e')
    ? 'white'
    : 'black';
  const size = variant === 'horizontal' ? 240 : variant === 'mark-only' ? 160 : 300;
  return (
    <div className={`lockup ${variant === 'horizontal' ? 'lockup--h' : ''}`} style={{background: bg, color: fg}}>
      <FullLogo tone={tone} size={size} />
    </div>
  );
};

Object.assign(window, { Rule, Eyebrow, SectionHeader, Swatch, TypeSpec, FullLogo, LogoLockup });
