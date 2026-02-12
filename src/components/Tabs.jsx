const tabs=["All","Watches","Skincare","Shoes"]

export default function Tabs(){
  return(
    <div className="flex justify-center gap-6 mt-8">
      {tabs.map(tab=>(
        <button
          key={tab}
          className="pb-2 border-b-2 border-transparent hover:border-primary hover:text-primary transition"
        >
          {tab}
        </button>
      ))}
    </div>
  )
}