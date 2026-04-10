import { useState } from 'react'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

export default function WaitlistForm({ light = false }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl ${light ? 'bg-white/10' : 'bg-brand-50'} animate-fade-in`}>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${light ? 'bg-white/20' : 'bg-brand-100'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ${light ? 'text-white' : 'text-brand-600'}`}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <div>
          <p className={`font-semibold ${light ? 'text-white' : 'text-brand-700'}`}>You're on the list!</p>
          <p className={`text-sm ${light ? 'text-white/70' : 'text-gray-500'}`}>We'll reach out before anyone else.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={`w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all border focus:ring-2 focus:ring-brand-400
              ${light
                ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15'
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-400'
              }`}
          />
          {error && <p className={`text-xs mt-1.5 ${light ? 'text-red-300' : 'text-red-500'}`}>{error}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`shrink-0 px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed
            ${light
              ? 'bg-white text-brand-700 hover:bg-brand-50'
              : 'bg-brand-600 text-white hover:bg-brand-700'
            }`}
        >
          {loading ? 'Sending...' : 'Get Early Access'}
        </button>
      </div>
    </form>
  )
}
