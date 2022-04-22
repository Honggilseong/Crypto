import Image from 'next/image'
import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
import Button from '../components/common/Button'

interface Input {
  username: string
  description: string
}

function myProfile() {
  const { user, isAuthenticated, setUserData, isUserUpdating } = useMoralis()
  const [isEdit, isEditSet] = useState<boolean>(false)
  const [inputValue, inputValueSet] = useState<Input>()
  if (!isAuthenticated) return <p>You must be signed in here.</p>

  const inputHandler = (
    name: string,
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    inputValueSet({ ...inputValue, [name]: value.target.value })
    console.log(inputValue)
  }

  const setUserDataHandler = () => {
    if (inputValue)
      setUserData({
        username: inputValue.username,
        description: inputValue.description,
      })
  }

  return (
    <section className="w-full bg-white text-black md:h-[100vh]">
      <div className="m-auto flex max-w-7xl flex-col pt-36 md:flex-row">
        <span className="flex self-center p-5 md:self-start">
          <Image
            src="/images/avatar/profile.jpg"
            height="400px"
            width="400px"
          />
        </span>
        <div className="h-full w-full p-5">
          <div className="text-white " onClick={() => isEditSet(!isEdit)}>
            <Button
              text={isEdit ? 'Done' : 'Edit'}
              disabled={isUserUpdating}
              onClick={() => {
                isEdit && setUserDataHandler()
              }}
            />
          </div>
          <div className="mb-3">
            <p className="mb-3 text-3xl font-bold">Username</p>
            {isEdit ? (
              <div className="flex flex-1 border">
                <input
                  type="text"
                  onChange={(e) => inputHandler('username', e)}
                  className="flex-1 p-3 outline-none"
                  placeholder="Enter your name"
                />
              </div>
            ) : (
              <p>{user.get('username')}</p>
            )}
          </div>
          <div>
            <p className="mb-3 text-3xl font-bold">description</p>

            {isEdit ? (
              <div className="flex h-96 flex-1 border">
                <input
                  type="text"
                  onChange={(e) => inputHandler('description', e)}
                  className="h-full flex-1 p-3 outline-none"
                  placeholder="Enter something..."
                />
              </div>
            ) : !!user.get('description') ? (
              <p>{user.get('description')}</p>
            ) : (
              <div className="h-20 w-full border p-3">
                <p className="text-gray-400">no description</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default myProfile
