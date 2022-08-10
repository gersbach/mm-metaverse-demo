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

export default function Question({ userContext }) {
  const [selected, setSelected] = useState(moods[5])
  const [transaxHash, setTransaxHash] = useState('')
  const [issueName, setIssueName] = useState('')
  const { contract } = useContext(userContext)
  const { isWeb3Enabled } = useMoralis()

  const { runContractFunction: addContractIssue } = useWeb3Contract({
    chain: 4,
    abi: abi,
    contractAddress: contractAddress,
    functionName: "addIssue",
    params: {
      _name: issueName,
    },
  })

  return (
    <>
    {/* new styles */}
      <label htmlFor="comment" className="block text-lg font-medium text-gray-700">
        Create a poll.
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="shadow-lg focus:ring-blue-500 focus:border-blue-700 block w-full sm:text-sm border border-gray-300 rounded-md"
          defaultValue={''}
          value={issueName}
          onChange={(event) => setIssueName(event.target.value)}
        />
        <div className="h-5"></div>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 mb-10"
          onClick={
            async (event) => {
              event.preventDefault()
              const transax = isWeb3Enabled ? await addContractIssue() : await contract.addIssue(issueName)
              setTransaxHash(transax.hash)
              setIssueName('')
            }
          }
        >
          Post
        </button>
        <p>{transaxHash && "Transaction hash: "}</p>
        <a href={`https://rinkeby.etherscan.io/tx/${transaxHash} target="_blank"`}> {transaxHash} </a>
      </div>
    </>



  )
}
