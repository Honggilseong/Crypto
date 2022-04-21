import React from 'react'
import { CgSearch } from 'react-icons/cg'

function SearchBar() {
  return (
    <article className="hidden h-full max-w-lg flex-1 items-center gap-2 p-3 md:block">
      <div className="flex items-center gap-2 rounded-3xl bg-white p-3">
        <CgSearch color="#c34cf2" size={20} />
        <input
          className="text-md flex-1 border-none text-black outline-none"
          placeholder="Search Collectibles and collections"
        />
      </div>
    </article>
  )
}

export default SearchBar
