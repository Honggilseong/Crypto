import React from 'react'
import { BsDiscord, BsInstagram, BsMedium, BsTelegram } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'

function Footer() {
  return (
    <footer className="m-auto flex max-w-7xl flex-wrap items-center justify-between p-4 text-white">
      <div className="flex gap-5 text-2xl">
        <a className='cursor-pointer'>
          <BsInstagram />
        </a>
        <a className='cursor-pointer'>
          <GrTwitter />
        </a>
        <a className='cursor-pointer'>
          <BsMedium />
        </a>
        <a className='cursor-pointer'>
          <BsDiscord />
        </a>
        <a className='cursor-pointer'>
          <BsTelegram />
        </a>
      </div>
      <small className="text-sm">
        Copyright &copy; 2022 Crypto.com. All rights reserved.
      </small>
      <div className="flex flex-col gap-1 text-gray-600 md:flex-row md:items-center md:gap-4">
        <a href="#">Help Center</a>
        <a href="#">T&C</a>
        <a href="#">Privacy Notice</a>
      </div>
    </footer>
  )
}

export default Footer
