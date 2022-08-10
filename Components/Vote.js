import React, { useEffect, useState } from 'react'
import Yes from './buttons/Yes'
import No from './buttons/No'

function Vote({id, issue, userContext}) {
    const [ableToVote, setAbleToVote] = useState(false)
    const [transaxHash, setTransaxHash] = useState()
    const [processTransax, setProcessTransax] = useState(false)

    useEffect(()=>{
        setAbleToVote(issue.votersRemaining.includes((localStorage.getItem('email')))
    )})

    return (
        <>
            {!(!ableToVote || processTransax) && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-center items-center'></div>
                <div className='center text-'></div>
                <div className="max-w-3xl mx-auto">
                    <Yes 
                        id={id} 
                        disabled={!ableToVote || processTransax} 
                        setTransaxHash={setTransaxHash} 
                        userContext={userContext}
                        setProcessTransax={setProcessTransax}
                    />
                        &nbsp;&nbsp;
                    <No 
                        id={id} 
                        disabled={!ableToVote} 
                        setTransaxHash={setTransaxHash} 
                        userContext={userContext}
                        setProcessTransax={setProcessTransax}
                        />
                </div>
            </div>}
            <p>{transaxHash && "Transaction hash: "}</p>
            <a href={`https://rinkeby.etherscan.io/tx/${transaxHash}`} rel="noreferrer noopener" target="_blank"> {transaxHash} </a>
        </>
    )
}

export default Vote