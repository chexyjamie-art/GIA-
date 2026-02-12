export default function SearchBar(){
  return(
    <div className="flex justify-center mt-6">
      <input
        className="w-[60%] px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Luxury skincare for glowing skin?"
      />
    </div>
  )
}