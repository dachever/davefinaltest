const skills = [
  'React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Firebase', 'REST APIs', 'Git', 'Figma'
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="rounded-full bg-white px-3 py-1 text-sm text-slate-800 ring-1 ring-slate-200 shadow-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
