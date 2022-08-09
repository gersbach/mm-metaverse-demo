export const abi = [
    {
    "inputs": [
    {
    "internalType": "string",
    "name": "_issueName",
    "type": "string"
    }
    ],
    "name": "addIssue",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    },
    {
    "internalType": "string",
    "name": "",
    "type": "string"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "string",
    "name": "_firstName",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "_lastName",
    "type": "string"
    }
    ],
    "name": "addUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "string",
    "name": "_firstName",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "_lastName",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "_email",
    "type": "string"
    }
    ],
    "name": "addUserByEmail",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "_id",
    "type": "uint256"
    }
    ],
    "name": "currentIssuePassing",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getCurrentIssue",
    "outputs": [
    {
    "components": [
    {
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
    },
    {
    "internalType": "bool",
    "name": "open",
    "type": "bool"
    },
    {
    "internalType": "string",
    "name": "s_currentIssue",
    "type": "string"
    },
    {
    "internalType": "uint256[]",
    "name": "s_allVotersOfIssue",
    "type": "uint256[]"
    },
    {
    "internalType": "uint256[]",
    "name": "s_allVotersOfIssueEligible",
    "type": "uint256[]"
    },
    {
    "internalType": "uint256[]",
    "name": "s_votesAgainst",
    "type": "uint256[]"
    },
    {
    "internalType": "uint256[]",
    "name": "s_votesFor",
    "type": "uint256[]"
    }
    ],
    "internalType": "struct MMVote.Issue[]",
    "name": "",
    "type": "tuple[]"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "_id",
    "type": "uint256"
    }
    ],
    "name": "getEntireIssue",
    "outputs": [
    {
    "components": [
    {
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
    },
    {
    "internalType": "bool",
    "name": "open",
    "type": "bool"
    },
    {
    "internalType": "string",
    "name": "s_currentIssue",
    "type": "string"
    },
    {
    "internalType": "uint256[]",
    "name": "s_allVotersOfIssue",
    "type": "uint256[]"
    },
    {
    "internalType": "uint256[]",
    "name": "s_allVotersOfIssueEligible",
    "type": "uint256[]"
    },
    {
    "internalType": "uint256[]",
    "name": "s_votesAgainst",
    "type": "uint256[]"
    },
    {
    "internalType": "uint256[]",
    "name": "s_votesFor",
    "type": "uint256[]"
    }
    ],
    "internalType": "struct MMVote.Issue",
    "name": "",
    "type": "tuple"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "_id",
    "type": "uint256"
    }
    ],
    "name": "getIssueNameById",
    "outputs": [
    {
    "internalType": "string",
    "name": "",
    "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "_id",
    "type": "uint256"
    }
    ],
    "name": "getIssueStatusById",
    "outputs": [
    {
    "internalType": "bool",
    "name": "",
    "type": "bool"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "getNumberOfVoters",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address",
    "name": "_userAddress",
    "type": "address"
    }
    ],
    "name": "getUserByAddress",
    "outputs": [
    {
    "components": [
    {
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
    },
    {
    "internalType": "string",
    "name": "firstName",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "lastName",
    "type": "string"
    }
    ],
    "internalType": "struct MMVote.EligibleVoter",
    "name": "",
    "type": "tuple"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "string",
    "name": "_email",
    "type": "string"
    }
    ],
    "name": "getUserByEmail",
    "outputs": [
    {
    "components": [
    {
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
    },
    {
    "internalType": "string",
    "name": "firstName",
    "type": "string"
    },
    {
    "internalType": "string",
    "name": "lastName",
    "type": "string"
    }
    ],
    "internalType": "struct MMVote.EligibleVoter",
    "name": "",
    "type": "tuple"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "string",
    "name": "_email",
    "type": "string"
    }
    ],
    "name": "getVoterId",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "_issueId",
    "type": "uint256"
    }
    ],
    "name": "getVotesAgainst",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "_issueId",
    "type": "uint256"
    }
    ],
    "name": "getVotesFor",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "_issueId",
    "type": "uint256"
    }
    ],
    "name": "getVotesRemaining",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "enum MMVote.VoteType",
    "name": "_voteType",
    "type": "uint8"
    },
    {
    "internalType": "uint256",
    "name": "_issueId",
    "type": "uint256"
    },
    {
    "internalType": "string",
    "name": "_email",
    "type": "string"
    }
    ],
    "name": "vote",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
    }
    ]

export const contractAddress = '0x150bDfB1b4601c65Dff905cbC4AABE62be9f91a1';   