export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-slate-900">About Me</h2>
          <p className="mt-4 text-slate-600 leading-7">
            I’m a developer focused on React, Vite, and Tailwind. I also prototype mobile apps
            with Expo/React Native. My work balances performance, clean UI, and delightful UX.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>⚡ Fast, responsive UI</li>
            <li>🧩 Component-driven design</li>
            <li>🧪 Playwright & Vitest ready</li>
            <li>☁️ Firebase & REST APIs</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-medium text-slate-900">Quick Info</h3>
          <dl className="mt-3 space-y-2 text-sm text-slate-700">
            <div className="flex justify-between"><dt>Location</dt><dd>Philippines (UTC+8)</dd></div>
            <div className="flex justify-between"><dt>Freelance</dt><dd>Open</dd></div>
            <div className="flex justify-between"><dt>Stack</dt><dd>React, Vite, Tailwind</dd></div>
            <div className="flex justify-between"><dt>Contact</dt><dd><a className="underline" href="#contact">Email me</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}
