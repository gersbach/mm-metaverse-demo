import { useMoralis, useWeb3Contract } from 'react-moralis';
import React, { useContext, useEffect, useState } from 'react';
import { contractAddress, abi } from '../constants'


/* This example requires Tailwind CSS v2.0+ */
  export default function PageHeader({userContext}) {

    const { enableWeb3, isWeb3Enabled, account } = useMoralis();
    const {loggedIn, setLoggedIn, email, setEmail, contract} = useContext(userContext);

    const [tempEmail, setTempEmail] = useState('');
  

    const { runContractFunction: createUser } = useWeb3Contract({
      chain: 4,
      abi: abi,
      contractAddress: contractAddress, 
      functionName: "addUser",
      params: {
        _email: tempEmail,
      },
    })



    const login = async () => {
      setEmail(tempEmail)
      localStorage.setItem('email', tempEmail)
      const data = isWeb3Enabled? await createUser() : await contract.addUser(tempEmail)
      setLoggedIn(true)
    }
  
    return (
      <header className="bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-blue-700 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
            </div>
            <div className="ml-10 space-x-4">
              <input
              value={tempEmail}
              onChange={
                (event)=>{
                  setTempEmail(event.target.value)
                }
              }
              >
              
              </input>
              <button
                href="#"
                className="inline-block bg-blue-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                onClick={
                  async (event) => {
                    event.preventDefault()
                    await login()
                    //setLoggedIn(true)
                  }
                 }
              >
                Register
              </button>
              <button
                href="#"
                className="inline-block bg-blue-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                onClick={
                  async () => {
                    await enableWeb3()
                    //setLoggedIn(true)
                  }
                 }
              >
                Login with Meta Mask
              </button>
            </div>
          </div>
        </nav>
      </header>
    )
  }
  