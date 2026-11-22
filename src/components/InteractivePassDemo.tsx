import React, { useState } from 'react';

export default function InteractivePassDemo() {
  const [stamps, setStamps] = useState(7);
  const total = 10;
  const completed = stamps >= total;

  const handleAction = () => {
    if (completed) {
      setStamps(0);
    } else {
      setStamps((s) => Math.min(total, s + 1));
    }
  };

  return (
    <div className="flex flex-col items-start md:items-end">
      <figure className="mk-phone" aria-label={`Ejemplo de pase con ${stamps} de ${total} sellos`}>
        <div className="mk-pass">
          <div className="flex items-center justify-between text-xs opacity-90">
            <span>Tu Negocio</span>
            <span>Grün</span>
          </div>

          <div className="mt-5 flex items-end justify-between">
            <p className="text-[11px] uppercase tracking-wide opacity-80">Sellos</p>
            <p className="text-2xl font-semibold leading-none">
              {stamps} <span className="text-base opacity-80">/ {total}</span>
            </p>
          </div>

          <div className="mt-3 rounded-xl bg-white p-3 text-ink">
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
              role="img"
              aria-label={`${stamps} de ${total} sellos`}
            >
              {Array.from({ length: total }).map((_, i) => {
                const filled = i < stamps;
                return (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors"
                    style={
                      filled
                        ? {
                            background: 'var(--accent)',
                            borderColor: 'var(--accent)',
                            color: '#fff',
                          }
                        : {
                            borderColor: 'rgba(117, 30, 104, 0.33)',
                            color: 'rgba(117, 30, 104, 0.55)',
                          }
                    }
                  >
                    {filled && (
                      <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" aria-hidden="true">
                        <path
                          d="M6 12.5l3.5 3.5L18 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-[11px] uppercase tracking-wide opacity-80">Recompensa</p>
          <p className="text-sm font-medium">
            {completed ? '¡Premio listo para canjear!' : 'Producto o servicio gratis'}
          </p>

          <div className="mt-4 rounded-lg bg-white p-2 text-center">
            <span
              className="grid gap-px bg-white mx-auto h-14 w-14"
              style={{ gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' }}
              aria-hidden="true"
            >
              <span className="bg-ink"></span><span className="bg-white"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span>
              <span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span>
              <span className="bg-white"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span>
              <span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-white"></span>
              <span className="bg-white"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span>
              <span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-white"></span>
              <span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-ink"></span>
              <span className="bg-white"></span><span className="bg-ink"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-ink"></span><span className="bg-white"></span><span className="bg-white"></span><span className="bg-ink"></span>
            </span>
            <p className="mt-1 font-mono text-[10px] text-ink">GRUN-2026</p>
          </div>
        </div>
      </figure>

      {/* Interactive control directly below the original phone card so the visitor can test adding stamps */}
      <div className="mt-3 flex w-[232px] items-center justify-between rounded-full border border-line bg-paper px-3 py-1.5 text-xs">
        <span className="text-ink-muted">
          {completed ? '10/10 completados' : 'Prueba la tarjeta:'}
        </span>
        <button
          type="button"
          onClick={handleAction}
          className="rounded-full bg-accent-soft px-2.5 py-1 font-medium text-accent-strong transition-colors hover:bg-accent hover:text-white cursor-pointer"
        >
          {completed ? 'Canjear premio' : '+1 sello'}
        </button>
      </div>
    </div>
  );
}
