import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgSearch } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import { useMoralis } from 'react-moralis'
import { BsFillPersonFill } from 'react-icons/bs'
import SearchBar from './Header/SearchBar'
import MobileSearchBar from './Header/MobileSearchBar'
import Logo from '../public/images/cryptoLogo.png'
import Image from 'next/image'
import Button from './common/Button'
import Link from 'next/link'

interface Props {
  mobileMenuIsOpen: boolean
  mobileMenuIsOpenSet: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ mobileMenuIsOpen, mobileMenuIsOpenSet }: Props) {
  const [searchIsOpen, searchIsOpenSet] = useState<boolean>(false)
  const [isProfileMenuOpen, isProfileMenuOpenSet] = useState<boolean>(false)
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
          className="relative hidden cursor-pointer items-center md:flex"
          onClick={() => isProfileMenuOpenSet(!isProfileMenuOpen)}
        >
          <BsFillPersonFill className="mr-2" size={25} />
          <p className="w-28 overflow-hidden text-ellipsis whitespace-nowrap">
            {user.get('username')}
          </p>
          {isProfileMenuOpen && (
            <div className="absolute -bottom-32 left-0 w-36 rounded-lg bg-white p-5 text-black">
              <Link href="/myProfile">
                <p className="cursor-pointer">My profile</p>
              </Link>
              <hr className="mt-3 mb-3" />
              <p onClick={() => logout()} className="cursor-pointer">
                Sign out
              </p>
            </div>
          )}
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
