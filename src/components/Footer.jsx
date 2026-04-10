export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-sm">V</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">VivaHut</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-sm text-center">
          Build better habits at any age.
        </p>

        {/* Legal */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} VivaHut. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
