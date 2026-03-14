import React, { useEffect, useState } from "react"
import { useInternship } from "../../hooks/useInternship"

const InternshipCard = () => {
  const { getInternships } = useInternship()
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const data = await getInternships()
        setInternships(data.internships)
      } catch (error) {
        console.error("Error fetching internships", error)
      } finally {
        setLoading(false)
      }
    }
    fetchInternships()
  }, [])

  const domainColors = [
    { bg: "from-violet-600 to-indigo-600", badge: "bg-violet-100 text-violet-700", accent: "text-violet-400" },
    { bg: "from-rose-500 to-pink-600", badge: "bg-rose-100 text-rose-700", accent: "text-rose-400" },
    { bg: "from-amber-500 to-orange-600", badge: "bg-amber-100 text-amber-700", accent: "text-amber-400" },
    { bg: "from-emerald-500 to-teal-600", badge: "bg-emerald-100 text-emerald-700", accent: "text-emerald-400" },
    { bg: "from-sky-500 to-cyan-600", badge: "bg-sky-100 text-sky-700", accent: "text-sky-400" },
    { bg: "from-fuchsia-500 to-purple-600", badge: "bg-fuchsia-100 text-fuchsia-700", accent: "text-fuchsia-400" },
  ]

  const getColor = (index) => domainColors[index % domainColors.length]

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-violet-500 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <p className="text-slate-400 text-sm tracking-widest uppercase font-medium animate-pulse">
            Loading Internships
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-3 font-medium">
          Opportunities
        </p>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Internship{" "}
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Programs
          </span>
        </h1>
        <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
        <p className="mt-4 text-slate-400 text-sm max-w-md mx-auto">
          {internships.length} program{internships.length !== 1 ? "s" : ""} available — kick-start your career today
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {internships.map((internship, index) => {
          const price = internship.totalCost || internship.price
          const color = getColor(index)

          return (
            <div
              key={internship._id}
              onMouseEnter={() => setHoveredId(internship._id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:border-slate-600 hover:shadow-2xl hover:shadow-black/40
                         flex flex-col"
              style={{
                animationDelay: `${index * 60}ms`,
                animation: "fadeSlideUp 0.5s ease both",
              }}
            >
              {/* Colored Header Band */}
              <div className={`relative h-28 bg-gradient-to-br ${color.bg} p-5 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -right-2 w-16 h-16 rounded-full bg-white/10" />

                <span className="relative self-start text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm tracking-wide uppercase">
                  {internship.level}
                </span>

                <h2 className="relative text-xl font-black text-white leading-tight tracking-tight line-clamp-2">
                  {internship.domain_name}
                </h2>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-4">

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {internship.description}
                </p>

                {/* Quick Stats Row */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { value: internship.duration, label: "Duration" },
                    { value: internship.seats, label: "Seats" },
                    { value: internship.hrSupport ? "✓" : "✗", label: "HR Support" },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-slate-800/60 rounded-xl py-2 px-1">
                      <p className="text-white font-bold text-sm">{value}</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-wide mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Dates */}
                {(internship.start_date || internship.end_date) && (
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                    {internship.start_date && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        <span>From {internship.start_date}</span>
                      </div>
                    )}
                    {internship.end_date && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                        <span>Until {new Date(internship.end_date).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Cost Breakdown */}
                <div className="bg-slate-800/40 rounded-xl p-3 space-y-1.5 border border-slate-700/50">
                  {[
                    { label: "Base Price", value: internship.price },
                    { label: "Mentorship", value: internship.mentorshipCost },
                    { label: "Documentation", value: internship.documentationCost },
                    { label: "Job Preference", value: internship.jobPreference_cost },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">{label}</span>
                      <span className="text-slate-300 font-medium">₹ {value}</span>
                    </div>
                  ))}
                  <div className="pt-1.5 mt-1.5 border-t border-slate-700 flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-300">Total</span>
                    <span className={`text-base font-black ${color.accent}`}>₹ {price}</span>
                  </div>
                </div>

                {/* Study Material Badge */}
                {internship.studyMaterial && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Study material included
                  </div>
                )}

                {/* Skills */}
                {internship.skills?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1.5">
                      {internship.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${color.badge}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Perks */}
                {internship.perks?.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-2">Perks</p>
                    <ul className="space-y-1">
                      {internship.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="mt-0.5 text-yellow-400 flex-shrink-0">✦</span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <div className="mt-auto pt-2">
                  <button
                    className={`w-full py-2.5 rounded-xl text-sm font-bold text-white
                                bg-gradient-to-r ${color.bg}
                                transition-all duration-200 ease-out
                                hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]
                                shadow-lg cursor-pointer`}
                  >
                    Apply Now →
                  </button>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default InternshipCard