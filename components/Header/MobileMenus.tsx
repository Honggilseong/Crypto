import React from 'react'
import { useMoralis } from 'react-moralis'
import Button from '../common/Button'

interface Props {
  mobileMenuIsOpen: boolean
}

function MobileMenus({ mobileMenuIsOpen }: Props) {
  const { authenticate, isAuthenticated, logout } = useMoralis()
  return (
    <div
      className={`absolute left-0 top-0 flex h-full bg-background p-6 ${
        mobileMenuIsOpen ? 'z-10' : '-z-10'
      } ${mobileMenuIsOpen ? 'w-full' : 'w-0'}`}
    >
      <ul
        className={`flex w-full flex-col items-center gap-4 ${
          mobileMenuIsOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
        <hr color="bg-gray-500" className="w-full" />
        {isAuthenticated ? (
          <p className="cursor-pointer">Sign Out</p>
        ) : (
          <>
            <li>
              <p className="cursor-pointer" onClick={() => authenticate()}>
                Sign in
              </p>
            </li>
            <li>
              <p className="cursor-pointer" onClick={() => authenticate()}>
                Sign up
              </p>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default MobileMenus
