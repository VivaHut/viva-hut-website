import useReveal from '../hooks/useReveal'
import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="waitlist"
      ref={ref}
      className="py-28 px-5 sm:px-8 bg-gradient-to-br from-brand-600 via-brand-700 to-violet-800 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-32 -translate-y-32 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-24 translate-y-24 blur-2xl" />

      <div
        className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-slow" />
          Limited Early Access
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          Be the first to experience
          <br />a new kind of assistant.
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Whether you're a parent building a foundation for your child
          or an individual who refuses to plateau,
          VivaHut is being built for you.
        </p>

        {/* Form */}
        <div className="flex justify-center">
          <WaitlistForm light />
        </div>

        <p className="text-white/40 text-xs mt-5">
          Free to join. First access goes to early waitlist members.
        </p>

        {/* Social proof placeholder */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {['bg-orange-400', 'bg-brand-400', 'bg-violet-400', 'bg-pink-400', 'bg-green-400'].map((c, i) => (
              <div key={i} className={`w-8 h-8 ${c} rounded-full border-2 border-brand-700`} />
            ))}
          </div>
          <p className="text-white/60 text-sm ml-2">
            <span className="text-white font-semibold">200+</span> people already on the list
          </p>
        </div>
      </div>
    </section>
  )
}
