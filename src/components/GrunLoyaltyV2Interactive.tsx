import React, { useEffect, useRef, useState } from 'react';

interface BrandPass {
  id: 'cafe' | 'barber' | 'bakery';
  name: string;
  subtitle: string;
  reward: string;
  branch: string;
  memberTier: string;
  total: number;
  defaultStamps: number;
  bgGradient: string;
  solidColor: string;
  monogramBg: string;
  monogramColor: string;
  monogramText: string;
  code: string;
  iconType: 'cup' | 'scissors' | 'croissant';
}

const BRANDS: BrandPass[] = [
  {
    id: 'cafe',
    name: 'Lorette Café',
    subtitle: 'Cafetería de especialidad',
    reward: 'Bebida de especialidad gratis',
    branch: 'Roma Norte · CDMX',
    memberTier: 'Cliente frecuente',
    total: 10,
    defaultStamps: 7,
    bgGradient: 'linear-gradient(155deg, #842375 0%, #5B1350 100%)',
    solidColor: '#751E68',
    monogramBg: '#F5D0EF',
    monogramColor: '#5B1350',
    monogramText: 'LC',
    code: 'LORE-2026',
    iconType: 'cup',
  },
  {
    id: 'barber',
    name: 'Noble Studio',
    subtitle: 'Barbería premium',
    reward: 'Corte clásico o ritual de barba',
    branch: 'San Pedro Garza García · MTY',
    memberTier: 'Club Clásico',
    total: 8,
    defaultStamps: 6,
    bgGradient: 'linear-gradient(155deg, #2B1E38 0%, #171020 100%)',
    solidColor: '#3B2352',
    monogramBg: '#E6D6F5',
    monogramColor: '#2B1E38',
    monogramText: 'NS',
    code: 'NOBL-4180',
    iconType: 'scissors',
  },
  {
    id: 'bakery',
    name: 'Maison Levain',
    subtitle: 'Panadería artesanal',
    reward: 'Hogaza artesanal o café gratis',
    branch: 'Polanco · CDMX',
    memberTier: 'Pan del Día',
    total: 10,
    defaultStamps: 8,
    bgGradient: 'linear-gradient(155deg, #5A281A 0%, #33150D 100%)',
    solidColor: '#5A281A',
    monogramBg: '#F6D6BA',
    monogramColor: '#33150D',
    monogramText: 'ML',
    code: 'LEVA-8920',
    iconType: 'croissant',
  },
];

function StampGlyph({ type, filled }: { type: BrandPass['iconType']; filled: boolean }) {
  if (!filled) {
    return (
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '99px',
          background: 'rgba(18, 18, 18, 0.22)',
        }}
        aria-hidden="true"
      />
    );
  }
  if (type === 'cup') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      </svg>
    );
  }
  if (type === 'scissors') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 15c0-4 3-7 7-7s7 3 7 7" />
      <path d="M3 15h18c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4Z" />
      <path d="M9 11l1.5 2" />
      <path d="M14.5 11L13 13" />
    </svg>
  );
}

function QrVector({ color = '#751E68' }: { color?: string }) {
  return (
    <svg className="gscene-qr-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="4" fill="#FFFFFF" />
      <rect x="4" y="4" width="18" height="18" rx="2" stroke="#121212" strokeWidth="3.5" />
      <rect x="9" y="9" width="8" height="8" fill="#121212" />
      <rect x="42" y="4" width="18" height="18" rx="2" stroke="#121212" strokeWidth="3.5" />
      <rect x="47" y="9" width="8" height="8" fill="#121212" />
      <rect x="4" y="42" width="18" height="18" rx="2" stroke="#121212" strokeWidth="3.5" />
      <rect x="9" y="47" width="8" height="8" fill="#121212" />
      <rect x="26" y="6" width="5" height="5" fill="#121212" />
      <rect x="33" y="11" width="5" height="5" fill="#121212" />
      <rect x="26" y="18" width="5" height="5" fill="#121212" />
      <rect x="6" y="26" width="5" height="5" fill="#121212" />
      <rect x="14" y="26" width="5" height="5" fill="#121212" />
      <rect x="26" y="26" width="12" height="12" rx="2" fill={color} />
      <rect x="42" y="26" width="5" height="5" fill="#121212" />
      <rect x="52" y="26" width="6" height="5" fill="#121212" />
      <rect x="6" y="33" width="5" height="5" fill="#121212" />
      <rect x="19" y="33" width="5" height="5" fill="#121212" />
      <rect x="47" y="33" width="5" height="5" fill="#121212" />
      <rect x="26" y="42" width="5" height="5" fill="#121212" />
      <rect x="34" y="42" width="5" height="5" fill="#121212" />
      <rect x="42" y="42" width="5" height="5" fill="#121212" />
      <rect x="53" y="42" width="5" height="5" fill="#121212" />
      <rect x="26" y="52" width="6" height="6" fill="#121212" />
      <rect x="36" y="50" width="5" height="8" fill="#121212" />
      <rect x="46" y="52" width="12" height="6" fill="#121212" />
    </svg>
  );
}

