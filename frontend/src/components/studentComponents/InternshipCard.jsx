import { useState } from "react"

const INTERNSHIPS = [
{
id:1,
domain:"Web Development",
tag:"Most Popular",
icon:"⚡",
duration:"3 Months",
seats:12,
seatsLeft:4,
level:"Beginner–Advanced",
mentorshipCost:3000,
documentationCost:500,
hrSupport:500,
studyMaterial:1000,
jobPreference:2000,
skills:["React","Node.js","MongoDB","REST APIs"],
color:"orange",
perks:["Completion Certificate","LinkedIn Recommendation","Portfolio Review"]
},
{
id:2,
domain:"Machine Learning",
tag:"High Demand",
icon:"🧠",
duration:"4 Months",
seats:8,
seatsLeft:2,
level:"Intermediate",
mentorshipCost:4000,
documentationCost:500,
hrSupport:700,
studyMaterial:1200,
jobPreference:2500,
skills:["Python","TensorFlow","Scikit-learn","NLP"],
color:"purple",
perks:["Research Guidance","Kaggle Profile Review","Industry Mentor"]
},
{
id:3,
domain:"DevOps",
tag:"Fast Track",
icon:"🚀",
duration:"3 Months",
seats:10,
seatsLeft:7,
level:"Intermediate",
mentorshipCost:3500,
documentationCost:500,
hrSupport:600,
studyMaterial:900,
jobPreference:2000,
skills:["Docker","Kubernetes","AWS","CI/CD"],
color:"cyan",
perks:["Cloud Credits Included","AWS Practice Labs","Mock Interviews"]
},
{
id:4,   
domain:"Data Science",
tag:"Trending",
icon:"📊"
,duration:"4 Months",
seats:15,
seatsLeft:5,
level:"Beginner–Advanced",
mentorshipCost:4000,
documentationCost:500,
hrSupport:700,
studyMaterial:1200,
jobPreference:2500,
skills:["Python","Pandas","Data Visualization","Machine Learning"],
color:"orange",
perks:["Project Showcase","GitHub Portfolio Review","Career Counseling"]
},{
id:5,
domain:"Cybersecurity",
tag:"In Demand",
icon:"🛡️",
duration:"3 Months",
seats:10,
seatsLeft:3,
level:"Intermediate",
mentorshipCost:3500,
documentationCost:500,
hrSupport:600,
studyMaterial:900,
jobPreference:2000,
skills:["Network Security","Ethical Hacking","Penetration Testing","SIEM"],
color:"purple",
perks:["Lab Access Included","CTF Challenges","Industry Mentor"]
}
]

const COSTS=[
{key:"mentorshipCost",label:"Mentorship",icon:"👨‍🏫"},
{key:"documentationCost",label:"Documentation",icon:"📄"},
{key:"hrSupport",label:"HR Support",icon:"🤝"},
{key:"studyMaterial",label:"Study Material",icon:"📚"},
{key:"jobPreference",label:"Job Preference",icon:"💼"}
]

const THEME={
orange:{
bar:"bg-orange-500",
tag:"bg-orange-500/10 text-orange-400 border border-orange-500/30",
icon:"bg-orange-500/10 border border-orange-500/30",
skill:"bg-orange-500/10 text-orange-400 border border-orange-500/30",
seat:"bg-orange-500",
seatTxt:"text-orange-400",
price:"text-orange-400",
costVal:"text-orange-400",
toggle:"bg-orange-500/10 text-orange-400 border border-orange-500/30",
btn:"bg-gradient-to-r from-orange-500 to-orange-400"
},
purple:{
bar:"bg-purple-500",
tag:"bg-purple-500/10 text-purple-400 border border-purple-500/30",
icon:"bg-purple-500/10 border border-purple-500/30",
skill:"bg-purple-500/10 text-purple-400 border border-purple-500/30",
seat:"bg-purple-500",
seatTxt:"text-purple-400",
price:"text-purple-400",
costVal:"text-purple-400",
toggle:"bg-purple-500/10 text-purple-400 border border-purple-500/30",
btn:"bg-gradient-to-r from-purple-500 to-purple-400"
},
cyan:{
bar:"bg-cyan-500",
tag:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
icon:"bg-cyan-500/10 border border-cyan-500/30",
skill:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
seat:"bg-cyan-500",
seatTxt:"text-cyan-400",
price:"text-cyan-400",
costVal:"text-cyan-400",
toggle:"bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
btn:"bg-gradient-to-r from-cyan-500 to-cyan-400"
}
}

