import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
        <a href="#contact" className="text-sm font-medium underline">Need something like this?</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 ring-1 ring-slate-200">{t}</span>
              ))}
            </div>
            <a href={p.link} className="mt-4 inline-block text-sm font-medium text-indigo-700 underline">View</a>
          </article>
        ))}
      </div>
    </section>
  )
}
