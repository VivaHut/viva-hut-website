import useReveal from '../hooks/useReveal'
import { IconEye, IconBell, IconSprout, IconStar, IconBarChart, IconShield, IconActivity, IconFlag } from './Icons'

const kids = [
  { Icon: IconEye,     title: 'Full visibility for parents', body: 'See what habits your child is building, where they shine, and where they need support. No micromanaging required.' },
  { Icon: IconBell,    title: 'Less reminding, more doing', body: "VivaHut handles the daily prompts so you don't have to. Kids respond better to a system than a lecture." },
  { Icon: IconSprout,  title: 'Structured development', body: 'Learning, movement, and healthy habits woven into a routine that grows with your child.' },
  { Icon: IconStar,    title: 'Designed to stay engaging', body: 'Streaks, milestones, and progress rewards keep kids motivated without screens as a substitute for effort.' },
]

const athletes = [
  { Icon: IconBarChart,  title: 'Track consistency above all', body: 'Showing up is 90% of performance. VivaHut tracks your adherence to routines, not just your peak results.' },
  { Icon: IconShield,    title: 'Build real discipline', body: 'Replace willpower with systems. VivaHut makes the right action the path of least resistance every day.' },
  { Icon: IconActivity,  title: 'Optimize your daily structure', body: 'Sleep, movement, recovery, focus. See how the pieces connect and where your performance leaks.' },
  { Icon: IconFlag,      title: 'Designed for long-term gains', body: 'No crash-and-burn motivation cycles. VivaHut is built for athletes who play the long game.' },
]

function AudienceCard({ Icon, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/20 border border-white/15 flex items-center justify-center">
        <Icon className="w-4 h-4 text-white/80" />
      </div>
      <div>
        <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
        <p className="text-white/60 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

export default function DualAudience() {
  const { ref: refKids, visible: visKids } = useReveal()
  const { ref: refAthletes, visible: visAthletes } = useReveal()

  return (
    <section className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Section label */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Built for two worlds</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mt-2">
            Whoever you are,
            <br />
            <span className="text-brand-600">VivaHut fits.</span>
          </h2>
        </div>

        {/* Kids Panel */}
        <div
          ref={refKids}
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-orange-400 to-orange-600 shadow-xl transition-all duration-700 ${
            visKids ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              For Parents & Kids
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-8 leading-snug">
              Give your child the structure
              <br /> they can't give themselves yet.
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {kids.map((item, i) => <AudienceCard key={i} {...item} />)}
            </div>
          </div>
        </div>

        {/* Athletes Panel */}
        <div
          ref={refAthletes}
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-brand-600 to-brand-900 shadow-xl transition-all duration-700 ${
            visAthletes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              For Active Individuals & Athletes
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-8 leading-snug">
              Stop relying on motivation.
              <br /> Start building systems.
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {athletes.map((item, i) => <AudienceCard key={i} {...item} />)}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
