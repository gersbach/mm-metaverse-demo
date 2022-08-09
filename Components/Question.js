/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState, useContext } from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { contractAddress, abi } from '../constants'
import {
  EmojiHappyIcon,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  PaperClipIcon,
  ThumbUpIcon,
  XIcon,
} from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: EmojiHappyIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: EmojiSadIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: ThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Question() {
  const [selected, setSelected] = useState(moods[5])
  const [issueName, setIssueName] = useState('')

  const { runContractFunction: addContractIssue } = useWeb3Contract({
    chain: 4,
    abi: abi,
    contractAddress: contractAddress,
    functionName: "addIssue",
    params: {
      _issueName: issueName,
    },
  })

  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="comment" className="sr-only">
              Pose your question.
            </label>
            <textarea
              value={issueName}
              rows={3}
              name="comment"
              id="comment"
              className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
              placeholder=" Pose your question..."
              defaultValue={''}
              onChange={(event)=>setIssueName(event.target.value)}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={
                  async (event)=>{
                    event.preventDefault()
                    const transax = await addContractIssue()
                    setIssueName('')
                  }
                }
             >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
