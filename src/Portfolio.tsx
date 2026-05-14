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

/* ─── Colors & Theme ─────────────────────────────────────────────── */
const theme = {
  bg: '#F7F4ED',
  surface: '#FFFFFF',
  surfaceSoft: '#FBF9F3',
  ink: '#0E0E0C',
  inkSoft: '#3F3F3A',
  muted: '#7A7A72',
  border: '#E6E2D7',
  borderStrong: '#D4CFC0',
  accent: '#0F4C3A',
  accentSoft: '#E7EFEB',
  highlight: '#B8541D',
};

const ff = {
  display: "'Fraunces', Georgia, 'Times New Roman', serif",
  body: "'Inter', -apple-system, 'Helvetica Neue', Arial, sans-serif",
};

/* ─── Utility Functions ────────────────────────────────────────── */
const pad = (n: number) => String(n).padStart(2, '0');

/* ─── Data ────────────────────────────────────────────────────── */
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
  { label: 'Nursing', num: '10–15', unit: 'min', caption: 'Earlier alerts before patient destabilizes.', icon: <HeartPulse size={14} /> },
  { label: 'Endocrine', num: '60–70', unit: '%', caption: 'Fewer titration phone calls per nurse, daily.', icon: <Stethoscope size={14} /> },
  { label: 'Clinic', num: '4–5', unit: 'hrs', caption: 'Reclaimed each day for higher-value care.', icon: <Clock size={14} /> },
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

