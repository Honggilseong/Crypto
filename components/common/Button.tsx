import React, { Children, DOMAttributes } from 'react'

interface Props {
  rounded?: boolean
  text: string
  hide?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ rounded, text, hide, disabled, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`max-w-full cursor-pointer items-center justify-center border-none bg-gradient-to-tl from-cyan-400 via-sky-500 to-blue-700 p-2
        ${rounded ? 'rounded-full' : 'rounded-md'}`}
    >
      {text}
    </button>
  )
}

export default Button
