import useReveal from '../hooks/useReveal'
import { IconZap, IconActivity, IconBook, IconCrosshair } from './Icons'

const pillars = [
  { Icon: IconZap,        label: 'Habit Building' },
  { Icon: IconActivity,   label: 'Movement' },
  { Icon: IconBook,       label: 'Learning & Growth' },
  { Icon: IconCrosshair,  label: 'Focus & Performance' },
]

export default function Solution() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3 block">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 leading-tight mb-6">
              One intelligent assistant
              <br />
              <span className="text-brand-600">that learns you.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              VivaHut brings together habit building, movement, and performance
              into a single adaptive system. It watches how you behave, not just
              what you plan, then nudges you at the right moment.
            </p>

            <ul className="space-y-3">
              {[
                'Personalized daily routines, not generic templates',
                'Adapts based on real behavior patterns',
                'Works for a 7-year-old and a 37-year-old',
                'Connects the pieces that were always separate',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item} 
                </li>
              ))}
            </ul>
          </div>

          {/* Visual pillars */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
<div className="relative bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 shadow-lg overflow-hidden">

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-x-4 translate-y-8" />

              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-6 relative z-10">
                VivaHut covers
              </p>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {pillars.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors"
                  >
                    <p.Icon className="w-5 h-5 text-white/70 mb-2" />
                    <p className="text-white font-semibold text-sm">{p.label}</p>
                  </div>
                ))}
              </div>

              {/* Center text */}
              <div className="mt-6 bg-white/10 border border-white/20 rounded-2xl p-4 relative z-10 text-center">
                <p className="text-white font-bold text-sm">Unified. Adaptive. Personal.</p>
                <p className="text-white/60 text-xs mt-0.5">One platform, every habit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
