import Link from 'next/link'
import React from 'react'
import NFTCard from '../common/NFTCard'
import { NFTs } from './NFT'

function TopCollectibles() {
  return (
    <section className="m-auto flex max-w-7xl flex-col items-center gap-4 p-4 ">
      <h1 className="text-5xl font-medium">Top Collectibles</h1>
      <div className="flex w-full items-center justify-between">
        <p className="cursor-pointer rounded-full border border-blue-600 p-3">
          Sales Volume
        </p>
        <p className="cursor-pointer rounded-full border border-blue-600 p-3">
          Today
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-12 p-10 md:grid-cols-3 md:p-5 lg:p-0">
        {NFTs.map((nft) => {
          return <NFTCard item={nft} />
        })}
      </div>
      <div className="mt-4 cursor-pointer rounded-md border border-blue-600 bg-transparent p-4 text-blue-600">
        show more
      </div>
    </section>
  )
}

export default TopCollectibles
