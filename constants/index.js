export const abi = [
    {
    "inputs": [
    {
    "internalType": "string",
    "name": "_name",
    "type": "string"
    }
    ],
    "name": "addIssue",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "addUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "name": "allIssuesList",
    "outputs": [
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
    "name": "name",
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
    "name": "",
    "type": "uint256"
    }
    ],
    "name": "allUsers",
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
    "inputs": [],
    "name": "getAllIssues",
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
    "name": "name",
    "type": "string"
    },
    {
    "internalType": "string[]",
    "name": "votesAgainst",
    "type": "string[]"
    },
    {
    "internalType": "string[]",
    "name": "votesFor",
    "type": "string[]"
    },
    {
    "internalType": "string[]",
    "name": "votersRemaining",
    "type": "string[]"
    },
    {
    "internalType": "string[]",
    "name": "votersEligible",
    "type": "string[]"
    }
    ],
    "internalType": "struct Vote.Issue[]",
    "name": "",
    "type": "tuple[]"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "issueId",
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
    "internalType": "string",
    "name": "_email",
    "type": "string"
    },
    {
    "internalType": "uint256",
    "name": "_issueId",
    "type": "uint256"
    },
    {
    "internalType": "enum Vote.VoteType",
    "name": "_voteType",
    "type": "uint8"
    }
    ],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    }
    ]
    
    export const contractAddress = '0xaaa3f9fcc8ebad47362b2486bb72a4bd02b35900'; 