import React, {createContext, useState} from 'react'
import Header from '../Components/Header'
import List from '../Components/List'
import Vote from '../Components/Vote'
import Previous from '../Components/Previous'
import PageHeader from '../Components/PageHeader'
import Question from '../Components/Question'


function test() {
    const [loggedIn, setLoggedIn] = useState(false);

    const userContext = createContext()



    return (
    <userContext.Provider value={{loggedIn, setLoggedIn}}>
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