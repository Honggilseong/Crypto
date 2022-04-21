import React from 'react'
import Button from '../common/Button'

function NewsLetter() {
  return (
    <section className="flex flex-col justify-center gap-4 bg-subscribe bg-cover bg-no-repeat p-24 text-center">
      <div className="m-auto max-w-5xl">
        <h2 className="text-[5vw] font-medium">Never miss a drop</h2>
        <p className="mb-5 text-lg">
          Subscribe for the latest news, drops & collectibles
        </p>
        <div className="m-auto flex h-12 max-w-xl">
          <input
            type="email"
            placeholder="Email"
            className="border:none flex-1 rounded-md p-5 text-lg text-black outline-none"
          />
          <Button text="Subscribe" />
        </div>
        <div className="mt-5">
          After reading the{' '}
          <span className="text-blue-600">Privacy Notice</span>, you may
          subscribe for our newsletter to get special offers and occasional
          surveys delivered to your inbox. Unsubscribe at any time by clicking
          on the link in the email.
        </div>
        <div className="text-base">
          <input type="checkbox" id="NewsSub" className="mr-4" />
          <label htmlFor="NewsSub">
            By entering my email and subscribing I confirm and agree to the
            above.
          </label>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
