import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgSearch } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import SearchBar from './Header/SearchBar'
import MobileSearchBar from './Header/MobileSearchBar'
import Logo from '../public/images/cryptoLogo.png'
import Image from 'next/image'
import Button from './common/Button'
import { useMoralis } from 'react-moralis'
import Link from 'next/link'
import { BsFillPersonFill } from 'react-icons/bs'

interface Props {
  mobileMenuIsOpen: boolean
  mobileMenuIsOpenSet: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ mobileMenuIsOpen, mobileMenuIsOpenSet }: Props) {
  const [searchIsOpen, searchIsOpenSet] = useState<boolean>(false)
  const { authenticate, isAuthenticated, logout, user } = useMoralis()
  const toggleMenu = () => {
    mobileMenuIsOpenSet(!mobileMenuIsOpen)
  }
  return (
    <div className="top:0 sticky z-20 flex h-3 w-full items-center gap-4 p-8">
      <div onClick={toggleMenu} className="block md:hidden">
        {mobileMenuIsOpen ? <IoMdClose size={30} /> : <FiMenu size={30} />}
      </div>
      <div className="flex flex-1 items-center gap-2">
        <Image
          src={Logo}
          width={45}
          height={45}
          className="border-r border-gray-400 pr-4"
        />
        <Link href="/">
          <p className="cursor-pointer text-base">NFT</p>
        </Link>
        <SearchBar />
        <div className="ml-auto hidden lg:block">
          <ul className="flex list-none items-center gap-4">
            <li>
              <p className="cursor-pointer">Marketplace</p>
            </li>
            <li>
              <p className="cursor-pointer">Drops</p>
            </li>
            <li>
              <p className="cursor-pointer">Brands</p>
            </li>
            <li>
              <Button text="Create" />
            </li>
          </ul>
        </div>
      </div>
      {searchIsOpen && (
        <MobileSearchBar
          searchIsOpen={searchIsOpen}
          searchIsOpenSet={searchIsOpenSet}
        />
      )}
      {isAuthenticated ? (
        <div
          className=" hidden cursor-pointer items-center md:flex"
          onClick={() => logout()}
        >
          <BsFillPersonFill className="mr-2" size={25} />
          <p className="w-28 overflow-hidden text-ellipsis whitespace-nowrap">
            {user.get('username')}
          </p>
        </div>
      ) : (
        <>
          <p
            className="hidden cursor-pointer md:block"
            onClick={() => authenticate()}
          >
            Sign in
          </p>
          <p
            className="hidden cursor-pointer md:block"
            onClick={() => authenticate()}
          >
            Sign up
          </p>
        </>
      )}
      {!searchIsOpen && (
        <CgSearch
          color="white"
          size={30}
          onClick={() => searchIsOpenSet(!searchIsOpen)}
          className="cursor-pointer md:hidden"
        />
      )}
    </div>
  )
}

export default Header
