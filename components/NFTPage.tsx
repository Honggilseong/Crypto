import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { AiFillCaretLeft } from 'react-icons/ai'
import { BsFillEyeFill, BsHeart, BsThreeDots } from 'react-icons/bs'
import { IoMdShareAlt } from 'react-icons/io'
import { MdOutlineContentCopy } from 'react-icons/md'
import Tabs from './common/Tabs'
import Link from 'next/link'
import BidSticky from './NFTPage/BidSticky'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'next/router'

interface NFT {
  description: string
  name: string
  likes: string
  views: string
  imageUrl: string
  avatarUrl: string
  title: string
}

function NFTPage() {
  const [NFT, NFTSet] = useState<NFT>()
  const router = useRouter()
  const { nft } = router.query
  useEffect(() => {
    const getData = async () => {
      const docRef = await getDocs(collection(db, 'nft'))
      const data = docRef.docs.map((doc) => ({ data: doc.data() }))
      NFTSet(data[0].data.nfts[Number(nft) - 1])
    }
    getData()
  }, [])

  if (!NFT) return <p>loading...</p>
  const AllTabs = [
    {
      id: 1,
      title: 'Ownership',
      content: (
        <div className="mt-5 flex items-center gap-2">
          <span className="h-12 w-12 overflow-hidden rounded-full">
            <Image src={NFT.avatarUrl} width="48px" height="48px" />
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <span>Owner</span>
            <span>{NFT.name}</span>
          </div>
          <div className="flex items-center gap-4">
            colfgagacas60y...
            <MdOutlineContentCopy />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'History',
      content: (
        <section className="flex w-full flex-1 items-center justify-center rounded-xl border border-gray-300 p-12 text-gray-400">
          <p>No history found</p>
        </section>
      ),
    },
    {
      id: 3,
      title: 'Bids',
      content: (
        <section className="flex w-full flex-1 items-center justify-center rounded-xl border border-gray-300 p-12 text-gray-400">
          <p>No bids found</p>
        </section>
      ),
    },
    {
      id: 4,
      title: 'Offers',
      content: (
        <section className="flex w-full flex-1 items-center justify-center rounded-xl border border-gray-300 p-12 text-gray-400">
          <p>No offers found</p>
        </section>
      ),
    },
  ]
  return (
    <section className="flex h-[150vh] flex-col bg-white p-4 text-black">
      <Head>NFT ITEM</Head>
      <div className="m-auto max-w-7xl">
        <div className="mb-10 flex w-full flex-col gap-8 md:flex-row">
          <div className="m-auto flex w-full flex-col gap-4 md:m-0 md:w-[400px]">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={NFT.imageUrl}
                layout="responsive"
                width="780px"
                height="780px"
              />
            </div>
            <p className="flex items-center justify-between border p-6">
              View Crypto.org Chain details <HiOutlineExternalLink />
            </p>
          </div>
          <div className="flex flex-[0.95] flex-col gap-3">
            <Link href="/">
              <span className="flex w-max cursor-pointer items-center text-blue-500 ">
                <AiFillCaretLeft />
                Back
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex cursor-pointer items-center gap-2">
                <BsHeart />
                {NFT.likes}
              </div>
              <div className="flex cursor-pointer items-center gap-2">
                <BsFillEyeFill />
                {NFT.views}
              </div>
              <div className="flex cursor-pointer items-center gap-2">
                <IoMdShareAlt />
                Share
              </div>
              <div className="flex cursor-pointer items-center gap-2">
                <BsThreeDots />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <Image src={NFT.avatarUrl} width="48" height="48" />
              </div>
              <span className="flex flex-col gap-1">
                <label className="text-gray-600">Creator</label>
                <span>{NFT.name}</span>
              </span>
            </div>
            <span>371 Editions Minted</span>
            <span>
              <h1 className="mr-4 inline-block text-3xl">{NFT.title}</h1>
              <span className="rounded-[50px] border p-1 text-gray-600">
                Marketplace
              </span>
            </span>
            <span>Accepting Offers</span>
            <p className="whitespace-pre-wrap">{NFT.description}</p>
            <div>
              <div>Crypto</div>
            </div>
            <Tabs mt="1rem" data={AllTabs} />
          </div>
        </div>
        <BidSticky imageUrl={NFT.imageUrl} />
      </div>
    </section>
  )
}

export default NFTPage