const DASHBOARD_SERIES = {
  sellos: {
    label: 'Sellos',
    subtitle: '16 sellos acumulados en este intervalo',
    bars: [
      { day: '16 nov', pct: 100, val: 4 },
      { day: '17 nov', pct: 26, val: 1 },
      { day: '18 nov', pct: 55, val: 2 },
      { day: '19 nov', pct: 55, val: 2 },
      { day: '20 nov', pct: 55, val: 2 },
      { day: '21 nov', pct: 55, val: 2 },
      { day: '22 nov', pct: 82, val: 3 },
    ],
  },
  tarjetas: {
    label: 'Tarjetas nuevas',
    subtitle: '2 tarjetas nuevas registradas en este intervalo',
    bars: [
      { day: '16 nov', pct: 52, val: 1 },
      { day: '17 nov', pct: 0, val: 0 },
      { day: '18 nov', pct: 0, val: 0 },
      { day: '19 nov', pct: 0, val: 0 },
      { day: '20 nov', pct: 52, val: 1 },
      { day: '21 nov', pct: 0, val: 0 },
      { day: '22 nov', pct: 0, val: 0 },
    ],
  },
  premios: {
    label: 'Premios ganados',
    subtitle: '2 premios ganados en este intervalo',
    bars: [
      { day: '16 nov', pct: 0, val: 0 },
      { day: '17 nov', pct: 0, val: 0 },
      { day: '18 nov', pct: 54, val: 1 },
      { day: '19 nov', pct: 0, val: 0 },
      { day: '20 nov', pct: 0, val: 0 },
      { day: '21 nov', pct: 0, val: 0 },
      { day: '22 nov', pct: 54, val: 1 },
    ],
  },
} as const;

