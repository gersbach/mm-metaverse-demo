import React from 'react'
import { contractAddress, abi } from '../../constants'
import { useMoralis, useWeb3Contract } from 'react-moralis';



function Yes({id, disabled}) {


    const { runContractFunction: vote } = useWeb3Contract({
        chain: 4,
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "vote",
        params: {
         _email: localStorage.getItem('email'),
          _voteType: 0,
          _issueId: id,
    
        },
      })

    return (
        <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={disabled}
            onClick={
                async () => {
                    await vote()
                }
            }
        >
            Yes
        </button>
    )
}

export default Yes