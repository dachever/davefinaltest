export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-200 via-white to-cyan-100" />
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
              Available for freelance • 2025
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Hi, I’m <span className="text-indigo-600">Evad</span> —
              <br className="hidden sm:block" /> Frontend Developer & App Builder
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I craft fast, accessible web apps and mobile prototypes. Let’s turn ideas into
              clean, modern experiences.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="rounded-2xl px-5 py-3 text-sm font-semibold ring-1 ring-slate-300 hover:bg-white">
                View Projects
              </a>
              <a href="#contact" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Contact Me
              </a>
            </div>
          </div>
          <div className="aspect-square w-full max-w-xs overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:max-w-sm">
            <img
              src="/hitch logo.png"
              alt="Evad Taps"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
