import React from 'react'
import { CgSearch } from 'react-icons/cg'

interface Props {
  searchIsOpenSet: React.Dispatch<React.SetStateAction<boolean>>
  searchIsOpen: boolean
}

function MobileSearchBar({ searchIsOpen, searchIsOpenSet }: Props) {
  return (
    <article
      className={`absolute left-0 flex h-full w-full flex-1 items-center gap-2 p-3 md:hidden ${
        searchIsOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex flex-1 items-center gap-2 rounded-3xl bg-white p-3">
        <CgSearch color="#c34cf2" size={20} />
        <input
          className="text-md flex-1 border-none text-black outline-none"
          placeholder="Search Collectibles and collections"
        />
      </div>
      <p
        onClick={() => searchIsOpenSet(!searchIsOpen)}
        className="cursor-pointer"
      >
        Hide
      </p>
    </article>
  )
}

export default MobileSearchBar
