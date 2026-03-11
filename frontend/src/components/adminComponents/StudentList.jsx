import { useState } from "react"

const MOCK_STUDENTS = [
  { _id:"1",name:"Aanya Sharma",email:"aanya.sharma@iitb.ac.in",instituteName:"IIT Bombay",domain:"Machine Learning",isPaid:true,role:"student",createdAt:"2024-01-15T10:00:00Z"},
  { _id:"2",name:"Rohan Mehta",email:"rohan.m@bits.ac.in",instituteName:"BITS Pilani",domain:"Web Development",isPaid:false,role:"student",createdAt:"2024-02-03T08:30:00Z"},
  { _id:"3",name:"Priya Nair",email:"priya.nair@nit.ac.in",instituteName:"NIT Trichy",domain:"Data Science",isPaid:true,role:"student",createdAt:"2024-01-28T14:00:00Z"},
]

const initials = (name)=>
  name?.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2)

export default function StudentList(){

const [search,setSearch]=useState("")
const [filter,setFilter]=useState("all")
const [selected,setSelected]=useState(null)

const filtered=MOCK_STUDENTS.filter(s=>{
const q=search.toLowerCase()

const matchSearch=
s.name.toLowerCase().includes(q)||
s.email.toLowerCase().includes(q)||
s.instituteName.toLowerCase().includes(q)

const matchFilter=
filter==="all"||
(filter==="paid"?s.isPaid:!s.isPaid)

return matchSearch && matchFilter
})

return(

<div className="min-h-screen bg-slate-900 text-white p-8">

{/* Header */}

<div className="flex justify-between items-center mb-8">

<div>
<p className="text-xs text-slate-400 uppercase tracking-widest">
Admin Panel
</p>

<h1 className="text-3xl font-bold">
Student Directory
</h1>

</div>

<div className="flex gap-4">

<div className="bg-slate-800 px-5 py-3 rounded-lg text-center">
<p className="text-xl font-bold">{MOCK_STUDENTS.length}</p>
<p className="text-xs text-slate-400">Enrolled</p>
</div>

<div className="bg-slate-800 px-5 py-3 rounded-lg text-center">
<p className="text-xl font-bold text-green-400">
{MOCK_STUDENTS.filter(s=>s.isPaid).length}
</p>
<p className="text-xs text-slate-400">Paid</p>
</div>

</div>

</div>


{/* Search + Filters */}

<div className="flex gap-4 mb-6 flex-wrap">

<input
className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 w-72"
placeholder="Search students..."
value={search}
onChange={e=>setSearch(e.target.value)}
/>

<div className="flex gap-2">

<button
onClick={()=>setFilter("all")}
className={`px-4 py-2 rounded-lg ${
filter==="all"
? "bg-blue-600"
: "bg-slate-800 border border-slate-700"
}`}
>
All
</button>

<button
onClick={()=>setFilter("paid")}
className={`px-4 py-2 rounded-lg ${
filter==="paid"
? "bg-green-600"
: "bg-slate-800 border border-slate-700"
}`}
>
Paid
</button>

<button
onClick={()=>setFilter("unpaid")}
className={`px-4 py-2 rounded-lg ${
filter==="unpaid"
? "bg-red-600"
: "bg-slate-800 border border-slate-700"
}`}
>
Pending
</button>

</div>

</div>


{/* Table */}

<div className="bg-slate-800 rounded-xl overflow-hidden">

<table className="w-full">

<thead className="bg-slate-950 text-xs text-slate-400 uppercase">

<tr>

<th className="p-4 text-left">Student</th>
<th className="p-4 text-left">Email</th>
<th className="p-4 text-left">Institute</th>
<th className="p-4 text-left">Domain</th>
<th className="p-4 text-left">Status</th>
<th></th>

</tr>

</thead>

<tbody>

{filtered.map(s=>(

<tr
key={s._id}
className="border-t border-slate-700 hover:bg-slate-700/40"
>

<td className="p-4 flex items-center gap-3">

<div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold">
{initials(s.name)}
</div>

<div>

<button
onClick={()=>setSelected(s)}
className="font-semibold text-blue-400 hover:underline"
>
{s.name}
</button>

<p className="text-xs text-slate-400">
Joined {new Date(s.createdAt).toLocaleDateString()}
</p>

</div>

</td>

<td className="p-4 text-slate-400">{s.email}</td>
<td className="p-4 text-slate-400">{s.instituteName}</td>
<td className="p-4">{s.domain}</td>

<td className="p-4">

<span
className={`px-3 py-1 text-xs rounded-full ${
s.isPaid
? "bg-green-900 text-green-400"
: "bg-red-900 text-red-400"
}`}
>
{s.isPaid ? "Paid" : "Pending"}
</span>

</td>

<td className="p-4">

<button
onClick={()=>setSelected(s)}
className="text-blue-400 hover:underline text-sm"
>
View →
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>


{/* Modal */}

{selected && (

<div
className="fixed inset-0 bg-black/70 flex items-center justify-center"
onClick={()=>setSelected(null)}
>

<div
className="bg-slate-900 rounded-xl w-[380px] p-6"
onClick={e=>e.stopPropagation()}
>

<div className="flex justify-between mb-4">

<h2 className="text-xl font-bold">
{selected.name}
</h2>

<button
onClick={()=>setSelected(null)}
className="text-slate-400"
>
✕
</button>

</div>

<p className="text-sm text-slate-400 mb-4">
{selected.email}
</p>

<div className="space-y-3 text-sm">

<div className="flex justify-between">
<span className="text-slate-400">Institute</span>
<span>{selected.instituteName}</span>
</div>

<div className="flex justify-between">
<span className="text-slate-400">Domain</span>
<span>{selected.domain}</span>
</div>

<div className="flex justify-between">
<span className="text-slate-400">Role</span>
<span className="capitalize">{selected.role}</span>
</div>

<div className="flex justify-between">
<span className="text-slate-400">Payment</span>
<span>{selected.isPaid?"Completed":"Pending"}</span>
</div>

</div>

</div>

</div>

)}

</div>
)
}