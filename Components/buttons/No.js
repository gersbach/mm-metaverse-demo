import React from 'react'
import { contractAddress, abi } from '../../constants'
import { useMoralis, useWeb3Contract } from 'react-moralis';


function No({id}) {

    console.log(id)

    const { runContractFunction: vote } = useWeb3Contract({
        chain: 4,
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "vote",
        params: {
          _voteType: 1,
          _issueId: id,
          _email: localStorage.getItem('email')
    
        },
      })

    return (
        <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={
                async () => {
                    const data = await vote()
                }
            }
        >
            No
        </button>
    )
}

export default No