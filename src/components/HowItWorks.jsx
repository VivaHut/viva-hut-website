import useReveal from '../hooks/useReveal'
import { IconBell, IconCycle, IconTrendUp } from './Icons'

const steps = [
  {
    number: '01',
    Icon: IconBell,
    title: 'You get a smart nudge',
    body: 'VivaHut delivers personalized prompts built around your routine. Not random reminders, but timely triggers that match your day.',
    iconColor: 'text-brand-600',
    iconBg: 'bg-brand-50 border-brand-200',
    numColor: 'text-brand-600',
  },
  {
    number: '02',
    Icon: IconCycle,
    title: 'The system adapts to you',
    body: 'Every action (and inaction) teaches VivaHut about your patterns. It continuously adjusts what it suggests and when.',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50 border-violet-200',
    numColor: 'text-violet-600',
  },
  {
    number: '03',
    Icon: IconTrendUp,
    title: 'You track and improve',
    body: 'A clear view of your streaks, consistency, and growth. You always know exactly where you stand and what to work on next.',
    iconColor: 'text-accent-500',
    iconBg: 'bg-orange-50 border-orange-200',
    numColor: 'text-accent-500',
  },
]

export default function HowItWorks() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            Simple by design.
            <br />
            <span className="text-brand-600">Powerful by nature.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-700 group`}
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
              }}
            >
              {/* Step number */}
              <div className={`text-xs font-black tracking-widest ${step.numColor} mb-5 opacity-50`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className={`w-10 h-10 border rounded-xl ${step.iconBg} ${step.iconColor} flex items-center justify-center mb-5`}>
                <step.Icon className="w-5 h-5" />
              </div>

              <h3 className="text-gray-900 font-bold text-lg mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.body}
              </p>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-12 -right-3 w-6 h-px bg-gray-200 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
