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
  ArrowUpRight,
  GitBranch,
  Database,
  Code2,
  BarChart2,
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

/* ─── Utility ─────────────────────────────────────────────────── */
const pad = (n: number) => String(n).padStart(2, '0');

/* ─── Data ────────────────────────────────────────────────────── */
const strengths = [
  {
    icon: <Stethoscope size={22} />,
    title: 'Clinical fluency',
    text: 'Hands-on biomedical equipment exposure across ICU, radiology, and clinical settings, so there is no translation gap between device specs, operational data, and day-to-day workflow.',
    tooling: null,
  },
  {
    icon: <Database size={22} />,
    title: 'Data & analytics',
    text: 'Clinical workflows modeled from real device and operational data using Python and SQL, not generic benchmarks or hypothetical diagrams.',
    tooling: 'Python · SQL · PostgreSQL · Pandas · Jupyter',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Outcome-driven communication',
    text: 'Data models and technical workflows translated into time saved, workload reduced, and clearer operational decisions in language clinicians and buyers can actually use.',
    tooling: null,
  },
];

const techStack = [
  { label: 'Python', icon: <Code2 size={13} /> },
  { label: 'SQL', icon: <Database size={13} /> },
  { label: 'PostgreSQL', icon: <Database size={13} /> },
  { label: 'Pandas', icon: <BarChart2 size={13} /> },
  { label: 'ETL', icon: <Activity size={13} /> },
  { label: 'Jupyter', icon: <Code2 size={13} /> },
  { label: 'CSV / Excel', icon: <BarChart2 size={13} /> },
  { label: 'GitHub', icon: <GitBranch size={13} /> },
];

const metrics = [
  { label: 'Radiology', num: '45–60', unit: 'min', caption: 'Saved per shift via automated hanging protocols.', icon: <Activity size={14} /> },
  { label: 'Nursing', num: '10–15', unit: 'min', caption: 'Earlier alerts before patient destabilizes.', icon: <HeartPulse size={14} /> },
  { label: 'Endocrine', num: '60–70', unit: '%', caption: 'Fewer titration phone calls per nurse, daily.', icon: <Stethoscope size={14} /> },
  { label: 'Clinic', num: '4–5', unit: 'hrs', caption: 'Reclaimed each day for higher-value care.', icon: <Clock size={14} /> },
];

interface Sample {
  title: string;
  subtitle: string;
  audience: string;
  before: string;
  process: string;
  outcomes: string[];
}

const samples: Sample[] = [
  {
    title: 'Remote Patient Monitoring',
    subtitle: 'ICU Nurse Workflow',
    audience: 'ICU nurses, critical care managers',
    before:
      'ICU nurses were balancing multiple monitors and alerts, with no clear priority sequence during busy shifts.',
    process:
      'Mapped device data flow, reduced noisy alert conditions, and restructured priority logic, then created workflow-first documentation and quick-reference guides for nursing teams.',
    outcomes: [
      'Fewer workflow bottlenecks during high-alert periods',
      'Earlier interventions from trends visible 10–15 minutes sooner',
      'Less reactive movement between rooms',
      'Cleaner event documentation and reduced alarm fatigue',
    ],
  },
  {
    title: 'Diagnostic Imaging Workflow',
    subtitle: 'Radiologist Efficiency',
    audience: 'Radiologists, radiology administrators',
    before:
      'Radiologists reading 40+ chest CTs per shift were losing time to manual hanging protocols, lag, and repeated app switching.',
    process:
      'Restructured reporting workflow logic and clarified turnaround documentation so radiologists and operations teams worked from the same operational view.',
    outcomes: [
      '45–60 minutes saved per radiologist per shift',
      'Cleaner reporting of productivity gains at team level',
      'Reduced manual setup and less context switching',
      'Faster interpretation with fewer repeat quality checks',
    ],
  },
  {
    title: 'Insulin Pump Management',
    subtitle: 'Endocrine Clinic',
    audience: 'Endocrine nurses, diabetes clinic managers',
    before:
      'Endocrine nurses were spending 6–8 hours daily on titration calls, reducing time for patient education and urgent care.',
    process:
      'Rebuilt the titration tracking workflow and documented the updated process in a format ward staff could follow without additional training.',
    outcomes: [
      '60–70% fewer titration phone calls per nurse, daily',
      '4–5 hours reclaimed per nurse per day',
      'Cleaner organization of routine titration decisions',
      'Nursing time redirected to education and urgent care',
    ],
  },
];

