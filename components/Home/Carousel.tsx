import React, { useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../common/Button'

interface Info {
  imageUrl: string
  name: string
  slugName: string
  cost: string
}

// interface User {
//   data: {
//     users: [Info]
//   }
// }

function Carousel() {
  const ItemContainerRef = useRef(null)
  const [scrollInd, scrollIndSet] = useState('b')
  const [profiles, profilesSet] = useState<any>()

  useEffect(() => {
    const getData = async () => {
      const docRef = await getDocs(collection(db, 'users'))

      profilesSet(docRef.docs.map((doc) => ({ data: doc.data() })))
    }
    getData()
  }, [])
  return (
    <section className="m-auto flex max-w-6xl flex-col items-center gap-4 p-12 ">
      <Button text="Best Selling" />
      <h1 className="text-5xl font-medium">Top Creators</h1>
      <div className="flex w-full justify-end gap-4">
        <div
          className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-slate-600 text-2xl ${
            scrollInd === 'b' && 'bg-slate-800'
          } ${scrollInd === 'b' && 'cursor-default'}`}
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft - 200,
              behavior: 'smooth',
            })
          }}
        >
          <BsChevronLeft />
        </div>
        <div
          className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-slate-600 text-2xl ${
            scrollInd === 'e' && 'bg-slate-800'
          } ${scrollInd === 'e' && 'cursor-default'}`}
          onClick={() => {
            ItemContainerRef.current.scroll({
              left: ItemContainerRef.current.scrollLeft + 200,
              behavior: 'smooth',
            })
          }}
        >
          <BsChevronRight />
        </div>
      </div>
      <div
        className="flex w-full gap-8 overflow-hidden overflow-x-auto scrollbar-hide"
        ref={ItemContainerRef}
        onScroll={(e) => {
          const target = e.target as HTMLDivElement
          const { scrollWidth, scrollLeft, offsetWidth } = target
          const SL = Math.ceil(scrollLeft + offsetWidth)
          if (scrollLeft <= 0) scrollIndSet('b')
          if (scrollLeft > 0 && scrollLeft < scrollWidth) scrollIndSet('m')
          if (SL >= scrollWidth) scrollIndSet('e')
        }}
      >
        {profiles &&
          profiles[0].data.users.map((item: Info, index: number) => {
            return (
              <Link href={`/profile/${item.slugName}`} key={item.slugName}>
                <a>
                  <div className="flex flex-col items-center gap-3 rounded-2xl p-4 shadow-4xl transition-colors hover:bg-slate-700">
                    <div className="flex h-32 w-32 overflow-hidden rounded-full">
                      <Image src={item.imageUrl} height="128" width="128" />
                    </div>
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                        {index + 1}
                      </span>
                      <span>{item.cost}</span>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
      </div>
    </section>
  )
}

export default Carousel
