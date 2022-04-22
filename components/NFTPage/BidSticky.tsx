import Image from 'next/image'
import React from 'react'

interface Props {
  imageUrl: string
}

function BidSticky({ imageUrl }: Props) {
  return (
    <section className="sticky bottom-4 flex rounded-md border bg-white p-4 shadow-4xl">
      <div className="hidden flex-1 gap-4 md:flex">
        <span>
          <Image src={imageUrl} width="80px" height="80px" />
        </span>
        <div>
          <p className="text-2xl font-bold">Edition 17 of 371</p>
          <span className="">KING BITCOIN</span>
        </div>
      </div>

      <p className="flex items-center text-black">
        A 10% royalty goes to the creator for future resale
      </p>
    </section>
  )
}

export default BidSticky