const guidance = [
  'Start with a one-line clinician pain point, follow with a one-sentence solution, then list 2–3 quantifiable outcomes.',
  'Lead with the strongest number for scannability, the eye finds digits before words.',
  'Use simple math where it helps (time saved × caseload = hours back), so buyers can map value to staffing.',
];

/* ─── Sub-Components ──────────────────────────────────────────── */

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
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
      <span style={{ fontFamily: ff.display, fontStyle: 'italic', color: theme.accent, fontSize: 14, fontWeight: 500 }}>
        {num}
      </span>{' '}
      {title}
    </div>
  );
}

function SampleCard({ sample, index }: { sample: Sample; index: number }) {
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
            padding: '24px 26px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
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

          {/* Before */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', color: theme.muted, margin: 0 }}>
              Before
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
              {sample.before}
            </p>
          </div>

          {/* Process */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', color: theme.muted, margin: 0 }}>
              Process
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: theme.inkSoft, margin: 0 }}>
              {sample.process}
            </p>
          </div>

          {/* Outcome */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', color: theme.muted, margin: 0 }}>
              Outcome
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sample.outcomes.map((o, i) => (
                <li
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, color: theme.inkSoft, lineHeight: 1.45 }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: theme.accent,
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  {o}
                </li>
              ))}
            </ul>
          </div>
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
            flexWrap: 'wrap',
            gap: 12,
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
          <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href="https://github.com/arapkirui513-hub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.muted, display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}
              className="kk-link"
            >
              <GitBranch size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-kirui-ba9593275/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.muted, display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}
              className="kk-link"
            >
              <Share2 size={15} /> LinkedIn
            </a>
          </span>
        </div>

        {/* Hero */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* availability chip */}
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
              <span style={{ position: 'absolute', inset: 0, background: theme.accent, borderRadius: '50%' }} />
              <span style={{ position: 'absolute', inset: 0, background: theme.accent, borderRadius: '50%' }} className="kk-pulse" />
            </span>
            Available for healthcare data and workflow projects
          </div>

          {/* label */}
          <p
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '.14em',
              color: theme.muted,
              margin: 0,
            }}
            className="kk-fade kk-fade-2"
          >
            Healthcare Data Engineering &amp; Clinical Workflow Support
          </p>

          {/* headline */}
          <h1
            style={{
              fontFamily: ff.display,
              fontSize: 62,
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: '-.025em',
              margin: 0,
              color: theme.ink,
              maxWidth: 820,
            }}
            className="kk-headline kk-fade kk-fade-2"
          >
            I help hospital and health-tech teams turn messy clinical workflows and scattered data into clear systems and documentation clinicians actually use.
          </h1>

          {/* subheadline */}
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: theme.inkSoft,
              margin: 0,
              maxWidth: 700,
            }}
            className="kk-fade kk-fade-3"
          >
            Clinically clear guides, workflows, and data models that clinicians can read once and use on the next shift.
          </p>

          {/* supporting line */}
          <p
            style={{
              fontSize: 14.5,
              color: theme.muted,
              margin: 0,
              lineHeight: 1.5,
              maxWidth: 620,
            }}
            className="kk-fade kk-fade-3"
          >
            For hospital and clinic operations, nursing and ICU leads, and quality improvement teams.
          </p>

          {/* health-tech supporting line */}
          <p
            style={{
              fontSize: 14.5,
              color: theme.muted,
              margin: 0,
              lineHeight: 1.5,
              maxWidth: 620,
            }}
            className="kk-fade kk-fade-3"
          >
            Also supporting health-tech teams building or documenting real clinical workflows.{' '}
            <a href="#portfolio" style={{ color: theme.accent, textDecoration: 'none', fontWeight: 600 }} className="kk-link">
              &#8594; See workflow and documentation examples
            </a>
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }} className="kk-fade kk-fade-4">
            <a
              href="mailto:kiruikevin388@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: theme.accent,
                color: '#fff',
                border: 'none',
                borderRadius: 999,
                padding: '15px 26px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'none',
                fontFamily: ff.body,
                boxShadow: '0 16px 36px -14px rgba(15, 76, 58, 0.5)',
              }}
              className="kk-cta"
            >
              Discuss Your Project <ArrowUpRight size={16} />
            </a>
            <a
              href="#portfolio"
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
              View Portfolio
            </a>
          </div>

          <p
            style={{
              fontSize: 13.5,
              color: theme.muted,
              margin: 0,
              lineHeight: 1.45,
            }}
            className="kk-fade kk-fade-4"
          >
            Have a similar workflow or reporting challenge? Let&apos;s discuss it.
          </p>

          <div
            style={{
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              borderRadius: 16,
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              flexWrap: 'wrap',
            }}
            className="kk-fade kk-fade-5"
          >
            <a
              href="https://github.com/arapkirui513-hub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: theme.ink, textDecoration: 'none', fontSize: 13.5, fontWeight: 600 }}
              className="kk-link"
            >
              <GitBranch size={15} /> GitHub portfolio and workflow examples
            </a>
            <span style={{ fontSize: 12.5, color: theme.muted }}>
              I work with de-identified, synthetic, or sample healthcare data and respect privacy-conscious workflow practices.
            </span>
          </div>
        </header>

        {/* 01 - Core Strengths */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-3">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <SectionLabel num="01" title="Core Strengths" />
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
            <p style={{ fontSize: 15, color: theme.muted, margin: 0, maxWidth: 360, lineHeight: 1.5 }}>
              What I bring to a workflow project, from data model to frontline communication.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
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
                  minHeight: 220,
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
                  <span style={{ fontFamily: ff.display, fontStyle: 'italic', fontSize: 14, color: theme.muted, fontWeight: 500 }}>
                    {pad(i + 1)}
                  </span>
                </div>
                <h3 style={{ fontFamily: ff.display, fontSize: 22, fontWeight: 500, margin: 0, color: theme.ink, letterSpacing: '-.015em', lineHeight: 1.2 }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  {st.text}
                </p>
                {st.tooling && (
                  <p style={{ fontSize: 12, color: theme.accent, margin: 0, fontWeight: 600, letterSpacing: '.01em' }}>
                    {st.tooling}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack strip */}
        <div
          style={{
            background: theme.surface,
            border: `1px solid ${theme.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
          className="kk-fade kk-fade-3"
        >
          <div>
            <p style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', color: theme.muted, margin: '0 0 6px' }}>
              Workflow Tooling
            </p>
            <p style={{ fontSize: 13.5, color: theme.inkSoft, margin: 0, lineHeight: 1.45 }}>
              Workflow tooling for structured healthcare, reporting, and operational data.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {techStack.map((t, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 14px',
                  background: theme.accentSoft,
                  color: theme.accent,
                  borderRadius: 999,
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: '.01em',
                }}
              >
                {t.icon}
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* 02 - Workflow Outcomes */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-3">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <SectionLabel num="02" title="Workflow Outcomes" />
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
                Workflow outcomes from ICU, radiology, endocrine, and clinic projects.
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
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
                <div
                  style={{ fontFamily: ff.display, fontSize: 60, fontWeight: 500, lineHeight: 0.95, letterSpacing: '-.035em', color: theme.ink, margin: 'auto 0 0' }}
                  className="kk-metric-num"
                >
                  {m.num}
                  <span style={{ fontFamily: ff.display, fontStyle: 'italic', fontSize: 26, fontWeight: 400, color: theme.accent, marginLeft: 4, letterSpacing: '-.01em' }}>{m.unit}</span>
                </div>
                <p style={{ fontSize: 13.5, color: theme.inkSoft, lineHeight: 1.45, margin: 0 }}>{m.caption}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13.5, color: theme.muted, margin: 0, lineHeight: 1.5 }}>
            Each metric comes from restructuring workflow logic, operational data flow, and clinician-facing documentation, not vendor benchmark claims.
          </p>
        </section>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
          className="kk-fade kk-fade-4"
        >
          <p style={{ margin: 0, fontSize: 15, color: theme.inkSoft, lineHeight: 1.5, maxWidth: 640 }}>
            Have a similar workflow or reporting challenge? Let&apos;s discuss it.
          </p>
          <a
            href="mailto:kiruikevin388@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: theme.accent,
              color: '#fff',
              borderRadius: 999,
              padding: '13px 22px',
              fontSize: 14.5,
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: ff.body,
              flexShrink: 0,
            }}
            className="kk-cta"
          >
            Discuss Your Project <ArrowUpRight size={15} />
          </a>
        </div>

        {/* 03 - Portfolio Samples */}
        <section id="portfolio" style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-4">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <SectionLabel num="03" title="Portfolio Samples" />
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
                Each sample built for a specific clinical audience.
              </h2>
            </div>
            <p style={{ fontSize: 15, color: theme.muted, margin: 0, maxWidth: 360, lineHeight: 1.5 }}>
              Click any title to expand. Each sample is structured as Before, Process, and Outcome.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {samples.map((sample, i) => (
              <SampleCard key={i} sample={sample} index={i} />
            ))}
          </div>
        </section>

        {/* CTA after portfolio */}
        <div
          style={{
            background: theme.accentSoft,
            border: `1px solid rgba(15, 76, 58, 0.15)`,
            borderRadius: 18,
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
          className="kk-fade kk-fade-4"
        >
          <div>
            <p style={{ fontFamily: ff.display, fontSize: 20, fontWeight: 500, color: theme.accent, margin: '0 0 6px', letterSpacing: '-.01em' }}>
              Have a similar workflow or reporting challenge?
            </p>
            <p style={{ fontSize: 14.5, color: theme.inkSoft, margin: 0 }}>
              Let&apos;s discuss it.
            </p>
          </div>
          <a
            href="mailto:kiruikevin388@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: theme.accent,
              color: '#fff',
              borderRadius: 999,
              padding: '13px 22px',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: ff.body,
              flexShrink: 0,
            }}
            className="kk-cta"
          >
            Discuss Your Project <ArrowUpRight size={15} />
          </a>
        </div>

        {/* 04 - About */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-4">
          <div>
            <SectionLabel num="04" title="About" />
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
              Compact background, technical focus, and communication strength.
            </h2>
          </div>

          <div
            style={{
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              borderRadius: 18,
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.65, color: theme.inkSoft, margin: 0, maxWidth: 780 }}>
              Biomedical engineering background turned healthcare workflow and data specialist, helping hospital operations and health-tech teams reduce alert fatigue, reporting friction, and documentation overload.
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft }}>
                Familiar with real healthcare workflow pressure points and handoff bottlenecks.
              </li>
              <li style={{ fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft }}>
                Growing technical depth in Python, SQL, and structured data workflow support.
              </li>
              <li style={{ fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft }}>
                Strong at practical communication and documentation that clinicians and operators can use quickly.
              </li>
              <li style={{ fontSize: 15.5, lineHeight: 1.6, color: theme.inkSoft }}>
                Focused on bridging technical logic and clinical understanding without unnecessary jargon.
              </li>
            </ul>
            <div
              style={{
                borderTop: `1px solid ${theme.border}`,
                paddingTop: 18,
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <p style={{ fontSize: 13.5, color: theme.muted, margin: 0, fontWeight: 500 }}>
                Focused on small-to-mid-size hospitals, clinics, and health-tech teams operating inside real clinical workflows.
              </p>
              <p style={{ fontSize: 13, color: theme.muted, margin: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={13} /> Nairobi, Kenya &middot; Available for remote work
              </p>
            </div>
          </div>
        </section>

        {/* 05 - Tone & Messaging */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-4">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <SectionLabel num="05" title="Tone & Messaging" />
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
                Clinically clear communication, not marketing jargon.
              </h2>
            </div>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.6, color: theme.inkSoft, margin: 0, maxWidth: 700 }}>
            Device specs and operational data become workflow guides, checklists, and implementation documentation clinicians can actually use during a shift.
          </p>

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
                  borderBottom: i < guidance.length - 1 ? `1px solid ${theme.border}` : 'none',
                }}
              >
                <span style={{ fontFamily: ff.display, fontStyle: 'italic', color: theme.accent, fontSize: 22, fontWeight: 500 }}>
                  {pad(i + 1)}
                </span>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: theme.inkSoft, margin: 0 }}>
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* 06 - Contact */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 28 }} className="kk-fade kk-fade-5">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 8 }}>
            <div>
              <SectionLabel num="06" title="Get in touch" />
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
                Tell me about your workflow problem
              </h2>
              <p style={{ fontSize: 14.5, color: theme.muted, margin: '12px 0 0', lineHeight: 1.5 }}>
                Send a short description of the workflow, reporting, data, or documentation challenge, and I&apos;ll tell you whether I can help and how.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {/* Email */}
            <a
              href="mailto:kiruikevin388@gmail.com"
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
                <span style={{ width: 40, height: 40, borderRadius: 10, background: theme.accentSoft, color: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={18} />
                </span>
                <span>
                  <div style={{ fontSize: 11, color: theme.muted, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: 14, color: theme.ink, fontWeight: 500, marginTop: 3 }}>kiruikevin388@gmail.com</div>
                </span>
              </span>
              <ArrowUpRight size={18} className="kk-arrow" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kevin-kirui-ba9593275/"
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
                <span style={{ width: 40, height: 40, borderRadius: 10, background: theme.accentSoft, color: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Share2 size={18} />
                </span>
                <span>
                  <div style={{ fontSize: 11, color: theme.muted, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600 }}>LinkedIn</div>
                  <div style={{ fontSize: 14, color: theme.ink, fontWeight: 500, marginTop: 3 }}>kevin-kirui-ba9593275</div>
                </span>
              </span>
              <ArrowUpRight size={18} className="kk-arrow" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/arapkirui513-hub"
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
                <span style={{ width: 40, height: 40, borderRadius: 10, background: theme.accentSoft, color: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GitBranch size={18} />
                </span>
                <span>
                  <div style={{ fontSize: 11, color: theme.muted, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600 }}>GitHub</div>
                  <div style={{ fontSize: 14, color: theme.ink, fontWeight: 500, marginTop: 3 }}>arapkirui513-hub</div>
                </span>
              </span>
              <ArrowUpRight size={18} className="kk-arrow" />
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~01c51401c74a81c8f4"
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
                <span style={{ width: 40, height: 40, borderRadius: 10, background: theme.accentSoft, color: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Briefcase size={18} />
                </span>
                <span>
                  <div style={{ fontSize: 11, color: theme.muted, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600 }}>Upwork</div>
                  <div style={{ fontSize: 14, color: theme.ink, fontWeight: 500, marginTop: 3 }}>Kevin Kirui</div>
                </span>
              </span>
              <ArrowUpRight size={18} className="kk-arrow" />
            </a>

            {/* Notion docs */}
            <a
              href="https://bit.ly/4t4k6ty"
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
                <span style={{ width: 40, height: 40, borderRadius: 10, background: theme.accentSoft, color: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Activity size={18} />
                </span>
                <span>
                  <div style={{ fontSize: 11, color: theme.muted, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 600 }}>Notion</div>
                  <div style={{ fontSize: 14, color: theme.ink, fontWeight: 500, marginTop: 3 }}>Supporting Documentation</div>
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
            flexDirection: 'column',
            gap: 16,
            fontSize: 13,
            color: theme.muted,
            padding: '32px 4px 0',
            borderTop: `1px solid ${theme.border}`,
            marginTop: 8,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: ff.display, fontWeight: 600, fontSize: 16, color: theme.ink, letterSpacing: '-.01em' }}>
                Kevin Kirui
              </span>
              <span style={{ fontSize: 12.5 }}>Healthcare Data Engineer and clinically clear communicator for frontline workflows.</span>
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={13} /> Nairobi, Kenya
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <a href="mailto:kiruikevin388@gmail.com" style={{ color: theme.muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }} className="kk-link">
              <Mail size={13} /> kiruikevin388@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kevin-kirui-ba9593275/" target="_blank" rel="noopener noreferrer" style={{ color: theme.muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }} className="kk-link">
              <Share2 size={13} /> LinkedIn
            </a>
            <a href="https://github.com/arapkirui513-hub" target="_blank" rel="noopener noreferrer" style={{ color: theme.muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }} className="kk-link">
              <GitBranch size={13} /> GitHub
            </a>
            <a href="https://www.upwork.com/freelancers/~01c51401c74a81c8f4" target="_blank" rel="noopener noreferrer" style={{ color: theme.muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }} className="kk-link">
              <Briefcase size={13} /> Upwork
            </a>
            <a href="https://bit.ly/4t4k6ty" target="_blank" rel="noopener noreferrer" style={{ color: theme.muted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }} className="kk-link">
              <Activity size={13} /> Notion Docs
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 8,
              paddingTop: 12,
              borderTop: `1px solid ${theme.border}`,
            }}
          >
            <span>&copy; {new Date().getFullYear()} Kevin Kirui &middot; Last updated May 2026</span>
            <a href="#" style={{ color: theme.muted, textDecoration: 'none' }} className="kk-link">
              Privacy &amp; Disclaimer
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
