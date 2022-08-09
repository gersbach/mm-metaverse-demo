import { useMoralis, useWeb3Contract } from 'react-moralis';
import React, { useContext, useEffect } from 'react';

/* This example requires Tailwind CSS v2.0+ */
  export default function PageHeader({userContext}) {

    const { enableWeb3, isWeb3Enabled, account } = useMoralis();
    const {loggedIn, setLoggedIn} = useContext(userContext);

    return (
      <header className="bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
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
              <button
                href="#"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                onClick={
                  async () => {
                    await enableWeb3()
                    setLoggedIn(true)
                    localStorage.setItem('web3-initiated', 'true')
                  }
                 }
              >
                Login with Meta Mask
              </button>
              <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Login with Email
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
  