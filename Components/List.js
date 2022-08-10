import Yes from "./buttons/Yes"
import Stats from "./Stats"
import Vote from './Vote'
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { contractAddress, abi } from '../constants'
import React, { useEffect, useState, useContext } from "react";

/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1, name: `Should there be doritos in the snack bar?` },
  { id: 2, name: `I am in favor of moving the company 401k to John Doe Capital.` },
  { id: 3, name: `There should be a one a year employee get together.` }
  // More items...
]


export default function List({userContext}) {
  const [issues, setIssues] = useState([]);
  const {loggedIn, setLoggedIn, email, contract} = useContext(userContext);

  const { enableWeb3, isWeb3Enabled, account } = useMoralis();
  const { runContractFunction: getAllIssues } = useWeb3Contract({
    chain: 4,
    abi: abi,
    contractAddress: contractAddress, // specify the networkId
    functionName: "getAllIssues",
    params: {
    },
  })


  useEffect(() => async () => {
    setInterval(async ()=>{ 
      const data = await contract.getAllIssues();
      setIssues(data);
    }, 2000)
  }, [])

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {issues?.map((issue) => (
        <li key={issue.id} className="py-4 text-xl">
          {`${issue.id}: ${issue.name}`}
          <Stats issue={issue}  />
          <div className="h-4"></div>
          <Vote id={issue.id} issue={issue} userContext={userContext}/>
        </li>
      ))}
    </ul>
  )
}
