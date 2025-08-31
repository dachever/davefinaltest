export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Evad Taps. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="underline" href="https://github.com/">GitHub</a>
          <a className="underline" href="https://www.linkedin.com/">LinkedIn</a>
          <a className="underline" href="#contact">Email</a>
        </div>
      </div>
    </footer>
  )
}
