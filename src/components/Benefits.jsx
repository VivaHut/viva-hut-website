import useReveal from '../hooks/useReveal'
import { IconZap, IconShield, IconShuffle, IconCycle, IconGlobe, IconWifi } from './Icons'

const benefits = [
  {
    Icon: IconZap,
    title: 'Turns intention into action',
    body: 'The gap between wanting to change and actually changing is execution. VivaHut closes it.',
  },
  {
    Icon: IconShield,
    title: 'Builds long-term discipline',
    body: 'Not a crash diet of motivation. A steady, compounding architecture for behavior that lasts.',
  },
  {
    Icon: IconShuffle,
    title: 'Simplifies daily decisions',
    body: 'Decision fatigue kills momentum. VivaHut removes friction from your daily structure so the right thing is always the easy thing.',
  },
  {
    Icon: IconCycle,
    title: 'Creates real consistency',
    body: 'Consistency beats intensity every time. VivaHut is optimized for showing up, not for peak heroics.',
  },
  {
    Icon: IconGlobe,
    title: 'Connects the right services',
    body: 'VivaHut surfaces relevant tools, people, and resources in context. Not as ads, but as answers.',
  },
  {
    Icon: IconWifi,
    title: 'Works around your life',
    body: 'Flexible enough to work when your schedule breaks down. Smart enough to help you reset quickly.',
  },
]

export default function Benefits() {
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
            Why VivaHut
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            What you actually gain.
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Not a list of features. The outcomes that change how you live and perform.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800 rounded-3xl overflow-hidden border border-gray-800">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-gray-900 p-7 hover:bg-gray-800/80 transition-all duration-500 group"
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 flex items-center justify-center mb-4">
                <b.Icon className="w-4 h-4" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