function DashboardPreview() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tab, setTab] = useState<keyof typeof DASHBOARD_SERIES>('sellos');

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setEntered(true);
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!entered) return;
    if (progress >= 1) return;

    let rafId = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [entered]);

  const countVal = (target: number) => Math.round(target * progress);
  const activeSeries = DASHBOARD_SERIES[tab];

  return (
    <div ref={wrapRef} className="gscene-dash-wrap">
      {/* 5 KPI Cards */}
      <div className="gscene-dash-kpis">
        <div className="gscene-dash-kpi">
          <span className="gscene-dash-kpi-lbl">SELLOS OTORGADOS</span>
          <strong className="gscene-dash-kpi-val">{countVal(16)}</strong>
          <span className="gscene-dash-kpi-sub">Últimos 7 días</span>
        </div>
        <div className="gscene-dash-kpi">
          <span className="gscene-dash-kpi-lbl">TARJETAS NUEVAS</span>
          <strong className="gscene-dash-kpi-val">{countVal(2)}</strong>
          <span className="gscene-dash-kpi-sub">15 acumuladas</span>
        </div>
        <div className="gscene-dash-kpi">
          <span className="gscene-dash-kpi-lbl">CLIENTES ACTIVOS</span>
          <strong className="gscene-dash-kpi-val">{countVal(12)}</strong>
          <span className="gscene-dash-kpi-sub">Con actividad</span>
        </div>
        <div className="gscene-dash-kpi">
          <span className="gscene-dash-kpi-lbl">PREMIOS GANADOS</span>
          <strong className="gscene-dash-kpi-val">{countVal(2)}</strong>
          <span className="gscene-dash-kpi-sub">Últimos 7 días</span>
        </div>
        <div className="gscene-dash-kpi">
          <span className="gscene-dash-kpi-lbl">PREMIOS CANJEADOS</span>
          <strong className="gscene-dash-kpi-val">{countVal(1)}</strong>
          <span className="gscene-dash-kpi-sub">Últimos 7 días</span>
        </div>
      </div>

      {/* Period Performance Bar Chart Card */}
      <div className="gscene-dash-card">
        <div className="gscene-dash-chart-head">
          <div>
            <h3 className="gscene-dash-card-title">Rendimiento del periodo · Últimos 7 días</h3>
            <p className="gscene-dash-card-sub">{activeSeries.subtitle}</p>
          </div>
          <div className="gscene-dash-tabs" role="tablist" aria-label="Métrica del periodo">
            {(Object.keys(DASHBOARD_SERIES) as Array<keyof typeof DASHBOARD_SERIES>).map((key) => {
              const isSelected = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setTab(key)}
                  className={`gscene-dash-tab ${isSelected ? 'gscene-dash-tab--active' : ''}`}
                >
                  {DASHBOARD_SERIES[key].label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="gscene-dash-bars">
          {activeSeries.bars.map((bar, idx) => (
            <div key={bar.day} className="gscene-dash-bar-col">
              <div className="gscene-dash-bar-track">
                <span
                  className="gscene-dash-bar"
                  title={`${bar.day}: ${bar.val}`}
                  style={{
                    height: entered ? `${bar.pct}%` : '0%',
                    transitionDelay: `${idx * 65}ms`,
                  }}
                />
              </div>
              <span className="gscene-dash-bar-lbl">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom 2-Column Row: Stamping Channels & Program Health */}
      <div className="gscene-dash-bottom">
        <div className="gscene-dash-card">
          <div className="gscene-dash-row-head">
            <h3 className="gscene-dash-card-title">Canales de sellado</h3>
            <span className="gscene-dash-card-sub">18 registros</span>
          </div>

          <div className="gscene-dash-channels">
            <div>
              <div className="gscene-dash-ch-meta">
                <strong>Personal en caja</strong>
                <span>
                  {countVal(13)} ({countVal(72)}%)
                </span>
              </div>
              <div className="gscene-dash-progress">
                <span
                  style={{
                    width: entered ? '72%' : '0%',
                    background: '#751E68',
                    transitionDelay: '120ms',
                  }}
                />
              </div>
            </div>

            <div>
              <div className="gscene-dash-ch-meta">
                <strong>Auto-escaneo QR cliente</strong>
                <span>
                  {countVal(3)} ({countVal(17)}%)
                </span>
              </div>
              <div className="gscene-dash-progress">
                <span
                  style={{
                    width: entered ? '17%' : '0%',
                    background: '#A24C95',
                    transitionDelay: '210ms',
                  }}
                />
              </div>
            </div>

            <div>
              <div className="gscene-dash-ch-meta">
                <strong>Ajuste manual en panel</strong>
                <span>
                  {countVal(2)} ({countVal(11)}%)
                </span>
              </div>
              <div className="gscene-dash-progress">
                <span
                  style={{
                    width: entered ? '11%' : '0%',
                    background: '#BA7FB0',
                    transitionDelay: '300ms',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="gscene-dash-card"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <h3 className="gscene-dash-card-title">Salud del programa</h3>
            <div className="gscene-dash-health-grid">
              <div className="gscene-dash-health-box">
                <span className="gscene-dash-card-sub">Tasa de canje</span>
                <strong>{countVal(50)}%</strong>
                <small>1 de 2 premios</small>
              </div>
              <div className="gscene-dash-health-box">
                <span className="gscene-dash-card-sub">Total histórico tarjetas</span>
                <strong>{countVal(15)}</strong>
                <small>Retención de historial: 1 año</small>
              </div>
            </div>
          </div>

          <div className="gscene-dash-health-foot">
            <span>¿Buscas el detalle por transacción?</span>
            <strong>Ir a historial →</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

interface WalletStackPass {
  id: string;
  title: string;
  stamps: number;
  total: number;
  bg: string;
  holder: string;
  tier: string;
  icon: 'cup' | 'scissors' | 'croissant' | 'leaf' | 'spark';
}

const WALLET_STACK_PASSES: WalletStackPass[] = [
  {
    id: 'maison',
    title: 'Maison Levain',
    stamps: 8,
    total: 10,
    bg: 'linear-gradient(160deg, #592718 0%, #38160C 100%)',
    holder: 'Valeria Cruz',
    tier: 'Pan del Día Club',
    icon: 'croissant',
  },
  {
    id: 'noble',
    title: 'Noble Studio',
    stamps: 6,
    total: 8,
    bg: 'linear-gradient(160deg, #241936 0%, #130D1E 100%)',
    holder: 'Mateo Garza',
    tier: 'Noble Club VIP',
    icon: 'scissors',
  },
  {
    id: 'cafe',
    title: 'Lorette Café',
    stamps: 7,
    total: 10,
    bg: 'linear-gradient(160deg, #165943 0%, #0E3A2C 100%)',
    holder: 'Sofía Mendoza',
    tier: 'Lorette Lover',
    icon: 'cup',
  },
  {
    id: 'forma',
    title: 'Forma Pilates Club',
    stamps: 5,
    total: 10,
    bg: 'linear-gradient(160deg, #1D3B66 0%, #102340 100%)',
    holder: 'Sofía Mendoza',
    tier: 'Forma Member',
    icon: 'spark',
  },
  {
    id: 'matsu',
    title: 'Matsu Matcha Bar',
    stamps: 4,
    total: 8,
    bg: 'linear-gradient(160deg, #3A4A28 0%, #222C16 100%)',
    holder: 'Sofía Mendoza',
    tier: 'Matsu Club',
    icon: 'leaf',
  },
];

function WalletPassGlyph({ icon, size = 20 }: { icon: WalletStackPass['icon']; size?: number }) {
  if (icon === 'scissors') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    );
  }
  if (icon === 'croissant') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.5 14.8C4.5 10.6 7.8 7.5 12 7.5s7.5 3.1 7.5 7.3c0 1.8-1.4 3.2-3.2 3.2H7.7c-1.8 0-3.2-1.4-3.2-3.2Zm4.7-4.5 1.3 2.5h1.6l-1.3-2.5H9.2Zm4.5 0-1.3 2.5H14l1.3-2.5h-1.6Z" />
      </svg>
    );
  }
  if (icon === 'leaf') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 4C11 4 6 8.5 6 15.5c0 1.4.4 2.7 1.1 3.7l1.8-1.8C8.3 16.5 8 15.5 8 14.4c0-4.4 3.5-7.8 8.7-8.2-.9 2.7-2.8 5-5.6 6.4l1.2 1.8C16.6 12.2 19 8.7 19 4Z" />
      </svg>
    );
  }
  if (icon === 'spark') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.5 14.6 9.4 21.5 12l-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6L12 2.5Z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 3h12l1 3H5l1-3Zm-.5 4h13l-1.3 13a1.5 1.5 0 0 1-1.5 1.3H8.3A1.5 1.5 0 0 1 6.8 20L5.5 7Zm6.5 4.2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z" />
    </svg>
  );
}

function WalletStackShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setHasTriggered(true);
      setSelectedId('cafe');
      return;
    }

    let timer = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasTriggered(true);
          timer = window.setTimeout(() => {
            setSelectedId('cafe');
          }, 420);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const activePass = WALLET_STACK_PASSES.find((p) => p.id === selectedId) ?? null;
  const stackedPasses = WALLET_STACK_PASSES.filter((p) => p.id !== selectedId);

  return (
    <div ref={stageRef} className="gscene-wallet-iphone-stage">
      <figure
        className="gscene-wallet-iphone"
        aria-label="iPhone mostrando tarjetas de lealtad apiladas en Apple Wallet"
      >
        <div className="gscene-wallet-iphone-inner">
          <img
            src="/iphone-frame-real.png"
            alt=""
            width="400"
            height="817"
            className="gscene-real-iphone-chassis"
            aria-hidden="true"
          />

          <div className="gscene-wallet-iphone-screen">
          {/* Status bar */}
          <div className="gscene-wallet-status" aria-hidden="true">
            <span>9:41</span>
            <div className="gscene-real-dynamic-island">
              <span className="gscene-real-camera-dot" />
            </div>
            <span style={{ fontSize: '0.66rem' }}>5G</span>
          </div>

          {/* Wallet Top Bar */}
          <div className="gscene-wallet-topbar">
            <span className="gscene-wallet-topbar-title">
              {activePass ? 'Listo' : 'Wallet'}
            </span>
            <button
              type="button"
              className="gscene-wallet-topbar-action"
              onClick={() => setSelectedId(activePass ? null : 'cafe')}
            >
              {activePass ? 'Ver todas' : 'Abrir pase'}
            </button>
          </div>

          {/* Active Expanded Main Pass (emerges from the stack) */}
          <div className={`gscene-wallet-main-slot ${activePass ? 'is-open' : ''}`}>
            {activePass && (
              <div
                className="gscene-wallet-native-pass gscene-wallet-native-pass--inphone"
                style={{ background: activePass.bg }}
              >
                <div className="gscene-native-head">
                  <span className="gscene-native-emblem" aria-hidden="true">
                    <WalletPassGlyph icon={activePass.icon} size={16} />
                  </span>
                  <span className="gscene-native-title" style={{ fontSize: '0.84rem' }}>
                    {activePass.title}
                  </span>
                </div>

                <div
                  className="gscene-native-stamps"
                  style={{
                    gridTemplateColumns: `repeat(${activePass.total === 8 ? 4 : 5}, minmax(0, 1fr))`,
                    gap: '12px 6px',
                    padding: '6px 0',
                  }}
                >
                  {Array.from({ length: activePass.total }).map((_, idx) => {
                    const filled = idx < activePass.stamps;
                    return (
                      <span
                        key={idx}
                        className={`gscene-native-stamp ${filled ? 'is-filled' : ''}`}
                      >
                        <WalletPassGlyph icon={activePass.icon} size={21} />
                      </span>
                    );
                  })}
                </div>

                <div className="gscene-native-fields">
                  <div>
                    <span className="gscene-native-lbl">TITULAR</span>
                    <p className="gscene-native-val" style={{ fontSize: '0.8rem' }}>
                      {activePass.holder}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="gscene-native-lbl">AUTÉNTICO</span>
                    <p className="gscene-native-val" style={{ fontSize: '0.8rem' }}>
                      {activePass.tier}
                    </p>
                  </div>
                </div>

                <div
                  className="gscene-native-qr-box"
                  style={{ width: '118px', padding: '9px 9px 7px', marginTop: '2px' }}
                >
                  <QrVector color="#121212" />
                  <span className="gscene-native-qr-note" style={{ fontSize: '0.52rem' }}>
                    Pulsa ... o (i) para info
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Stacked Loyalty Cards (Only top edge peeks out, like Apple Wallet) */}
          <div className={`gscene-wallet-stack ${activePass ? 'is-docked' : ''}`}>
            {stackedPasses.map((pass, idx) => (
              <button
                key={pass.id}
                type="button"
                onClick={() => setSelectedId(pass.id)}
                className="gscene-wallet-stack-item"
                style={{
                  background: pass.bg,
                  zIndex: idx + 1,
                }}
                aria-label={`Ver tarjeta ${pass.title}`}
              >
                <div className="gscene-wallet-stack-head">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="gscene-native-emblem" style={{ width: '24px', height: '24px' }}>
                      <WalletPassGlyph icon={pass.icon} size={13} />
                    </span>
                    <span style={{ fontWeight: 600, fontSize: '0.78rem' }}>{pass.title}</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', opacity: 0.85, fontWeight: 600 }}>
                    {pass.stamps}/{pass.total}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        </div>
      </figure>
    </div>
  );
}

export default function GrunLoyaltyV2Interactive({
  mode = 'hero',
}: {
  mode?: 'hero' | 'wallet' | 'dashboard' | 'faq';
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeBrand = BRANDS[activeIdx];
  const [stamps, setStamps] = useState(activeBrand.defaultStamps);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroEntered, setHeroEntered] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const completed = stamps >= activeBrand.total;

  const leftBgBrand = BRANDS[(activeIdx + 1) % BRANDS.length];
  const rightBgBrand = BRANDS[(activeIdx + 2) % BRANDS.length];

  const handleSelectBrand = (idx: number) => {
    setActiveIdx(idx);
    setStamps(BRANDS[idx].defaultStamps);
  };

  const handleStampClick = () => {
    if (completed) {
      setStamps(0);
    } else {
      setStamps(s => Math.min(activeBrand.total, s + 1));
    }
  };

  if (mode === 'wallet') {
    return <WalletStackShowcase />;
  }

  if (mode === 'dashboard') {
    return <DashboardPreview />;
  }

  if (mode === 'hero') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className="gscene-hero-composition">
          {/* LEFT OVERLAPPING FLOATING WALLET PASS */}
          <div
            className={`gscene-float-pass gscene-float-pass--barber ${heroEntered ? 'is-entered' : ''}`}
            style={{ background: leftBgBrand.bgGradient }}
            aria-hidden="true"
          >
            <div className="gscene-pass-header">
              <div className="gscene-pass-id">
                <div
                  className="gscene-pass-monogram"
                  style={{
                    background: leftBgBrand.monogramBg,
                    color: leftBgBrand.monogramColor,
                  }}
                >
                  {leftBgBrand.monogramText}
                </div>
                <div>
                  <p className="gscene-pass-bname">{leftBgBrand.name}</p>
                  <p className="gscene-pass-bsub">{leftBgBrand.subtitle}</p>
                </div>
              </div>
              <div className="gscene-pass-counter">
                <small>SELLOS</small>
                <strong>
                  {leftBgBrand.defaultStamps}
                  <span>/{leftBgBrand.total}</span>
                </strong>
              </div>
            </div>

            <div className="gscene-pass-stamp-strip" style={{ marginTop: '12px', padding: '10px 8px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '6px',
                  justifyItems: 'center',
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => {
                  const filled = i < 6;
                  return (
                    <span
                      key={i}
                      style={
                        filled
                          ? {
                              width: '28px',
                              height: '28px',
                              borderRadius: '99px',
                              background: leftBgBrand.solidColor,
                              border: `1.5px solid ${leftBgBrand.solidColor}`,
                              color: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }
                          : {
                              width: '28px',
                              height: '28px',
                              borderRadius: '99px',
                              background: 'transparent',
                              border: '1.5px dashed rgba(18, 18, 18, 0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }
                      }
                    >
                      <StampGlyph type={leftBgBrand.iconType} filled={filled} />
                    </span>
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: '12px', fontSize: '0.75rem', opacity: 0.9 }}>
              <span style={{ display: 'block', fontSize: '0.58rem', opacity: 0.78 }}>RECOMPENSA</span>
              <strong>{leftBgBrand.reward}</strong>
            </div>
          </div>

          {/* RIGHT OVERLAPPING FLOATING WALLET PASS */}
          <div
            className={`gscene-float-pass gscene-float-pass--bakery ${heroEntered ? 'is-entered' : ''}`}
            style={{ background: rightBgBrand.bgGradient }}
            aria-hidden="true"
          >
            <div className="gscene-pass-header">
              <div className="gscene-pass-id">
                <div
                  className="gscene-pass-monogram"
                  style={{
                    background: rightBgBrand.monogramBg,
                    color: rightBgBrand.monogramColor,
                  }}
                >
                  {rightBgBrand.monogramText}
                </div>
                <div>
                  <p className="gscene-pass-bname">{rightBgBrand.name}</p>
                  <p className="gscene-pass-bsub">{rightBgBrand.subtitle}</p>
                </div>
              </div>
              <div className="gscene-pass-counter">
                <small>SELLOS</small>
                <strong>
                  {rightBgBrand.defaultStamps}
                  <span>/{rightBgBrand.total}</span>
                </strong>
              </div>
            </div>

            <div className="gscene-pass-stamp-strip" style={{ marginTop: '12px', padding: '10px 8px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '5px',
                  justifyItems: 'center',
                }}
              >
                {Array.from({ length: 10 }).map((_, i) => {
                  const filled = i < 8;
                  return (
                    <span
                      key={i}
                      style={
                        filled
                          ? {
                              width: '26px',
                              height: '26px',
                              borderRadius: '99px',
                              background: rightBgBrand.solidColor,
                              border: `1.5px solid ${rightBgBrand.solidColor}`,
                              color: '#FFFFFF',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }
                          : {
                              width: '26px',
                              height: '26px',
                              borderRadius: '99px',
                              background: 'transparent',
                              border: '1.5px dashed rgba(18, 18, 18, 0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }
                      }
                    >
                      <StampGlyph type={rightBgBrand.iconType} filled={filled} />
                    </span>
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: '12px', fontSize: '0.75rem', opacity: 0.9 }}>
              <span style={{ display: 'block', fontSize: '0.58rem', opacity: 0.78 }}>RECOMPENSA</span>
              <strong>{rightBgBrand.reward}</strong>
            </div>
          </div>

          {/* PRIMARY FOREGROUND REAL IPHONE MOCKUP (Top-cropped at half height) */}
          <figure
            className="gscene-real-iphone"
            aria-label={`iPhone mostrando tarjeta Apple Wallet de ${activeBrand.name} con ${stamps} de ${activeBrand.total} sellos`}
          >
            <div className="gscene-real-iphone-inner">
              {/* Actual photorealistic iPhone hardware bezel PNG */}
              <img
                src="/iphone-frame-real.png"
                alt=""
                width="400"
                height="817"
                className="gscene-real-iphone-chassis"
                aria-hidden="true"
              />

              {/* Screen Inset inside the real iPhone frame */}
              <div className="gscene-real-iphone-screen">
                <div className="gscene-real-status-row" aria-hidden="true">
                  <span>9:41</span>
                  <div className="gscene-real-dynamic-island">
                    <span className="gscene-real-camera-dot" />
                  </div>
                  <span style={{ fontSize: '0.68rem' }}>5G 100%</span>
                </div>

                <div className="gscene-real-wallet-nav" aria-hidden="true">
                  <span>Listo</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--gs-ink-muted)' }}>Apple Wallet</span>
                </div>

                {/* Realistic Apple Wallet Pass (Compact, centered QR only) */}
                <div
                  className="gscene-apple-pass"
                  style={{ background: activeBrand.bgGradient }}
                >
                  <div className="gscene-pass-header">
                    <div className="gscene-pass-id">
                      <div
                        className="gscene-pass-monogram"
                        style={{
                          background: activeBrand.monogramBg,
                          color: activeBrand.monogramColor,
                        }}
                      >
                        {activeBrand.monogramText}
                      </div>
                      <div>
                        <p className="gscene-pass-bname">{activeBrand.name}</p>
                        <p className="gscene-pass-bsub">{activeBrand.subtitle}</p>
                      </div>
                    </div>
                    <div className="gscene-pass-counter">
                      <small>SELLOS</small>
                      <strong>
                        {stamps}
                        <span>/{activeBrand.total}</span>
                      </strong>
                    </div>
                  </div>

                  {/* Crisp White Stamp Strip */}
                  <div className="gscene-pass-stamp-strip">
                    <div
                      className="gscene-stamp-matrix"
                      style={{
                        gridTemplateColumns: `repeat(${activeBrand.total === 8 ? 4 : 5}, minmax(0, 1fr))`,
                      }}
                    >
                      {Array.from({ length: activeBrand.total }).map((_, idx) => {
                        const filled = idx < stamps;
                        return (
                          <span
                            key={idx}
                            className={`gscene-stamp-coin ${
                              idx === stamps - 1 ? 'gscene-stamp-coin--latest' : ''
                            }`}
                            style={
                              filled
                                ? {
                                    background: activeBrand.solidColor,
                                    color: '#FFFFFF',
                                    border: `2px solid ${activeBrand.solidColor}`,
                                  }
                                : {
                                    background: 'transparent',
                                    border: '1.5px dashed rgba(18, 18, 18, 0.25)',
                                  }
                            }
                          >
                            <StampGlyph type={activeBrand.iconType} filled={filled} />
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Authentic Apple Wallet Secondary Fields (Reward + Branch) */}
                  <div className="gscene-pass-fields">
                    <div>
                      <span className="gscene-pass-field-lbl">PRÓXIMA RECOMPENSA</span>
                      <p className="gscene-pass-field-val">
                        {completed ? '¡Premio listo en caja!' : activeBrand.reward}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="gscene-pass-field-lbl">SUCURSAL</span>
                      <p className="gscene-pass-field-val" style={{ fontSize: '0.72rem' }}>
                        {activeBrand.branch}
                      </p>
                    </div>
                  </div>

                  {/* Scannable QR Code Card at Bottom of Pass (Pure QR, no letters) */}
                  <div className="gscene-pass-qr-card">
                    <QrVector color={activeBrand.solidColor} />
                  </div>
                </div>
              </div>
            </div>
          </figure>

          {/* SECONDARY VISUAL: FLOATING WALLET PUSH NOTIFICATION */}
          <div className="gscene-floating-notif" aria-live="polite">
            <img
              src="/grun-logo-loyalty.png"
              alt=""
              width="38"
              height="38"
              className="gscene-notif-icon"
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="gscene-notif-head">
                <strong>{activeBrand.name} · Wallet</strong>
                <span>ahora</span>
              </div>
              <p className="gscene-notif-body">
                {completed
                  ? `¡Completaste tus ${activeBrand.total} sellos! Muestra tu tarjeta en caja para canjear tu premio.`
                  : `¡Recibiste +1 sello! Llevas ${stamps} de ${activeBrand.total} sellos acumulados.`}
              </p>
            </div>
          </div>
        </div>

        {/* SUBTLE INTERACTIVE CAMPAIGN SWITCHER */}
        <div className="gscene-hero-switcher" role="group" aria-label="Explorar tarjetas de demostración">
          {BRANDS.map((b, i) => (
            <button
              key={b.id}
              type="button"
              onClick={() => handleSelectBrand(i)}
              className={`gscene-switch-pill ${
                activeIdx === i ? 'gscene-switch-pill--active' : ''
              }`}
            >
              {b.name}
            </button>
          ))}
          <button
            type="button"
            onClick={handleStampClick}
            className="gscene-switch-action"
          >
            {completed ? 'Canjear premio' : '+1 Sellar tarjeta'}
          </button>
        </div>
      </div>
    );
  }

  // FAQ Mode
  const FAQS = [
    {
      q: '¿Mis clientes necesitan instalar alguna aplicación para guardar su tarjeta?',
      a: 'No. El cliente solo escanea el código QR de tu mostrador con la cámara de su celular y guarda su tarjeta directo en Apple Wallet (iPhone), Google Wallet (Android) o en su navegador web en menos de 5 segundos.',
    },
    {
      q: '¿Necesito comprar lectores ópticos o equipo especial para mi mostrador?',
      a: 'No. Cualquier celular o tablet con cámara funciona. Tus empleados entran al escáner web con un PIN de 6 dígitos, apuntan al QR del cliente y tocan +1 sello.',
    },
    {
      q: '¿Qué evita que alguien se asigne sellos falsos?',
      a: 'En modo empleado, solo tu personal con el PIN activo puede otorgar sellos. En modo auto-escaneo en mostrador, el sistema aplica un bloqueo automático de tiempo por tarjeta para impedir sellos duplicados.',
    },
    {
      q: '¿Qué pasa si un empleado deja de trabajar en mi negocio?',
      a: 'Cambias el PIN de 6 dígitos en tu panel de administración y todas las sesiones abiertas en celulares de empleados se cierran al instante.',
    },
    {
      q: '¿Qué sucede si un cliente cambia de teléfono o borra su tarjeta?',
      a: 'El cliente puede respaldar su tarjeta con su correo electrónico para recuperarla en 1 clic, o tú puedes buscarlo en tu panel y ajustar sus sellos manualmente.',
    },
  ];

  return (
    <div className="gscene-faq-wrap">
      <h3
        style={{
          fontFamily: 'var(--gs-font-display)',
          fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
          fontWeight: 600,
          marginBottom: '24px',
          textAlign: 'center',
        }}
      >
        ¿Tienes alguna pregunta?
      </h3>
      {FAQS.map((item, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div key={idx} className="gscene-faq-item">
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="gscene-faq-btn"
            >
              <span>{item.q}</span>
              <span style={{ color: 'var(--gs-plum)', fontFamily: 'var(--gs-font-mono)' }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="gscene-faq-ans">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
