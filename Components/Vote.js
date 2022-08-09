import React, { useEffect, useState } from 'react'
import Yes from './buttons/Yes'
import No from './buttons/No'

function Vote({id, issue, userId}) {
    const [ableToVote, setAbleToVote] = useState(false)

    useEffect(()=>{
        setAbleToVote(issue[3].map((number)=>{
            return Number(number._hex)
        }).includes(Number(localStorage.getItem('userId')))
    )})

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-center items-center'></div>
                <div className='center text-'></div>
                <div className="max-w-3xl mx-auto">
                    <Yes id={id} disabled={!ableToVote}/>
                        &nbsp;&nbsp;
                    <No id={id} disabled={!ableToVote}/></div>
            </div>
        </>
    )
}

export default Vote