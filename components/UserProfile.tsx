import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import NFTCard from './common/NFTCard'
import Tabs from './common/Tabs'
import { BsFillPatchCheckFill, BsInstagram } from 'react-icons/bs'
import { GrTwitter } from 'react-icons/gr'
import { NFTs } from './Home/NFT'
import { useMoralisQuery } from 'react-moralis'
import { useRouter } from 'next/router'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase'

const items = [
  {
    id: 1,
    imageUrl: '/images/cover/newk3d.png',
    title: 'Crypto Aces',
  },
]

const AllTabs = [
  {
    id: 1,
    title: 'Collectibles',
    content: (
      <div className="mt-4 grid grid-cols-1 gap-12 xl:grid-cols-2 2xl:grid-cols-3">
        {NFTs.map((nft) => {
          return <NFTCard key={nft.Id} item={nft} />
        })}
      </div>
    ),
  },
  {
    id: 2,
    title: 'Selling',
    content: (
      <section className="flex w-full flex-1 items-center justify-center rounded-xl border border-gray-300 p-12 text-gray-400">
        <p>No collectibles found</p>
      </section>
    ),
  },
  {
    id: 3,
    title: 'Created',
    content: (
      <section className="flex w-full flex-1 items-center justify-center rounded-xl border border-gray-300 p-12 text-gray-400">
        <p>No collectibles found</p>
      </section>
    ),
  },
  {
    id: 4,
    title: 'Liked',
    content: (
      <section className="flex w-full flex-1 items-center justify-center rounded-xl border border-gray-300 p-12 text-gray-400">
        <p>No collectibles found</p>
      </section>
    ),
  },
]

function UserProfile() {
  const router = useRouter()
  const { profile } = router.query
  const [data, dataSet] = useState<any>()
  console.log(profile)
  useEffect(() => {
    console.log(data)
    if (data) return
    const getProfile = async () => {
      const q = query(
        collection(db, 'profile'),
        where('slugName', '==', profile)
      )
      const querySnapshot = await getDocs(q)
      dataSet(querySnapshot.docs.map((doc) => ({ data: doc.data() })))
    }
    getProfile()
    return () => dataSet(null)
  }, [])
  return (
    <>
      {data && (
        <section className="flex flex-col bg-white text-black">
          <Head>
            <title>Crypto.com NFT Marketplace</title>
          </Head>
          <div className="relative h-[200px] w-full overflow-hidden md:h-[300px]">
            <Image
              src={data[0].data.background}
              width="1440"
              height="480"
              layout="responsive"
            />
          </div>
          <div className="md: flex flex-col gap-8 p-4 md:ml-20 md:flex-row">
            <div className="relative flex flex-col items-center md:max-w-[400px] md:items-start md:justify-start">
              <span className=" h-[150px] w-[150px] -translate-y-24 transform overflow-hidden rounded-full border-4 border-white">
                <Image src={data[0].data.imageUrl} width="150" height="150" />
              </span>
              <h1 className="-mt-12 mb-2 text-2xl font-bold">
                {data[0].data.name}
              </h1>
              <div className="mb-8 flex items-center font-medium">
                <BsFillPatchCheckFill
                  size={20}
                  color="#0000FF"
                  className="mr-2"
                />
                {data[0].data.name}
              </div>
              <p className="mb-4 whitespace-pre-wrap text-base">
                {data[0].data.description}
              </p>
              <div className="mb-4 flex w-full items-center justify-center gap-4 text-2xl md:justify-start">
                <a href="#">
                  <GrTwitter />
                </a>
                <a href="#">
                  <BsInstagram />
                </a>
              </div>
              <div className="grid w-full grid-cols-4 border-t border-b border-gray-300">
                <div className="flex flex-col items-center gap-1 p-4">
                  <p>Likes</p>
                  <span>{data[0].data.likes}</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-4">
                  <p>Views</p>
                  <span>{data[0].data.views}</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-4">
                  <p>Created</p>
                  <span>{data[0].data.created}</span>
                </div>
                <div className="flex flex-col items-center gap-1 p-4">
                  <p>Minted</p>
                  <span>{data[0].data.minted}</span>
                </div>
              </div>
            </div>
            <div className=" w-full pt-[100px]">
              <h2 className="font-bold">Collections</h2>
              <div className="flex gap-8 pt-8">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex w-[170px] cursor-pointer flex-col items-center justify-center"
                  >
                    <span className="h-[150px] w-[150px] overflow-hidden rounded-full">
                      <Image src={item.imageUrl} width="150" height="150" />
                    </span>
                    <h3 className="mt-2 whitespace-pre-wrap text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
              <Tabs data={AllTabs} mt="2rem" />
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default UserProfile
