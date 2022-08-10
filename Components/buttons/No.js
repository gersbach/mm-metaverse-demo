import React, {useContext} from 'react'
import { contractAddress, abi } from '../../constants'
import { useMoralis, useWeb3Contract } from 'react-moralis';


function No({id, disabled, userContext, setTransaxHash, setProcessTransax}) {
    const { isWeb3Enabled } = useMoralis();
    const { contract } = useContext(userContext);

    const { runContractFunction: vote } = useWeb3Contract({
        chain: 4,
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "vote",
        params: {
         _email: localStorage.getItem('email'),
          _voteType: 1,
          _issueId: id,
        },
      })

    return (
        <button
            type="button"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700`}
            disabled={disabled}
            onClick={
                async () => {
                    setProcessTransax(true)
                    const transax = isWeb3Enabled? await vote() : await contract.vote(localStorage.getItem('email'), id, 1)
                    setTransaxHash(transax.hash)
                }
            }
        >
            No
        </button>
    )
}

export default No