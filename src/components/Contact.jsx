export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-2 text-slate-600">Got a project or collaboration in mind? Send a message:</p>
        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 sm:col-span-1" placeholder="Your name" />
          <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 sm:col-span-1" placeholder="Email address" type="email" />
          <textarea rows="5" className="sm:col-span-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your project..." />
          <div className="sm:col-span-2">
            <button type="button" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
