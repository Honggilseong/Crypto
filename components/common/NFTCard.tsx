import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsHeart } from 'react-icons/bs'

interface Props {
  item: {
    Badge: string
    Id: number
    ImageUrl: string
    Edition: number
    Stock: number
    Title: string
    Price: string
    Avatar: string
    Author: string
    Likes: number
  }
}

function NFTCard({ item }: Props) {
  const {
    Id,
    Badge,
    ImageUrl,
    Edition,
    Stock,
    Title,
    Price,
    Avatar,
    Author,
    Likes,
  } = item

  return (
    <Link key={Id} href={`/nft/${Id}`}>
      <section className="relative flex cursor-pointer flex-col items-center overflow-hidden rounded-3xl shadow-6xl hover:scale-105">
        <div className="relative z-20 flex flex-col overflow-hidden bg-white text-black shadow-5xl">
          <span className="absolute left-4 top-4 z-30 rounded-3xl bg-gradient-to-tl from-cyan-400 via-sky-500 to-blue-700 p-3 font-medium text-white">
            {Badge}
          </span>
          <div className="flex flex-1 flex-col gap-2">
            <Image src={ImageUrl} width="1024" height="1025" />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-4">
            <div className="flex justify-between">
              <span>
                {Edition} {Edition > 1 ? 'Editions' : 'Edition'} Minted
              </span>
              <span className="font-semibold text-blue-600">
                {Stock} for sale
              </span>
            </div>
            <h2 className="text-2xl">{Title}</h2>
            <div className="mt-4 flex w-full items-center">{Price}</div>
            <div className="mt-4 flex w-full items-center">
              <span className="mr-2 flex h-14 w-14 overflow-hidden rounded-full">
                <Image src={Avatar} width="56" height="56" />
              </span>
              <span className="ml-auto flex cursor-pointer items-center gap-2 text-xl">
                {Author}
              </span>
              <span className="ml-auto flex cursor-pointer items-center gap-2 text-xl">
                <BsHeart /> {Likes}
              </span>
            </div>
          </div>
        </div>
        <div className="z-10 h-3 w-[98%] -translate-y-1/3 transform rounded-full bg-white" />
        <div className="z-10 h-3 w-[88%] -translate-y-2/3 transform rounded-full bg-white" />
      </section>
    </Link>
  )
}

export default NFTCard