/* ─── Sub-Components ──────────────────────────────────────────── */
function SampleCard({ sample, index }: { sample: typeof samples[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      className="kk-card"
      style={{
        background: theme.surface,
        border: `1px solid ${theme.border}`,
        borderRadius: 18,
        overflow: 'hidden',
      }}
    >
      <div
        className="kk-sample-head"
        style={{
          padding: '22px 26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
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
        <div
          style={{
            fontFamily: ff.display,
            fontStyle: 'italic',
            color: theme.accent,
            fontSize: 15,
            fontWeight: 500,
            minWidth: 28,
          }}
        >
          {pad(index + 1)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontFamily: ff.display,
              fontSize: 22,
              fontWeight: 500,
              margin: 0,
              color: theme.ink,
              letterSpacing: '-.015em',
              lineHeight: 1.2,
            }}
          >
            {sample.title}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: theme.muted,
              margin: '6px 0 0',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Users size={13} /> {sample.audience}
          </p>
        </div>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: `1px solid ${theme.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.inkSoft,
            flexShrink: 0,
          }}
          className={`kk-chev ${open ? 'kk-chev-open' : ''}`}
          aria-hidden
        >
          <ChevronDown size={18} />
        </div>
      </div>

      {open && (
        <div
          style={{
            padding: '22px 26px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            borderTop: `1px solid ${theme.border}`,
          }}
          className="kk-accord"
        >
          <p
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '.14em',
              color: theme.highlight,
              margin: 0,
            }}
          >
            {sample.subtitle}
          </p>
          {sample.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: 15.5,
                lineHeight: 1.7,
                color: theme.inkSoft,
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────── */
export default function KevinKiruiPortfolio() {
  return (
    <div
      style={{
        fontFamily: ff.body,
        background: theme.bg,
        color: theme.ink,
        minHeight: '100vh',
        padding: '2.5rem 1.25rem 4rem',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '4.5rem',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 13,
            color: theme.muted,
            letterSpacing: '.02em',
          }}
          className="kk-fade"
        >
          <span
            style={{
              fontFamily: ff.display,
              fontWeight: 600,
              fontSize: 19,
              color: theme.ink,
              letterSpacing: '-.01em',
            }}
          >
            Kevin Kirui
          </span>
          <span>Portfolio &middot; 2026</span>
        </div>

        {/* Hero */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              alignSelf: 'flex-start',
              padding: '7px 16px 7px 12px',
              background: theme.accentSoft,
              color: theme.accent,
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: '.02em',
            }}
            className="kk-fade kk-fade-1"
          >
            <span style={{ position: 'relative', width: 8, height: 8 }}>
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: theme.accent,
                  borderRadius: '50%',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: theme.accent,
                  borderRadius: '50%',
                }}
                className="kk-pulse"
              />
            </span>
            Available for healthcare copy projects
          </div>

          <p
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '.14em',
              color: theme.muted,
            }}
            className="kk-fade kk-fade-2"
          >
            Biomedical Equipment Technician &amp; Healthcare Copywriter
          </p>

          <h1
            style={{
              fontFamily: ff.display,
              fontSize: 68,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: '-.025em',
              margin: 0,
              color: theme.ink,
            }}
            className="kk-headline kk-fade kk-fade-2"
          >
            From device specs to{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: theme.accent }}>
              clinical outcomes.
            </span>
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: theme.inkSoft,
              margin: 0,
              maxWidth: 640,
            }}
            className="kk-fade kk-fade-3"
          >
            I translate biomedical features into time savings, fewer alarms, and measurable ROI — copy
            that nurses, radiologists, and purchasers actually act on.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }} className="kk-fade kk-fade-4">
            <a
              href="mailto:arapkirui513@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: theme.accent,
                color: '#fff',
                border: 'none',
                borderRadius: 999,
                padding: '14px 24px',
                fontSize: 14.5,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                fontFamily: ff.body,
              }}
              className="kk-cta"
            >
              Request a sample <ArrowUpRight size={16} />
            </a>
            <a
              href="https://www.notion.so/RadiFlow_AI_OnePager-359719b5e00b80bbb31cfaddc87de409"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: theme.ink,
                border: `1px solid ${theme.borderStrong}`,
                borderRadius: 999,
                padding: '13px 22px',
                fontSize: 14.5,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                fontFamily: ff.body,
              }}
              className="kk-ghost"
            >
              View RadiFlow one-pager <ExternalLink size={14} />
            </a>
          </div>
        </header>

        {/* 01 — Core Strengths */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-3">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.14em',
                  color: theme.muted,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontFamily: ff.display, fontStyle: 'italic', color: theme.accent, fontSize: 14, fontWeight: 500 }}>01</span> Core
                Strengths
              </div>
              <h2
                style={{
                  fontFamily: ff.display,
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  margin: 0,
                  color: theme.ink,
                  lineHeight: 1.15,
                  maxWidth: 560,
                }}
                className="kk-section-title"
              >
                Three reasons clinicians read past the first line.
              </h2>
            </div>
            <p
              style={{
                fontSize: 15,
                color: theme.muted,
                margin: 0,
                maxWidth: 360,
                lineHeight: 1.5,
              }}
            >
              What I bring to a brief, beyond the words on the page.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 16,
            }}
          >
            {strengths.map((st, i) => (
              <div
                key={i}
                style={{
                  background: theme.surface,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 18,
                  padding: '28px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  minHeight: 240,
                }}
                className="kk-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: theme.accentSoft,
                      color: theme.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {st.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: ff.display,
                      fontStyle: 'italic',
                      fontSize: 14,
                      color: theme.muted,
                      fontWeight: 500,
                    }}
                  >
                    {pad(i + 1)}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: ff.display,
                    fontSize: 22,
                    fontWeight: 500,
                    margin: 0,
                    color: theme.ink,
                    letterSpacing: '-.015em',
                    lineHeight: 1.2,
                  }}
                >
                  {st.title}
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: theme.inkSoft,
                    margin: 0,
                  }}
                >
                  {st.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 02 — Workflow Outcomes */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-3">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.14em',
                  color: theme.muted,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontFamily: ff.display, fontStyle: 'italic', color: theme.accent, fontSize: 14, fontWeight: 500 }}>02</span> Workflow
                Outcomes
              </div>
              <h2
                style={{
                  fontFamily: ff.display,
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  margin: 0,
                  color: theme.ink,
                  lineHeight: 1.15,
                  maxWidth: 560,
                }}
                className="kk-section-title"
              >
                The numbers buyers underline.
              </h2>
            </div>
            <p
              style={{
                fontSize: 15,
                color: theme.muted,
                margin: 0,
                maxWidth: 360,
                lineHeight: 1.5,
              }}
            >
              Concrete results pulled from real clinical workflows — not benchmarks.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 14,
            }}
          >
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  background: theme.surface,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 18,
                  padding: '24px 24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  minHeight: 200,
                }}
                className="kk-card"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: theme.muted,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: theme.surfaceSoft,
                      border: `1px solid ${theme.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.accent,
                    }}
                  >
                    {m.icon}
                  </span>
                  {m.label}
                </div>
                <div style={{ fontFamily: ff.display, fontSize: 60, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-.035em', color: theme.ink, margin: 'auto 0 0' }} className="kk-metric-num">
                  {m.num}
                  <span style={{ fontFamily: ff.display, fontStyle: 'italic', fontSize: 26, fontWeight: 400, color: theme.accent, marginLeft: 4, letterSpacing: '-.01em' }}>{m.unit}</span>
                </div>
                <p style={{ fontSize: 13.5, color: theme.inkSoft, lineHeight: 1.45, margin: 0 }}>{m.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Portfolio Samples */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-4">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.14em',
                  color: theme.muted,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontFamily: ff.display, fontStyle: 'italic', color: theme.accent, fontSize: 14, fontWeight: 500 }}>03</span> Portfolio
                Samples
              </div>
              <h2
                style={{
                  fontFamily: ff.display,
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  margin: 0,
                  color: theme.ink,
                  lineHeight: 1.15,
                  maxWidth: 560,
                }}
                className="kk-section-title"
              >
                Short writeups, each tuned to a specific clinical audience.
              </h2>
            </div>
            <p
              style={{
                fontSize: 15,
                color: theme.muted,
                margin: 0,
                maxWidth: 360,
                lineHeight: 1.5,
              }}
            >
              Click any title to expand.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {samples.map((sample, i) => (
              <SampleCard key={i} sample={sample} index={i} />
            ))}
          </div>
        </section>

        {/* 04 — Tone & Messaging */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-4">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.14em',
                  color: theme.muted,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontFamily: ff.display, fontStyle: 'italic', color: theme.accent, fontSize: 14, fontWeight: 500 }}>04</span> Tone &amp;
                Messaging
              </div>
              <h2
                style={{
                  fontFamily: ff.display,
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  margin: 0,
                  color: theme.ink,
                  lineHeight: 1.15,
                  maxWidth: 560,
                }}
                className="kk-section-title"
              >
                How I structure every piece.
              </h2>
            </div>
          </div>

          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
            {guidance.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: 18,
                  alignItems: 'baseline',
                  padding: '20px 0',
                  borderBottom: `1px solid ${theme.border}`,
                  ...(i === guidance.length - 1 ? { borderBottom: 'none' } : {}),
                }}
              >
                <span
                  style={{
                    fontFamily: ff.display,
                    fontStyle: 'italic',
                    color: theme.accent,
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                >
                  {pad(i + 1)}
                </span>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: theme.inkSoft,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* 05 — Contact */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-5">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '.14em',
                  color: theme.muted,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontFamily: ff.display, fontStyle: 'italic', color: theme.accent, fontSize: 14, fontWeight: 500 }}>05</span> Get in
                touch
              </div>
              <h2
                style={{
                  fontFamily: ff.display,
                  fontSize: 34,
                  fontWeight: 500,
                  letterSpacing: '-.02em',
                  margin: 0,
                  color: theme.ink,
                  lineHeight: 1.15,
                  maxWidth: 560,
                }}
                className="kk-section-title"
              >
                Briefs, samples, or a quick call — all welcome.
              </h2>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 12,
            }}
          >
            <a
              href="mailto:arapkirui513@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 22px',
                background: theme.surface,
                border: `1px solid ${theme.border}`,
                borderRadius: 14,
                color: theme.ink,
                textDecoration: 'none',
              }}
              className="kk-card kk-link"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: theme.accentSoft,
                    color: theme.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </span>
                <span>
                  <div
                    style={{
                      fontSize: 11,
                      color: theme.muted,
                      textTransform: 'uppercase',
                      letterSpacing: '.12em',
                      fontWeight: 600,
                    }}
                  >
                    Email
                  </div>
                  <div style={{ fontSize: 14.5, color: theme.ink, fontWeight: 500, marginTop: 3 }}>arapkirui513@gmail.com</div>
                </span>
              </span>
              <ArrowUpRight size={18} className="kk-arrow" />
            </a>

            <a
              href="https://linkedin.com/in/kevin-kirui-ba9593275"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 22px',
                background: theme.surface,
                border: `1px solid ${theme.border}`,
                borderRadius: 14,
                color: theme.ink,
                textDecoration: 'none',
              }}
              className="kk-card kk-link"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: theme.accentSoft,
                    color: theme.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Share2 size={18} />
                </span>
                <span>
                  <div
                    style={{
                      fontSize: 11,
                      color: theme.muted,
                      textTransform: 'uppercase',
                      letterSpacing: '.12em',
                      fontWeight: 600,
                    }}
                  >
                    LinkedIn
                  </div>
                  <div style={{ fontSize: 14.5, color: theme.ink, fontWeight: 500, marginTop: 3 }}>kevin-kirui-ba9593275</div>
                </span>
              </span>
              <ArrowUpRight size={18} className="kk-arrow" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 13,
            color: theme.muted,
            padding: '32px 4px 0',
            borderTop: `1px solid ${theme.border}`,
            flexWrap: 'wrap',
            gap: 12,
            marginTop: 8,
          }}
        >
          <span>&copy; {new Date().getFullYear()} Kevin Kirui &middot; Last updated May 2026</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <MapPin size={14} /> Nairobi, Kenya
          </span>
        </footer>
      </div>
    </div>
  );
}
