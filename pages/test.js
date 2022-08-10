import React, {createContext, useCallback, useEffect, useState} from 'react'
import Header from '../Components/Header'
import List from '../Components/List'
import Vote from '../Components/Vote'
import Previous from '../Components/Previous'
import PageHeader from '../Components/PageHeader'
import Question from '../Components/Question'
import { ethers } from 'ethers'
import {abi, contractAddress} from '../constants'


function test() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('')

    // useEffect(() => {
    //     if (localStorage.getItem('email') && !userId) {
    //         setEmail(localStorage.getItem('email'))
    //     }
    // }, [])

    let provider = new ethers.providers.JsonRpcProvider('https://eth-rinkeby.alchemyapi.io/v2/B0zgar1SPtIGUyv1_0F7iQm_wB_ZIe7e')
    let wallet = new ethers.Wallet('6ee3bfc6a1c522a20fb7340cfafeb818155768a34f865ea7358c13af6b08df77', provider  )

    const contract = new ethers.Contract(contractAddress, abi, wallet);

    const userContext = createContext()

    return (
    <userContext.Provider value={{
        loggedIn, 
        setLoggedIn, 
        email, 
        setEmail,
        contract
        }}>
        <main>
            <PageHeader userContext={userContext} />
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-center items-center'></div>
                <div className='center text-'></div>
                <div className="max-w-3xl mx-auto">
                <Question userContext={userContext} />
                <List userContext={userContext} />
                </div>
            </div>
        </main>
    </userContext.Provider>
    )
}

export default test 