import React, { useState } from 'react';
import {
  Mail,
  Share2,
  Activity,
  Clock,
  HeartPulse,
  Stethoscope,
  Briefcase,
  Users,
  MapPin,
  ChevronDown,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

/* ─── Tokens ─────────────────────────────────────────────────────────── */
const c = {
  bg: '#F7F4ED',
  surface: '#FFFFFF',
  surfaceSoft: '#FBF9F3',
  ink: '#0E0E0C',
  inkSoft: '#3F3F3A',
  muted: '#7A7A72',
  border: '#E6E2D7',
  borderStrong: '#D4CFC0',
  accent: '#0F4C3A',       // forest green
  accentSoft: '#E7EFEB',
  highlight: '#B8541D',    // copper
};

const ff = {
  display: "'Fraunces', Georgia, 'Times New Roman', serif",
  body: "'Inter', -apple-system, 'Helvetica Neue', Arial, sans-serif",
};

/* ─── Injected CSS (fonts, hover, animations, reduced-motion) ────────── */
const injectedCSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');

* { box-sizing: border-box; }
body { margin: 0; }

@keyframes kkFadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes kkAccord {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes kkPulse {
  0%, 100% { transform: scale(1); opacity: .7; }
  50%      { transform: scale(2.2); opacity: 0; }
}

.kk-fade   { animation: kkFadeUp .7s cubic-bezier(.2,.7,.2,1) both; }
.kk-fade-1 { animation-delay: .05s; }
.kk-fade-2 { animation-delay: .12s; }
.kk-fade-3 { animation-delay: .20s; }
.kk-fade-4 { animation-delay: .28s; }
.kk-fade-5 { animation-delay: .36s; }
.kk-accord { animation: kkAccord .25s ease-out both; }
.kk-pulse  { animation: kkPulse 2.4s ease-out infinite; }

.kk-card { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.kk-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px -24px rgba(14,14,12,.18);
  border-color: ${c.borderStrong};
}

.kk-sample-head { transition: background .2s ease; cursor: pointer; }
.kk-sample-head:hover { background: ${c.surfaceSoft}; }
.kk-chev { transition: transform .25s ease; }
.kk-chev-open { transform: rotate(180deg); }

.kk-cta { transition: transform .2s ease, box-shadow .25s ease; }
.kk-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 36px -12px rgba(15,76,58,.45); }
.kk-ghost { transition: background .2s ease, border-color .2s ease; }
.kk-ghost:hover { background: ${c.surface}; border-color: ${c.ink}; }

.kk-link { transition: color .2s ease; }
.kk-link:hover { color: ${c.highlight}; }
.kk-link:hover .kk-arrow { transform: translate(2px,-2px); }
.kk-arrow { transition: transform .2s ease; }

::selection { background: ${c.accent}; color: #fff; }

@media (max-width: 720px) {
  .kk-headline  { font-size: 42px !important; }
  .kk-metric-num { font-size: 44px !important; }
  .kk-section-title { font-size: 26px !important; }
}

@media (prefers-reduced-motion: reduce) {
  .kk-fade, .kk-accord, .kk-pulse, .kk-card, .kk-sample-head, .kk-chev,
  .kk-cta, .kk-ghost, .kk-link, .kk-arrow {
    animation: none !important;
    transition: none !important;
  }
}
`;

/* ─── Styles ─────────────────────────────────────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  root: {
    fontFamily: ff.body,
    background: c.bg,
    color: c.ink,
    minHeight: '100vh',
    padding: '2.5rem 1.25rem 4rem',
    WebkitFontSmoothing: 'antialiased',
  },
  wrap: {
    maxWidth: 1040,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '4.5rem',
  },

  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 13,
    color: c.muted,
    letterSpacing: '.02em',
  },
  monogram: {
    fontFamily: ff.display,
    fontWeight: 600,
    fontSize: 19,
    color: c.ink,
    letterSpacing: '-.01em',
  },

  /* Hero */
  hero: { display: 'flex', flexDirection: 'column', gap: 28 },
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
    padding: '7px 16px 7px 12px',
    background: c.accentSoft,
    color: c.accent,
    borderRadius: 999,
    fontSize: 12.5,
    fontWeight: 600,
    letterSpacing: '.02em',
  },
  chipDotWrap: { position: 'relative', width: 8, height: 8 },
  chipDotCore: {
    position: 'absolute', inset: 0,
    background: c.accent, borderRadius: '50%',
  },
  chipDotPulse: {
    position: 'absolute', inset: 0,
    background: c.accent, borderRadius: '50%',
  },
  eyebrow: {
    fontSize: 12.5,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.14em',
    color: c.muted,
  },
  headline: {
    fontFamily: ff.display,
    fontSize: 68,
    fontWeight: 500,
    lineHeight: 1.02,
    letterSpacing: '-.025em',
    margin: 0,
    color: c.ink,
  },
  italic: {
    fontStyle: 'italic',
    fontWeight: 400,
    color: c.accent,
  },
  lead: {
    fontSize: 19,
    lineHeight: 1.55,
    color: c.inkSoft,
    margin: 0,
    maxWidth: 640,
  },
  heroActions: { display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 },

  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: c.accent,
    color: '#fff',
    border: 'none',
    borderRadius: 999,
    padding: '14px 24px',
    fontSize: 14.5,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: ff.body,
  },
  ctaGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'transparent',
    color: c.ink,
    border: `1px solid ${c.borderStrong}`,
    borderRadius: 999,
    padding: '13px 22px',
    fontSize: 14.5,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: ff.body,
  },

  /* Sections */
  section: { display: 'flex', flexDirection: 'column', gap: 28 },
  sectionHead: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
    paddingBottom: 8,
  },
  sectionEyebrow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.14em',
    color: c.muted,
    marginBottom: 12,
  },
  sectionNum: {
    fontFamily: ff.display,
    fontStyle: 'italic',
    color: c.accent,
    fontSize: 14,
    fontWeight: 500,
  },
  sectionTitle: {
    fontFamily: ff.display,
    fontSize: 34,
    fontWeight: 500,
    letterSpacing: '-.02em',
    margin: 0,
    color: c.ink,
    lineHeight: 1.15,
    maxWidth: 560,
  },
  sectionSub: {
    fontSize: 15,
    color: c.muted,
    margin: 0,
    maxWidth: 360,
    lineHeight: 1.5,
  },

  /* Strengths */
  strengthsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 16,
  },
  strengthCard: {
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 18,
    padding: '28px 26px',
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    minHeight: 240,
  },
  strengthTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  strengthIcon: {
    width: 46, height: 46, borderRadius: 12,
    background: c.accentSoft, color: c.accent,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  strengthIndex: {
    fontFamily: ff.display,
    fontStyle: 'italic',
    fontSize: 14,
    color: c.muted,
    fontWeight: 500,
  },
  strengthTitle: {
    fontFamily: ff.display,
    fontSize: 22,
    fontWeight: 500,
    margin: 0,
    color: c.ink,
    letterSpacing: '-.015em',
    lineHeight: 1.2,
  },
  strengthText: {
    fontSize: 14.5,
    lineHeight: 1.6,
    color: c.inkSoft,
    margin: 0,
  },

  /* Metrics — the showstopper */
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 14,
  },
  metricCard: {
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 18,
    padding: '24px 24px 22px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    minHeight: 200,
  },
  metricLabelRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 11.5,
    fontWeight: 600,
    color: c.muted,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
  },
  metricIconBox: {
    width: 28, height: 28, borderRadius: 8,
    background: c.surfaceSoft, border: `1px solid ${c.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: c.accent,
  },
  metricNum: {
    fontFamily: ff.display,
    fontSize: 60,
    fontWeight: 500,
    lineHeight: .95,
    letterSpacing: '-.035em',
    color: c.ink,
    margin: 'auto 0 0',
  },
  metricUnit: {
    fontFamily: ff.display,
    fontStyle: 'italic',
    fontSize: 26,
    fontWeight: 400,
    color: c.accent,
    marginLeft: 4,
    letterSpacing: '-.01em',
  },
  metricCaption: {
    fontSize: 13.5,
    color: c.inkSoft,
    lineHeight: 1.45,
    margin: 0,
  },

  /* Samples */
  sampleList: { display: 'flex', flexDirection: 'column', gap: 12 },
  sampleCard: {
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 18,
    overflow: 'hidden',
  },
  sampleHead: {
    padding: '22px 26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  sampleIndex: {
    fontFamily: ff.display,
    fontStyle: 'italic',
    color: c.accent,
    fontSize: 15,
    fontWeight: 500,
    minWidth: 28,
  },
  sampleHeadMain: { flex: 1, minWidth: 0 },
  sampleTitle: {
    fontFamily: ff.display,
    fontSize: 22,
    fontWeight: 500,
    margin: 0,
    color: c.ink,
    letterSpacing: '-.015em',
    lineHeight: 1.2,
  },
  sampleAudience: {
    fontSize: 13,
    color: c.muted,
    margin: '6px 0 0',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  sampleChev: {
    width: 38, height: 38, borderRadius: '50%',
    border: `1px solid ${c.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: c.inkSoft,
    flexShrink: 0,
  },
  sampleBody: {
    padding: '22px 26px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    borderTop: `1px solid ${c.border}`,
  },
  sampleSubtitle: {
    fontSize: 11.5,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.14em',
    color: c.highlight,
    margin: 0,
  },
  samplePara: {
    fontSize: 15.5,
    lineHeight: 1.7,
    color: c.inkSoft,
    margin: 0,
  },

  /* Guidance */
  guidanceList: {
    margin: 0, padding: 0, listStyle: 'none',
    display: 'flex', flexDirection: 'column',
  },
  guidanceItem: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr',
    gap: 18,
    alignItems: 'baseline',
    padding: '20px 0',
    borderBottom: `1px solid ${c.border}`,
  },
  guidanceNum: {
    fontFamily: ff.display,
    fontStyle: 'italic',
    color: c.accent,
    fontSize: 22,
    fontWeight: 500,
  },
  guidanceText: {
    fontSize: 16,
    lineHeight: 1.6,
    color: c.inkSoft,
    margin: 0,
  },

  /* Contact */
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 12,
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 22px',
    background: c.surface,
    border: `1px solid ${c.border}`,
    borderRadius: 14,
    color: c.ink,
    textDecoration: 'none',
  },
  contactLeft: { display: 'flex', alignItems: 'center', gap: 14 },
  contactIcon: {
    width: 40, height: 40, borderRadius: 10,
    background: c.accentSoft, color: c.accent,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: 11, color: c.muted,
    textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600,
  },
  contactValue: {
    fontSize: 14.5, color: c.ink, fontWeight: 500, marginTop: 3,
  },

  /* Footer */
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 13,
    color: c.muted,
    padding: '32px 4px 0',
    borderTop: `1px solid ${c.border}`,
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────── */
const strengths = [
  {
    icon: <Stethoscope size={22} />,
    title: 'Clinical fluency',
    text: 'Hands-on biomedical equipment experience across ICU, radiology, and clinical settings — no translation layer between specs and story.',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Outcome-driven copy',
    text: 'Specs become time saved, workload reduced, ROI measured — language that buyers and clinicians both trust.',
  },
  {
    icon: <Users size={22} />,
    title: 'Audience-first',
    text: 'Tuned narratives for nurses, radiologists, and clinic managers — same product, three different pitches.',
  },
];

const metrics = [
  { label: 'Radiology', num: '45–60', unit: 'min', caption: 'Saved per shift via automated hanging protocols.', icon: <Activity size={14} /> },
  { label: 'Nursing',   num: '10–15', unit: 'min', caption: 'Earlier alerts before patient destabilizes.',     icon: <HeartPulse size={14} /> },
  { label: 'Endocrine', num: '60–70', unit: '%',   caption: 'Fewer titration phone calls per nurse, daily.',   icon: <Stethoscope size={14} /> },
  { label: 'Clinic',    num: '4–5',   unit: 'hrs', caption: 'Reclaimed each day for higher-value care.',        icon: <Clock size={14} /> },
];

const samples = [
  {
    title: 'Remote Patient Monitoring',
    subtitle: 'ICU Nurse Workflow',
    audience: 'ICU nurses, critical care managers',
    paragraphs: [
      "On a busy night shift, your ICU nurses are managing vasoactive drips, ventilator alarms, families, and endless documentation. Our platform steps in as a quiet extra pair of hands, turning raw device data into clear, prioritized actions so nurses focus on the sickest patients instead of chasing numbers.",
      "Instead of watching six monitors and guessing who to see first, nurses get a single ranked view of which patients are trending unstable in the next 10–15 minutes. Fewer surprise desaturations, earlier interventions, less reactive running between rooms.",
      "Automatic documentation of key events cuts charting time and alarm fatigue — measurable improvements in nurse satisfaction and patient safety.",
    ],
  },
  {
    title: 'Diagnostic Imaging Workflow',
    subtitle: 'Radiologist Efficiency',
    audience: 'Radiologists, radiology administrators',
    paragraphs: [
      "For a radiologist reading 40+ chest CTs per shift, manual hanging, load lag, and app switching waste valuable time. Our Enterprise Imaging Workflow automates hanging protocols, pre-loads studies, and populates report templates.",
      "Result: 45–60 minutes saved per shift (10–15% more cases read), ~40% less technologist setup time, and reduced repeat imaging through automated quality checks.",
    ],
  },
  {
    title: 'Insulin Pump Management',
    subtitle: 'Endocrine Clinic',
    audience: 'Endocrine nurses, diabetes clinic managers',
    paragraphs: [
      "Nurses in a busy clinic spend 6–8 hours/day on titration calls for Type 1 pump patients. Auto-correction algorithms handle micro-adjustments continuously, cutting phone calls by 60–70% and returning 4–5 hours per day for education and urgent care.",
      "In a 3-nurse clinic with 200 active patients, that's 60+ reclaimed hours per month for higher-value, patient-facing work.",
    ],
  },
];

const guidance = [
  'Start with a one-line clinician pain point, follow with a one-sentence solution, then list 2–3 quantifiable outcomes.',
  'Lead with the strongest number for scannability — the eye finds digits before words.',
  'Use simple math where it helps (time saved × caseload = hours back) — buyers translate that into staffing.',
];

const pad = (n: number) => String(n).padStart(2, '0');

/* ─── Sample card ────────────────────────────────────────────────────── */
function SampleCard({ sample, index }: { sample: typeof samples[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="kk-card" style={s.sampleCard}>
      <div
        className="kk-sample-head"
        style={s.sampleHead}
        onClick={() => setOpen((o) => !o)}
        role="button"
        aria-expanded={open}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
      >
        <div style={s.sampleIndex}>{pad(index + 1)}</div>
        <div style={s.sampleHeadMain}>
          <h3 style={s.sampleTitle}>{sample.title}</h3>
          <p style={s.sampleAudience}>
            <Users size={13} /> {sample.audience}
          </p>
        </div>
        <div style={s.sampleChev} className={`kk-chev ${open ? 'kk-chev-open' : ''}`} aria-hidden>
          <ChevronDown size={18} />
        </div>
      </div>

      {open && (
        <div style={s.sampleBody} className="kk-accord">
          <p style={s.sampleSubtitle}>{sample.subtitle}</p>
          {sample.paragraphs.map((p, i) => (
            <p key={i} style={s.samplePara}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────── */
export default function KevinKiruiPortfolio() {
  return (
    <>
      <style>{injectedCSS}</style>

      <div style={s.root}>
        <div style={s.wrap}>
          {/* Top bar */}
          <div style={s.topBar} className="kk-fade">
            <span style={s.monogram}>Kevin Kirui</span>
            <span>Portfolio &middot; 2026</span>
          </div>

          {/* Hero */}
          <header style={s.hero}>
            <div style={s.chip} className="kk-fade kk-fade-1">
              <span style={s.chipDotWrap}>
                <span style={s.chipDotPulse} className="kk-pulse" />
                <span style={s.chipDotCore} />
              </span>
              Available for healthcare copy projects
            </div>

            <p style={s.eyebrow} className="kk-fade kk-fade-2">
              Biomedical Equipment Technician &amp; Healthcare Copywriter
            </p>

            <h1 style={s.headline} className="kk-headline kk-fade kk-fade-2">
              From device specs to{' '}
              <span style={s.italic}>clinical outcomes.</span>
            </h1>

            <p style={s.lead} className="kk-fade kk-fade-3">
              I translate biomedical features into time savings, fewer alarms, and measurable ROI — copy
              that nurses, radiologists, and purchasers actually act on.
            </p>

            <div style={s.heroActions} className="kk-fade kk-fade-4">
              <a href="mailto:arapkirui513@gmail.com" style={s.ctaPrimary} className="kk-cta">
                Request a sample <ArrowUpRight size={16} />
              </a>
              <a
                href="https://www.notion.so/RadiFlow_AI_OnePager-359719b5e00b80bbb31cfaddc87de409"
                target="_blank"
                rel="noopener noreferrer"
                style={s.ctaGhost}
                className="kk-ghost"
              >
                View RadiFlow one-pager <ExternalLink size={14} />
              </a>
            </div>
          </header>

          {/* 01 — Core Strengths */}
          <section style={s.section} className="kk-fade kk-fade-3">
            <div style={s.sectionHead}>
              <div>
                <div style={s.sectionEyebrow}>
                  <span style={s.sectionNum}>01</span> Core Strengths
                </div>
                <h2 style={s.sectionTitle} className="kk-section-title">
                  Three reasons clinicians read past the first line.
                </h2>
              </div>
              <p style={s.sectionSub}>
                What I bring to a brief, beyond the words on the page.
              </p>
            </div>

            <div style={s.strengthsGrid}>
              {strengths.map((st, i) => (
                <div key={i} style={s.strengthCard} className="kk-card">
                  <div style={s.strengthTop}>
                    <div style={s.strengthIcon}>{st.icon}</div>
                    <span style={s.strengthIndex}>{pad(i + 1)}</span>
                  </div>
                  <h3 style={s.strengthTitle}>{st.title}</h3>
                  <p style={s.strengthText}>{st.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 02 — Workflow Outcomes (the showstopper) */}
          <section style={s.section} className="kk-fade kk-fade-3">
            <div style={s.sectionHead}>
              <div>
                <div style={s.sectionEyebrow}>
                  <span style={s.sectionNum}>02</span> Workflow Outcomes
                </div>
                <h2 style={s.sectionTitle} className="kk-section-title">
                  The numbers buyers underline.
                </h2>
              </div>
              <p style={s.sectionSub}>
                Concrete results pulled from real clinical workflows — not benchmarks.
              </p>
            </div>

            <div style={s.metricsGrid}>
              {metrics.map((m, i) => (
                <div key={i} style={s.metricCard} className="kk-card">
                  <div style={s.metricLabelRow}>
                    <span style={s.metricIconBox}>{m.icon}</span>
                    {m.label}
                  </div>
                  <div style={s.metricNum} className="kk-metric-num">
                    {m.num}
                    <span style={s.metricUnit}>{m.unit}</span>
                  </div>
                  <p style={s.metricCaption}>{m.caption}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 — Portfolio Samples */}
          <section style={s.section} className="kk-fade kk-fade-4">
            <div style={s.sectionHead}>
              <div>
                <div style={s.sectionEyebrow}>
                  <span style={s.sectionNum}>03</span> Portfolio Samples
                </div>
                <h2 style={s.sectionTitle} className="kk-section-title">
                  Short writeups, each tuned to a specific clinical audience.
                </h2>
              </div>
              <p style={s.sectionSub}>Click any title to expand.</p>
            </div>

            <div style={s.sampleList}>
              {samples.map((sample, i) => (
                <SampleCard key={i} sample={sample} index={i} />
              ))}
            </div>
          </section>

          {/* 04 — Tone & Messaging */}
          <section style={s.section} className="kk-fade kk-fade-4">
            <div style={s.sectionHead}>
              <div>
                <div style={s.sectionEyebrow}>
                  <span style={s.sectionNum}>04</span> Tone &amp; Messaging
                </div>
                <h2 style={s.sectionTitle} className="kk-section-title">
                  How I structure every piece.
                </h2>
              </div>
            </div>

            <ul style={s.guidanceList}>
              {guidance.map((item, i) => (
                <li
                  key={i}
                  style={{
                    ...s.guidanceItem,
                    ...(i === guidance.length - 1 ? { borderBottom: 'none' } : {}),
                  }}
                >
                  <span style={s.guidanceNum}>{pad(i + 1)}</span>
                  <p style={s.guidanceText}>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* 05 — Contact */}
          <section style={s.section} className="kk-fade kk-fade-5">
            <div style={s.sectionHead}>
              <div>
                <div style={s.sectionEyebrow}>
                  <span style={s.sectionNum}>05</span> Get in touch
                </div>
                <h2 style={s.sectionTitle} className="kk-section-title">
                  Briefs, samples, or a quick call — all welcome.
                </h2>
              </div>
            </div>

            <div style={s.contactGrid}>
              <a href="mailto:arapkirui513@gmail.com" style={s.contactLink} className="kk-card kk-link">
                <span style={s.contactLeft}>
                  <span style={s.contactIcon}><Mail size={18} /></span>
                  <span>
                    <div style={s.contactLabel}>Email</div>
                    <div style={s.contactValue}>arapkirui513@gmail.com</div>
                  </span>
                </span>
                <ArrowUpRight size={18} className="kk-arrow" />
              </a>

              <a
                href="https://linkedin.com/in/kevin-kirui-ba9593275"
                target="_blank"
                rel="noopener noreferrer"
                style={s.contactLink}
                className="kk-card kk-link"
              >
                <span style={s.contactLeft}>
                  <span style={s.contactIcon}><Share2 size={18} /></span>
                  <span>
                    <div style={s.contactLabel}>LinkedIn</div>
                    <div style={s.contactValue}>kevin-kirui-ba9593275</div>
                  </span>
                </span>
                <ArrowUpRight size={18} className="kk-arrow" />
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer style={s.footer}>
            <span>&copy; {new Date().getFullYear()} Kevin Kirui &middot; Last updated May 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={14} /> Nairobi, Kenya
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}