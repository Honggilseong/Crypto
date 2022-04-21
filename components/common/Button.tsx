import React, { Children } from 'react'

interface Props {
  rounded?: boolean
  text: string
  hide?: boolean
}

function Button({ rounded, text, hide }: Props) {
  return (
    <button
      className={`max-w-full cursor-pointer items-center justify-center border-none bg-gradient-to-tl from-cyan-400 via-sky-500 to-blue-700 p-2
        ${rounded ? 'rounded-full' : 'rounded-md'}`}
    >
      {text}
    </button>
  )
}

export default Button
