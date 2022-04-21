import React, { useState } from 'react'

interface Props {
  data: {
    id: number
    title: string
    content: JSX.Element
  }[]
  mt?: string
}

function Tabs({ data, mt }: Props) {
  const [curTab, curTabSet] = useState(data[0])
  const [curItemIndex, curItemIndexSet] = useState(0)
  return (
    <section className={`flex w-full flex-col ${mt && `mt-[${mt}px]`}`}>
      <div className="flex w-full gap-8 p-8">
        {data.map((d: any, index: number) => {
          return (
            <span
              className={`relative cursor-pointer font-bold after:absolute after:left-0 after:bottom-0 after:h-1 after:translate-y-[500%] after:transform after:rounded-full after:bg-slate-600 after:content-[''] ${
                curItemIndex === index && 'after:w-full'
              }`}
              onClick={() => {
                if (curTab.id !== d.id) curTabSet(d)
                curItemIndexSet(index)
              }}
              key={d.id}
            >
              {d.title}
            </span>
          )
        })}
      </div>
      <div>{curTab.content}</div>
    </section>
  )
}

export default Tabs
