import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '../common/Button'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const items = [
  {
    Id: 1,
    Badge: 'UPCOMING',
    Date: 'Tue, Feb 01',
    Title: 'LEGEND',
    Author: 'METAL',
    ImageSrc: '/images/slider/1.jpeg',
  },
  {
    Id: 2,
    Badge: 'SOLD OUT',
    Date: 'Tue, Aug 03',
    Title: 'Design Festival!',
    Author: 'HASS DESIGN',
    ImageSrc: '/images/slider/4.jpg',
  },
  {
    Id: 3,
    Badge: 'LIVE NOW',
    Date: 'Mon, Apr 09',
    Title: 'NFTs Festival!',
    Author: 'NFT',
    ImageSrc: '/images/slider/5.png',
  },
]

function Hero() {
  const [slideIndex, slideIndexSet] = useState<number>(0)
  const [slides] = useState(items)
  const [curSlide, curSlideSet] = useState(items[0])

  useEffect(() => {
    const timer = setInterval(() => {
      const indx = slideIndex + 1
      if (slideIndex < slides.length - 1) {
        slideIndexSet(indx)
        curSlideSet(slides[indx])
        return
      }
      slideIndexSet(0)
      curSlideSet(slides[0])
    }, 4000)
    return () => clearInterval(timer)
  }, [curSlide])
  const changePrevSlide = () => {
    const indx = slideIndex - 1
    if (slideIndex > 0) {
      slideIndexSet(indx)
      curSlideSet(slides[indx])
      return
    }
    slideIndexSet(slides.length - 1)
    curSlideSet(slides[slides.length - 1])
  }
  const changeNextSlide = () => {
    const indx = slideIndex + 1
    if (slideIndex < slides.length - 1) {
      slideIndexSet(indx)
      curSlideSet(slides[indx])
      return
    }
    slideIndexSet(0)
    curSlideSet(slides[0])
  }
  return (
    <section className="m-auto mt-10 flex h-full max-w-6xl flex-col items-center justify-center p-5 md:p-0">
      <h2 className="mb-12 flex flex-col items-center justify-center text-3xl font-medium md:text-5xl">
        Buy, sell, and showcase NFTs
        <span className="block text-xl md:text-2xl">
          from leading creators and brands
        </span>
      </h2>
      <div className="relative flex h-[35vh] min-h-[230px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl shadow-3xl md:h-[50vh]">
        <div className="relative z-[3] mb-8 flex w-full flex-1 flex-col items-center justify-center gap-4">
          <Button rounded text={curSlide.Badge} />
          <div className="flex w-full items-center justify-between">
            <BsChevronLeft
              className="cursor-pointer"
              size={40}
              onClick={changePrevSlide}
            />
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg font-medium">{curSlide.Date}</p>
              <p className="text-3xl font-bold">{curSlide.Title}</p>
              <p className="text-lg font-medium">{curSlide.Author}</p>
            </div>
            <BsChevronRight
              className="cursor-pointer"
              size={40}
              onClick={changeNextSlide}
            />
          </div>
          <Button text="View Drop" hide />
        </div>
        <div className="relative z-[3] flex gap-2">
          {slides.map((slide, index) => {
            return (
              <span
                onClick={() => {
                  slideIndexSet(index)
                  curSlideSet(slides[index])
                }}
                key={slide.Id}
                className={`bottom-0 mb-2 inline-block h-1 w-8 cursor-pointer rounded-3xl bg-white ${
                  slideIndex === index && 'bg-blue-600'
                }`}
              />
            )
          })}
        </div>
        <div className="absolute left-0 top-0 block h-full w-full">
          <div className="h-full w-full">
            <Image layout="fill" src={curSlide.ImageSrc} />
          </div>
        </div>
      </div>
      <div className="mb-20" />
    </section>
  )
}

export default Hero