function Card({item}){

const [open,setOpen]=useState(false)
const [applied,setApplied]=useState(false)

const t=THEME[item.color]

const total=COSTS.reduce((s,c)=>s+item[c.key],0)

const fillPct=Math.round(((item.seats-item.seatsLeft)/item.seats)*100)

const urgent=item.seatsLeft<=3

return(

<div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">

<div className={`h-1 ${t.bar}`} />

<div className="flex justify-between items-center px-5 pt-5 pb-3">

<div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${t.icon}`}>
{item.icon}
</div>

<span className={`text-xs font-bold px-3 py-1 rounded ${t.tag}`}>
{urgent && "🔥 "} {item.tag}
</span>

</div>

<h2 className="text-xl font-bold px-5 text-white">
{item.domain}
</h2>

<div className="flex gap-2 px-5 py-3">

<span className="text-xs px-3 py-1 bg-slate-800 rounded border border-slate-700">
⏱ {item.duration}
</span>

<span className="text-xs px-3 py-1 bg-slate-800 rounded border border-slate-700">
📶 {item.level}
</span>

</div>

{/* seats */}

<div className="px-5 pb-4 flex items-center gap-3">

<div className="flex-1 bg-slate-700 h-2 rounded">

<div
className={`h-2 rounded ${t.seat}`}
style={{width:`${fillPct}%`}}
/>

</div>

<span className={`text-xs font-bold ${t.seatTxt}`}>
{item.seatsLeft} seats left
</span>

</div>

{/* skills */}

<div className="px-5 flex flex-wrap gap-2 pb-4">

{item.skills.map(sk=>(
<span key={sk} className={`text-xs px-2 py-1 rounded ${t.skill}`}>
{sk}
</span>
))}

</div>

{/* price */}

<div
onClick={()=>setOpen(!open)}
className="flex justify-between px-5 py-3 border-t border-slate-800 cursor-pointer"
>

<div>

<p className="text-xs text-slate-500">Total Investment</p>

<p className={`text-2xl font-bold ${t.price}`}>
₹{total}
</p>

</div>

<button className={`text-xs px-3 py-1 rounded ${t.toggle}`}>
{open?"Hide":"Details"}
</button>

</div>

{/* breakdown */}

{open && (

<div className="px-5 border-t border-slate-800">

{COSTS.map(c=>(
<div key={c.key} className="flex justify-between py-2 text-sm">

<span className="text-slate-400">
{c.icon} {c.label}
</span>

<span className={t.costVal}>
₹{item[c.key]}
</span>

</div>
))}

</div>

)}

{/* button */}

<div className="px-5 pb-5 pt-3">

<button
onClick={()=>{setApplied(true);setTimeout(()=>setApplied(false),2500)}}
className={`w-full py-3 rounded-xl text-white font-semibold ${applied?"bg-green-500":t.btn}`}
>

{applied?"✓ Application Sent":"Apply Now"}

</button>

</div>

</div>

)

}

export default function InternshipCard(){

return(

<div className="min-h-screen bg-slate-950 text-white">

<div className="w-full max-w-[1400px] mx-auto px-6 py-16">

{/* hero */}

<div className="text-center mb-14">

<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
Launch Your Career
</h1>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text mb-6">
with Industry Internships
</h2>

<p className="text-slate-400">
Hands-on mentorship · Real projects · Job-ready skills
</p>

</div>

{/* cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{INTERNSHIPS.map(item=>(
<Card key={item.id} item={item}/>
))}

</div>

</div>

</div>

)

}