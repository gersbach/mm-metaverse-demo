import React, {createContext, useCallback, useEffect, useState} from 'react'
import Header from '../Components/Header'
import List from '../Components/List'
import Vote from '../Components/Vote'
import Previous from '../Components/Previous'
import PageHeader from '../Components/PageHeader'
import Question from '../Components/Question'


function test() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState(false);
    const [email, setEmail] = useState('')

    // useEffect(() => {
    //     if (localStorage.getItem('email') && !userId) {
    //         setEmail(localStorage.getItem('email'))
    //     }
    // }, [])

    const userContext = createContext()

    return (
    <userContext.Provider value={{
        loggedIn, 
        setLoggedIn, 
        userId, 
        setUserId,  
        email, 
        setEmail
        }}>
        <main>
            <PageHeader userContext={userContext} />
                <Header />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-center items-center'></div>
                <div className='center text-'></div>
                <div className="max-w-3xl mx-auto">
                <Question />
                <List userContext={userContext} />
                </div>
            </div>
        </main>
    </userContext.Provider>
    )
}

export default test