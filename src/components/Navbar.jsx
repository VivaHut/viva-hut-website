import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-sm tracking-tighter">V</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">VivaHut</span>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-700 transition-colors shadow-sm"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  )
}
