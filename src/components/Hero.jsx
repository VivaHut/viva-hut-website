import useHeroScroll from '../hooks/useHeroScroll'
import WaitlistForm from './WaitlistForm'

export default function Hero() {
  const { firing } = useHeroScroll()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-24 pb-20 overflow-hidden">

      {/* Subtle background tint */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse-slow" />
          Coming Soon · Join the Waitlist
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-gray-900 mb-6 animate-fade-up">
          The assistant that<br />
          <span className="text-brand-600">makes habits stick</span><br />
          at any age.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-up delay-100 anim-hidden">
          For kids who need structure and parents who want peace of mind.
          For adults who want to perform at their best, every single day.
        </p>

        {/* Audience labels */}
        <div className="flex items-center justify-center gap-3 mb-10 animate-fade-up delay-200 anim-hidden">
          <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-1 h-1 rounded-full bg-orange-500" />
            Kids & Families
          </span>
          <span className="text-gray-300 text-sm">·</span>
          <span className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full">
            <span className="w-1 h-1 rounded-full bg-brand-500" />
            Active Individuals
          </span>
        </div>

        {/* Waitlist form */}
        <div className="flex justify-center animate-fade-up delay-300 anim-hidden">
          <WaitlistForm />
        </div>

        <p className="text-xs text-gray-400 mt-4 animate-fade-up delay-400 anim-hidden">
          No spam. No credit card. Just early access.
        </p>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex justify-center animate-fade-up delay-500 anim-hidden transition-all duration-700"
          style={firing ? { opacity: 0, transform: 'translateY(12px)' } : {}}
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div
              className="w-px bg-gradient-to-b from-gray-300 to-transparent transition-all duration-700"
              style={firing ? { height: '40px', opacity: 0 } : { height: '40px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
