import useReveal from '../hooks/useReveal'
import { IconCycle, IconUsers, IconTrendDown, IconLayers } from './Icons'

const problems = [
  {
    Icon: IconCycle,
    title: 'Consistency is the hardest part',
    body: 'People start with great intentions. Routines break, motivation fades, and progress stalls regardless of age.',
  },
  {
    Icon: IconUsers,
    title: 'Kids need structure, not lectures',
    body: 'Without clear rhythms, children struggle to build the habits that shape their confidence and development.',
  },
  {
    Icon: IconTrendDown,
    title: 'Discipline erodes without feedback',
    body: "Active individuals plateau when they lack a system that reflects back what is and isn't working.",
  },
  {
    Icon: IconLayers,
    title: 'Every tool lives in a silo',
    body: 'Apps for sleep, apps for workouts, apps for learning. None of them talk to each other or adapt to you.',
  },
]

export default function Problem() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-gray-950">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Building habits is broken
            <br className="hidden sm:block" /> for everyone.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 transition-all duration-700 hover:border-gray-700`}
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 flex items-center justify-center mb-4">
                <p.Icon className="w-4 h-4" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
