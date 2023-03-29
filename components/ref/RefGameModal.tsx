import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'
import React from 'react'

const RefGameModal = () => {
  return (
    <div className="h-full w-full absolute flex flex-col px-8 py-6">
      <button className="rounded-lg h-10 w-10 p-2 flex justify-center items-center bg-slate-200"><ArrowLongLeftIcon width={24} height={24} /></button>
      <h1 className="font-bold text-2xl text-center mt-14">Start time</h1>
      <span className='text-center text-xl'>12:24</span>
      <div className="inline-flex gap-x-4 justify-center items-center mt-8">
        <button>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bd6wsfoqvO9fhkx7Ru2yawHaHa%26pid%3DApi&f=1&ipt=e95e22c91225b85e3e618a31e2186e2c9c213595b3713c393478b4b6e0094200&ipo=images" alt="nigga" className="w-24 h-24 object-cover" />
        </button>
        <span className="text-xl">vs</span>
        <button>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bd6wsfoqvO9fhkx7Ru2yawHaHa%26pid%3DApi&f=1&ipt=e95e22c91225b85e3e618a31e2186e2c9c213595b3713c393478b4b6e0094200&ipo=images" alt="nigga" className="w-24 h-24 object-cover" />
        </button>
      </div>
      <div className="inline-flex gap-x-16 justify-center items-center mt-8 text-xl">
        <span>1</span>
        <span className="text-xl">-</span>
        <span>2</span>
      </div>
      <h2 className="text-center text-xl mt-4">00:12</h2>
      <div className="flex flex-col mt-10 grow overflow-scroll gap-y-2">
        <div className="inline-flex justify-between text-lg px-4 py-2 bg-slate-200 rounded-md">
          <h2>Round 1</h2>
          <div className="inline-flex gap-x-2">
            <span>2</span>
            <span>-</span>
            <span>1</span>
          </div>
        </div>
      </div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-6">Finish game</button>
    </div>
  )
}

export default RefGameModal