import React from 'react'

function VoteContainer({id}) {
    return (
        <div className='w-max m-0'>
            <Yes id={id} />
            <No id={id} />
        </div>
    )
}

export default VoteContainer