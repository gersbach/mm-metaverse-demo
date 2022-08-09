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
  const {loggedIn, setLoggedIn, userId, setUserId, email} = useContext(userContext);

  const { enableWeb3, isWeb3Enabled, account } = useMoralis();
  const { runContractFunction: getAllIssues } = useWeb3Contract({
    chain: 4,
    abi: abi,
    contractAddress: contractAddress, // specify the networkId
    functionName: "getCurrentIssue",
    params: {
      _issueId: 1,
    },
  })

  const { runContractFunction: getUserId } = useWeb3Contract({
    chain: 4,
    abi: abi,
    contractAddress: contractAddress, // specify the networkId
    functionName: "getVoterId",
    params: {
      _email: email,
    },
  })

  useEffect(() => async () => {
    if (localStorage.getItem('email')) {
      enableWeb3()
    }
    setLoggedIn(true)
  }, [])


  useEffect(() => async () => {
    setInterval(async ()=>{ 
      const data = await getAllIssues();
      setIssues(data);
      if (localStorage.getItem('email')) {
        setUserId(await getUserId())
      }
    }, 2000)
  }, [isWeb3Enabled])

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {issues?.map((issue) => (
        <li key={issue.id} className="py-4 text-xl">
          {`${issue.id}: ${issue.s_currentIssue}`}
          <Stats issue={issue} userId={userId} />
          <div className="h-4"></div>
          <Vote id={issue.id} issue={issue} userId={userId}/>
        </li>
      ))}
    </ul>
  )
}
