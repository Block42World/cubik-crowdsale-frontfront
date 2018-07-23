(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "Cubik",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "reclaimToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INITIAL_SUPPLY",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from_",
          "type": "address"
        },
        {
          "name": "value_",
          "type": "uint256"
        },
        {
          "name": "data_",
          "type": "bytes"
        }
      ],
      "name": "tokenFallback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x60806040526000600360146101000a81548160ff02191690831515021790555034801561002b57600080fd5b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601260ff16600a0a64012a05f20002600181905550601260ff16600a0a64012a05f200026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef601260ff16600a0a64012a05f200026040518082815260200191505060405180910390a3611c05806101566000396000f300608060405260043610610112576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610117578063095ea7b3146101a757806317ffc3201461020c57806318160ddd1461024f57806323b872dd1461027a5780632ff2e9dc146102ff578063313ce5671461032a5780633f4ba83a1461035b5780635c975abb1461037257806366188463146103a157806370a0823114610406578063715018a61461045d5780638456cb59146104745780638da5cb5b1461048b57806395d89b41146104e2578063a9059cbb14610572578063c0ee0b8a146105d7578063d73dd6231461063c578063dd62ed3e146106a1578063f2fde38b14610718575b600080fd5b34801561012357600080fd5b5061012c61075b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016c578082015181840152602081019050610151565b50505050905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101b357600080fd5b506101f2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610794565b604051808215151515815260200191505060405180910390f35b34801561021857600080fd5b5061024d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107c4565b005b34801561025b57600080fd5b5061026461094b565b6040518082815260200191505060405180910390f35b34801561028657600080fd5b506102e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610955565b604051808215151515815260200191505060405180910390f35b34801561030b57600080fd5b50610314610987565b6040518082815260200191505060405180910390f35b34801561033657600080fd5b5061033f610999565b604051808260ff1660ff16815260200191505060405180910390f35b34801561036757600080fd5b5061037061099e565b005b34801561037e57600080fd5b50610387610a5e565b604051808215151515815260200191505060405180910390f35b3480156103ad57600080fd5b506103ec600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a71565b604051808215151515815260200191505060405180910390f35b34801561041257600080fd5b50610447600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa1565b6040518082815260200191505060405180910390f35b34801561046957600080fd5b50610472610ae9565b005b34801561048057600080fd5b50610489610bee565b005b34801561049757600080fd5b506104a0610caf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104ee57600080fd5b506104f7610cd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561053757808201518184015260208101905061051c565b50505050905090810190601f1680156105645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561057e57600080fd5b506105bd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d0e565b604051808215151515815260200191505060405180910390f35b3480156105e357600080fd5b5061063a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001919091929391929390505050610d3e565b005b34801561064857600080fd5b50610687600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d43565b604051808215151515815260200191505060405180910390f35b3480156106ad57600080fd5b50610702600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d73565b6040518082815260200191505060405180910390f35b34801561072457600080fd5b50610759600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dfa565b005b6040805190810160405280600581526020017f437562696b00000000000000000000000000000000000000000000000000000081525081565b6000600360149054906101000a900460ff161515156107b257600080fd5b6107bc8383610e62565b905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561082257600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156108bd57600080fd5b505af11580156108d1573d6000803e3d6000fd5b505050506040513d60208110156108e757600080fd5b81019080805190602001909291905050509050610947600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff16610f549092919063ffffffff16565b5050565b6000600154905090565b6000600360149054906101000a900460ff1615151561097357600080fd5b61097e848484611042565b90509392505050565b601260ff16600a0a64012a05f2000281565b601281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109fa57600080fd5b600360149054906101000a900460ff161515610a1557600080fd5b6000600360146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600360149054906101000a900460ff1681565b6000600360149054906101000a900460ff16151515610a8f57600080fd5b610a9983836113fc565b905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b4557600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4a57600080fd5b600360149054906101000a900460ff16151515610c6657600080fd5b6001600360146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280600581526020017f435542494b00000000000000000000000000000000000000000000000000000081525081565b6000600360149054906101000a900460ff16151515610d2c57600080fd5b610d36838361168d565b905092915050565b600080fd5b6000600360149054906101000a900460ff16151515610d6157600080fd5b610d6b83836118ac565b905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e5657600080fd5b610e5f81611aa8565b50565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ff757600080fd5b505af115801561100b573d6000803e3d6000fd5b505050506040513d602081101561102157600080fd5b8101908080519060200190929190505050151561103d57600080fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561107f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156110cc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561115757600080fd5b6111a8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ba490919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061123b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bbd90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061130c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ba490919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561150d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506115a1565b6115208382611ba490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156116ca57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561171757600080fd5b611768826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ba490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117fb826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bbd90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061193d82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bbd90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611ae457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000828211151515611bb257fe5b818303905092915050565b60008183019050828110151515611bd057fe5b809050929150505600a165627a7a723058204f9f31461a29b14436b66369498ba6ccad202c0c803e821290a529a5c6d0d3f70029",
  "deployedBytecode": "0x608060405260043610610112576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610117578063095ea7b3146101a757806317ffc3201461020c57806318160ddd1461024f57806323b872dd1461027a5780632ff2e9dc146102ff578063313ce5671461032a5780633f4ba83a1461035b5780635c975abb1461037257806366188463146103a157806370a0823114610406578063715018a61461045d5780638456cb59146104745780638da5cb5b1461048b57806395d89b41146104e2578063a9059cbb14610572578063c0ee0b8a146105d7578063d73dd6231461063c578063dd62ed3e146106a1578063f2fde38b14610718575b600080fd5b34801561012357600080fd5b5061012c61075b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016c578082015181840152602081019050610151565b50505050905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101b357600080fd5b506101f2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610794565b604051808215151515815260200191505060405180910390f35b34801561021857600080fd5b5061024d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107c4565b005b34801561025b57600080fd5b5061026461094b565b6040518082815260200191505060405180910390f35b34801561028657600080fd5b506102e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610955565b604051808215151515815260200191505060405180910390f35b34801561030b57600080fd5b50610314610987565b6040518082815260200191505060405180910390f35b34801561033657600080fd5b5061033f610999565b604051808260ff1660ff16815260200191505060405180910390f35b34801561036757600080fd5b5061037061099e565b005b34801561037e57600080fd5b50610387610a5e565b604051808215151515815260200191505060405180910390f35b3480156103ad57600080fd5b506103ec600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a71565b604051808215151515815260200191505060405180910390f35b34801561041257600080fd5b50610447600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa1565b6040518082815260200191505060405180910390f35b34801561046957600080fd5b50610472610ae9565b005b34801561048057600080fd5b50610489610bee565b005b34801561049757600080fd5b506104a0610caf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104ee57600080fd5b506104f7610cd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561053757808201518184015260208101905061051c565b50505050905090810190601f1680156105645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561057e57600080fd5b506105bd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d0e565b604051808215151515815260200191505060405180910390f35b3480156105e357600080fd5b5061063a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001919091929391929390505050610d3e565b005b34801561064857600080fd5b50610687600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d43565b604051808215151515815260200191505060405180910390f35b3480156106ad57600080fd5b50610702600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d73565b6040518082815260200191505060405180910390f35b34801561072457600080fd5b50610759600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610dfa565b005b6040805190810160405280600581526020017f437562696b00000000000000000000000000000000000000000000000000000081525081565b6000600360149054906101000a900460ff161515156107b257600080fd5b6107bc8383610e62565b905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561082257600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156108bd57600080fd5b505af11580156108d1573d6000803e3d6000fd5b505050506040513d60208110156108e757600080fd5b81019080805190602001909291905050509050610947600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff16610f549092919063ffffffff16565b5050565b6000600154905090565b6000600360149054906101000a900460ff1615151561097357600080fd5b61097e848484611042565b90509392505050565b601260ff16600a0a64012a05f2000281565b601281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109fa57600080fd5b600360149054906101000a900460ff161515610a1557600080fd5b6000600360146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600360149054906101000a900460ff1681565b6000600360149054906101000a900460ff16151515610a8f57600080fd5b610a9983836113fc565b905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b4557600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c4a57600080fd5b600360149054906101000a900460ff16151515610c6657600080fd5b6001600360146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280600581526020017f435542494b00000000000000000000000000000000000000000000000000000081525081565b6000600360149054906101000a900460ff16151515610d2c57600080fd5b610d36838361168d565b905092915050565b600080fd5b6000600360149054906101000a900460ff16151515610d6157600080fd5b610d6b83836118ac565b905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e5657600080fd5b610e5f81611aa8565b50565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ff757600080fd5b505af115801561100b573d6000803e3d6000fd5b505050506040513d602081101561102157600080fd5b8101908080519060200190929190505050151561103d57600080fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561107f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156110cc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561115757600080fd5b6111a8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ba490919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061123b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bbd90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061130c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ba490919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561150d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506115a1565b6115208382611ba490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156116ca57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561171757600080fd5b611768826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ba490919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117fb826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bbd90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061193d82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bbd90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611ae457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000828211151515611bb257fe5b818303905092915050565b60008183019050828110151515611bd057fe5b809050929150505600a165627a7a723058204f9f31461a29b14436b66369498ba6ccad202c0c803e821290a529a5c6d0d3f70029",
  "sourceMap": "665:867:0:-;;;268:5:5;247:26;;;;;;;;;;;;;;;;;;;;1241:288:0;8:9:-1;5:2;;;30:1;27;20:12;5:2;1241:288:0;575:10:9;567:5;;:18;;;;;;;;;;;;;;;;;;962:2:0;1094:17;;1090:2;:21;1084:3;:27;1268:12;:29;;;;962:2;1094:17;;1090:2;:21;1084:3;:27;1364:8;:20;1373:10;1364:20;;;;;;;;;;;;;;;:37;;;;1497:10;1476:48;;1493:1;1476:48;;;962:2;1094:17;;1090:2;:21;1084:3;:27;1476:48;;;;;;;;;;;;;;;;;;665:867;;;;;;",
  "deployedSourceMap": "665:867:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;715:37;;8:9:-1;5:2;;;30:1;27;20:12;5:2;715:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;715:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;592:162:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;592:162:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;598:149:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;598:149:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;371:83:10;;;;;;;;;;;;;;;;;;;;;;;400:188:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;400:188:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1043:68:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1043:68:0;;;;;;;;;;;;;;;;;;;;;;;929:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;929:35:0;;;;;;;;;;;;;;;;;;;;;;;;;;;838:92:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;838:92:5;;;;;;247:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;957:205:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;957:205:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1131:99:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1131:99:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:9;;;;;;666:90:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;666:90:5;;;;;;238:20:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:9;;;;;;;;;;;;;;;;;;;;;;;;;;;821:39:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;821:39:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;821:39:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;242:154:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;242:154:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;637:129:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;637:129:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;758:195:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;758:195:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2336:153:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2336:153:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1100:103:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;715:37:0;;;;;;;;;;;;;;;;;;;;:::o;592:162:13:-;697:4;416:6:5;;;;;;;;;;;415:7;407:16;;;;;;;;718:31:13;732:8;742:6;718:13;:31::i;:::-;711:38;;592:162;;;;:::o;598:149:7:-;663:15;719:5:9;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;681:5:7;:15;;;697:4;681:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;681:21:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;681:21:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;681:21:7;;;;;;;;;;;;;;;;663:39;;708:34;727:5;;;;;;;;;;;734:7;708:5;:18;;;;:34;;;;;:::i;:::-;598:149;;:::o;371:83:10:-;415:7;437:12;;430:19;;371:83;:::o;400:188:13:-;524:4;416:6:5;;;;;;;;;;;415:7;407:16;;;;;;;;545:38:13;564:5;571:3;576:6;545:18;:38::i;:::-;538:45;;400:188;;;;;:::o;1043:68:0:-;962:2;1094:17;;1090:2;:21;1084:3;:27;1043:68;:::o;929:35::-;962:2;929:35;:::o;838:92:5:-;719:5:9;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;568:6:5;;;;;;;;;;;560:15;;;;;;;;900:5;891:6;;:14;;;;;;;;;;;;;;;;;;916:9;;;;;;;;;;838:92::o;247:26::-;;;;;;;;;;;;;:::o;957:205:13:-;1078:12;416:6:5;;;;;;;;;;;415:7;407:16;;;;;;;;1107:50:13;1130:8;1140:16;1107:22;:50::i;:::-;1100:57;;957:205;;;;:::o;1131:99:10:-;1187:7;1209:8;:16;1218:6;1209:16;;;;;;;;;;;;;;;;1202:23;;1131:99;;;:::o;827:111:9:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;666:90:5:-;719:5:9;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;416:6:5;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;744:7;;;;;;;;;;666:90::o;238:20:9:-;;;;;;;;;;;;;:::o;821:39:0:-;;;;;;;;;;;;;;;;;;;;:::o;242:154:13:-;343:4;416:6:5;;;;;;;;;;;415:7;407:16;;;;;;;;364:27:13;379:3;384:6;364:14;:27::i;:::-;357:34;;242:154;;;;:::o;637:129:8:-;753:8;;;758:195:13;874:12;416:6:5;;;;;;;;;;;415:7;407:16;;;;;;;;903:45:13;926:8;936:11;903:22;:45::i;:::-;896:52;;758:195;;;;:::o;2336:153:15:-;2435:7;2459;:15;2467:6;2459:15;;;;;;;;;;;;;;;:25;2475:8;2459:25;;;;;;;;;;;;;;;;2452:32;;2336:153;;;;:::o;1100:103:9:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;1829:188:15:-;1896:4;1940:6;1908:7;:19;1916:10;1908:19;;;;;;;;;;;;;;;:29;1928:8;1908:29;;;;;;;;;;;;;;;:38;;;;1978:8;1957:38;;1966:10;1957:38;;;1988:6;1957:38;;;;;;;;;;;;;;;;;;2008:4;2001:11;;1829:188;;;;:::o;368:121:14:-;458:5;:14;;;473:2;477:5;458:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;458:25:14;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;458:25:14;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;458:25:14;;;;;;;;;;;;;;;;450:34;;;;;;;;368:121;;;:::o;736:470:15:-;842:4;879:1;864:17;;:3;:17;;;;856:26;;;;;;;;906:8;:15;915:5;906:15;;;;;;;;;;;;;;;;896:6;:25;;888:34;;;;;;;;946:7;:14;954:5;946:14;;;;;;;;;;;;;;;:26;961:10;946:26;;;;;;;;;;;;;;;;936:6;:36;;928:45;;;;;;;;998:27;1018:6;998:8;:15;1007:5;998:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;980:8;:15;989:5;980:15;;;;;;;;;;;;;;;:45;;;;1047:25;1065:6;1047:8;:13;1056:3;1047:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1031:8;:13;1040:3;1031:13;;;;;;;;;;;;;;;:41;;;;1107:38;1138:6;1107:7;:14;1115:5;1107:14;;;;;;;;;;;;;;;:26;1122:10;1107:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1078:7;:14;1086:5;1078:14;;;;;;;;;;;;;;;:26;1093:10;1078:26;;;;;;;;;;;;;;;:67;;;;1172:3;1156:28;;1165:5;1156:28;;;1177:6;1156:28;;;;;;;;;;;;;;;;;;1197:4;1190:11;;736:470;;;;;:::o;3701:425::-;3804:4;3818:13;3834:7;:19;3842:10;3834:19;;;;;;;;;;;;;;;:29;3854:8;3834:29;;;;;;;;;;;;;;;;3818:45;;3892:8;3873:16;:27;3869:164;;;3942:1;3910:7;:19;3918:10;3910:19;;;;;;;;;;;;;;;:29;3930:8;3910:29;;;;;;;;;;;;;;;:33;;;;3869:164;;;3996:30;4009:16;3996:8;:12;;:30;;;;:::i;:::-;3964:7;:19;3972:10;3964:19;;;;;;;;;;;;;;;:29;3984:8;3964:29;;;;;;;;;;;;;;;:62;;;;3869:164;4064:8;4043:61;;4052:10;4043:61;;;4074:7;:19;4082:10;4074:19;;;;;;;;;;;;;;;:29;4094:8;4074:29;;;;;;;;;;;;;;;;4043:61;;;;;;;;;;;;;;;;;;4117:4;4110:11;;3701:425;;;;;:::o;608:321:10:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;784:32;809:6;784:8;:20;793:10;784:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;761:8;:20;770:10;761:20;;;;;;;;;;;;;;;:55;;;;838:25;856:6;838:8;:13;847:3;838:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;822:8;:13;831:3;822:13;;;;;;;;;;;;;;;:41;;;;895:3;874:33;;883:10;874:33;;;900:6;874:33;;;;;;;;;;;;;;;;;;920:4;913:11;;608:321;;;;:::o;2946:293:15:-;3044:4;3098:46;3132:11;3098:7;:19;3106:10;3098:19;;;;;;;;;;;;;;;:29;3118:8;3098:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3058:7;:19;3066:10;3058:19;;;;;;;;;;;;;;;:29;3078:8;3058:29;;;;;;;;;;;;;;;:87;;;;3177:8;3156:61;;3165:10;3156:61;;;3187:7;:19;3195:10;3187:19;;;;;;;;;;;;;;;:29;3207:8;3187:29;;;;;;;;;;;;;;;;3156:61;;;;;;;;;;;;;;;;;;3230:4;3223:11;;2946:293;;;;:::o;1338:171:9:-;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o;1042:110:6:-;1100:7;1127:1;1122;:6;;1115:14;;;;;;1146:1;1142;:5;1135:12;;1042:110;;;;:::o;1214:123::-;1272:9;1297:1;1293;:5;1289:9;;1316:1;1311;:6;;1304:14;;;;;;1331:1;1324:8;;1214:123;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/HasNoTokens.sol\";\n\n/**\n* @title Cubik token contract\n* @author Richard Fu (richardf@block42.world)\n* @dev Complant with OpenZeppelin's implementation of the ERC20 spec.\n*\n* CUBIK Tokens are divisible by 1e18 (1,000,000,000,000,000,000) base\n* units referred to as 'Wei'.\n*\n* CUBIK are displayed using 18 decimal places of precision.\n*\n* 5 Billion CUBIK Token total supply (5 Octillion Wei):\n* 5,000,000,000 * 1e18 == 5e9 * 1e18 == 5e27\n*\n* All initial CUBIK Grains are assigned to the creator of\n* this contract.\n*/\n\ncontract Cubik is PausableToken, HasNoTokens {\n\n  string public constant name = 'Cubik';                                // Set the token name for display\n  string public constant symbol = 'CUBIK';                              // Set the token symbol for display\n  uint8 public constant decimals = 18;                                  // Set the number of decimals for display\n  uint256 public constant INITIAL_SUPPLY = 5e9 * 10**uint256(decimals); // supply specified in Wei\n\n  /**\n   * @dev The Cubik constructor sets total supply and inialize balance to the sender.\n   */\n  constructor() public {\n    totalSupply_ = INITIAL_SUPPLY;                                      // Set the total supply\n    balances[msg.sender] = INITIAL_SUPPLY;                              // Creator address is assigned all\n    emit Transfer(address(0), msg.sender, INITIAL_SUPPLY);\n  }\n\n}",
  "sourcePath": "/Users/fur/Projects/Block42/cubik-contracts/contracts/Cubik.sol",
  "ast": {
    "absolutePath": "/Users/fur/Projects/Block42/cubik-contracts/contracts/Cubik.sol",
    "exportedSymbols": {
      "Cubik": [
        50
      ]
    },
    "id": 51,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 51,
        "sourceUnit": 1022,
        "src": "26:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "file": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 51,
        "sourceUnit": 663,
        "src": "98:67:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "PausableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1021,
              "src": "683:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PausableToken_$1021",
                "typeString": "contract PausableToken"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "683:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "HasNoTokens",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 662,
              "src": "698:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_HasNoTokens_$662",
                "typeString": "contract HasNoTokens"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "698:11:0"
          }
        ],
        "contractDependencies": [
          510,
          637,
          662,
          748,
          844,
          887,
          919,
          1021,
          1330
        ],
        "contractKind": "contract",
        "documentation": "@title Cubik token contract\n@author Richard Fu (richardf@block42.world)\n@dev Complant with OpenZeppelin's implementation of the ERC20 spec.\n* CUBIK Tokens are divisible by 1e18 (1,000,000,000,000,000,000) base\nunits referred to as 'Wei'.\n* CUBIK are displayed using 18 decimal places of precision.\n* 5 Billion CUBIK Token total supply (5 Octillion Wei):\n5,000,000,000 * 1e18 == 5e9 * 1e18 == 5e27\n* All initial CUBIK Grains are assigned to the creator of\nthis contract.",
        "fullyImplemented": true,
        "id": 50,
        "linearizedBaseContracts": [
          50,
          662,
          637,
          1021,
          510,
          748,
          1330,
          844,
          887,
          919
        ],
        "name": "Cubik",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 10,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "715:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "715:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "437562696b",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "745:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f53c2f2fcb29f1c4a59bd71f827d5590ed3b9a21d7ac612c92264917fac9fe20",
                "typeString": "literal_string \"Cubik\""
              },
              "value": "Cubik"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 13,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "821:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 11,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "821:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "435542494b",
              "id": 12,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "853:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f2e612d65c73c566328ad5ec5b5e086d656a5e33ffcd718d0653dd1a226af71d",
                "typeString": "literal_string \"CUBIK\""
              },
              "value": "CUBIK"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 16,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "929:35:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 14,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "929:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 15,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "962:2:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 25,
            "name": "INITIAL_SUPPLY",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "1043:68:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1043:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 24,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "356539",
                "id": 18,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1084:3:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_5000000000_by_1",
                  "typeString": "int_const 5000000000"
                },
                "value": "5e9"
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "commonType": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "id": 23,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "argumentTypes": null,
                  "hexValue": "3130",
                  "id": 19,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1090:2:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_10_by_1",
                    "typeString": "int_const 10"
                  },
                  "value": "10"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "argumentTypes": null,
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "1102:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    ],
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "1094:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_uint256_$",
                      "typeString": "type(uint256)"
                    },
                    "typeName": "uint256"
                  },
                  "id": 22,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1094:17:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "src": "1090:21:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "src": "1084:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 48,
              "nodeType": "Block",
              "src": "1262:267:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 28,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 763,
                      "src": "1268:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 29,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "1283:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1268:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 31,
                  "nodeType": "ExpressionStatement",
                  "src": "1268:29:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 761,
                        "src": "1364:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 35,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 33,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1345,
                          "src": "1373:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 34,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1373:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1364:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 36,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "1387:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1364:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "1364:37:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 41,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1493:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 40,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1485:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 42,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1485:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 43,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1345,
                          "src": "1497:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1497:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "INITIAL_SUPPLY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "1509:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 39,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 918,
                      "src": "1476:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1476:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47,
                  "nodeType": "EmitStatement",
                  "src": "1471:53:0"
                }
              ]
            },
            "documentation": "@dev The Cubik constructor sets total supply and inialize balance to the sender.",
            "id": 49,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 26,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1252:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1262:0:0"
            },
            "scope": 50,
            "src": "1241:288:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 51,
        "src": "665:867:0"
      }
    ],
    "src": "0:1532:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/fur/Projects/Block42/cubik-contracts/contracts/Cubik.sol",
    "exportedSymbols": {
      "Cubik": [
        50
      ]
    },
    "id": 51,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 51,
        "sourceUnit": 1022,
        "src": "26:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "file": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 51,
        "sourceUnit": 663,
        "src": "98:67:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "PausableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1021,
              "src": "683:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PausableToken_$1021",
                "typeString": "contract PausableToken"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "683:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "HasNoTokens",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 662,
              "src": "698:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_HasNoTokens_$662",
                "typeString": "contract HasNoTokens"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "698:11:0"
          }
        ],
        "contractDependencies": [
          510,
          637,
          662,
          748,
          844,
          887,
          919,
          1021,
          1330
        ],
        "contractKind": "contract",
        "documentation": "@title Cubik token contract\n@author Richard Fu (richardf@block42.world)\n@dev Complant with OpenZeppelin's implementation of the ERC20 spec.\n* CUBIK Tokens are divisible by 1e18 (1,000,000,000,000,000,000) base\nunits referred to as 'Wei'.\n* CUBIK are displayed using 18 decimal places of precision.\n* 5 Billion CUBIK Token total supply (5 Octillion Wei):\n5,000,000,000 * 1e18 == 5e9 * 1e18 == 5e27\n* All initial CUBIK Grains are assigned to the creator of\nthis contract.",
        "fullyImplemented": true,
        "id": 50,
        "linearizedBaseContracts": [
          50,
          662,
          637,
          1021,
          510,
          748,
          1330,
          844,
          887,
          919
        ],
        "name": "Cubik",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 10,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "715:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 8,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "715:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "437562696b",
              "id": 9,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "745:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f53c2f2fcb29f1c4a59bd71f827d5590ed3b9a21d7ac612c92264917fac9fe20",
                "typeString": "literal_string \"Cubik\""
              },
              "value": "Cubik"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 13,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "821:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 11,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "821:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "435542494b",
              "id": 12,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "853:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f2e612d65c73c566328ad5ec5b5e086d656a5e33ffcd718d0653dd1a226af71d",
                "typeString": "literal_string \"CUBIK\""
              },
              "value": "CUBIK"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 16,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "929:35:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 14,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "929:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3138",
              "id": 15,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "962:2:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 25,
            "name": "INITIAL_SUPPLY",
            "nodeType": "VariableDeclaration",
            "scope": 50,
            "src": "1043:68:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1043:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "id": 24,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "356539",
                "id": 18,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1084:3:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_5000000000_by_1",
                  "typeString": "int_const 5000000000"
                },
                "value": "5e9"
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "argumentTypes": null,
                "commonType": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "id": 23,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "argumentTypes": null,
                  "hexValue": "3130",
                  "id": 19,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1090:2:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_10_by_1",
                    "typeString": "int_const 10"
                  },
                  "value": "10"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "argumentTypes": null,
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "1102:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    ],
                    "id": 20,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "nodeType": "ElementaryTypeNameExpression",
                    "src": "1094:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_uint256_$",
                      "typeString": "type(uint256)"
                    },
                    "typeName": "uint256"
                  },
                  "id": 22,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "typeConversion",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1094:17:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "src": "1090:21:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "src": "1084:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 48,
              "nodeType": "Block",
              "src": "1262:267:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 28,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 763,
                      "src": "1268:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 29,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "1283:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1268:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 31,
                  "nodeType": "ExpressionStatement",
                  "src": "1268:29:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 761,
                        "src": "1364:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 35,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 33,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1345,
                          "src": "1373:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 34,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1373:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1364:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 36,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "1387:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1364:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "1364:37:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 41,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1493:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 40,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1485:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 42,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1485:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 43,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1345,
                          "src": "1497:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 44,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1497:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "INITIAL_SUPPLY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "1509:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 39,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 918,
                      "src": "1476:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 46,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1476:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 47,
                  "nodeType": "EmitStatement",
                  "src": "1471:53:0"
                }
              ]
            },
            "documentation": "@dev The Cubik constructor sets total supply and inialize balance to the sender.",
            "id": 49,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 26,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1252:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1262:0:0"
            },
            "scope": 50,
            "src": "1241:288:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 51,
        "src": "665:867:0"
      }
    ],
    "src": "0:1532:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4447": {
      "events": {},
      "links": {},
      "address": "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
      "transactionHash": "0x64ed46c19c7a2cdf010cabee57ed48f8ce396ed5a099618128a5917285aa64c7"
    },
    "1531356036227": {
      "events": {},
      "links": {},
      "address": "0xe164def09eb7f0c09ddb7cd21d723b328e824e36",
      "transactionHash": "0x529228e0ebc0dd2922267d18fc6f484f2734906ffd4a65467f4883ca662fb80f"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-07-18T08:11:44.591Z"
}
},{}],2:[function(require,module,exports){
module.exports={
  "contractName": "CubikCrowdsale",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "reclaimToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "cap",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "weiRaised",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "capReached",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "wallet",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "remainingTokens",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenWallet",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from_",
          "type": "address"
        },
        {
          "name": "value_",
          "type": "uint256"
        },
        {
          "name": "data_",
          "type": "bytes"
        }
      ],
      "name": "tokenFallback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "buyTokens",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_rate",
          "type": "uint256"
        },
        {
          "name": "_wallet",
          "type": "address"
        },
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_cap",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RateChange",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "purchaser",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokenPurchase",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_rate",
          "type": "uint256"
        }
      ],
      "name": "setRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160808061122983398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050828185858560008311151561006557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156100a157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156100dd57600080fd5b8260028190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505060008111151561017757600080fd5b8060048190555050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050610fd8806102516000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317ffc320146100e65780632c4e722e1461012957806334fcf43714610154578063355274ea146101815780634042b66f146101ac5780634f935945146101d7578063521eb27314610206578063715018a61461025d5780638da5cb5b14610274578063bf583903146102cb578063bff99c6c146102f6578063c0ee0b8a1461034d578063ec8ac4d8146103b2578063f2fde38b146103e8578063fc0c546a1461042b575b6100e433610482565b005b3480156100f257600080fd5b50610127600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610550565b005b34801561013557600080fd5b5061013e6106d7565b6040518082815260200191505060405180910390f35b34801561016057600080fd5b5061017f600480360381019080803590602001909291905050506106dd565b005b34801561018d57600080fd5b5061019661077a565b6040518082815260200191505060405180910390f35b3480156101b857600080fd5b506101c1610780565b6040518082815260200191505060405180910390f35b3480156101e357600080fd5b506101ec610786565b604051808215151515815260200191505060405180910390f35b34801561021257600080fd5b5061021b610795565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026957600080fd5b506102726107bb565b005b34801561028057600080fd5b506102896108c0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102d757600080fd5b506102e06108e6565b6040518082815260200191505060405180910390f35b34801561030257600080fd5b5061030b610a3a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561035957600080fd5b506103b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001919091929391929390505050610a60565b005b6103e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610482565b005b3480156103f457600080fd5b50610429600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a65565b005b34801561043757600080fd5b50610440610acd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000803491506104928383610af2565b61049b82610b25565b90506104b282600354610b4390919063ffffffff16565b6003819055506104c28382610b5f565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad188484604051808381526020018281526020019250505060405180910390a36105398383610b6d565b610541610b71565b61054b8383610bdc565b505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ae57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561064957600080fd5b505af115801561065d573d6000803e3d6000fd5b505050506040513d602081101561067357600080fd5b810190808051906020019092919050505090506106d3600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff16610be09092919063ffffffff16565b5050565b60025481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561073957600080fd5b806002819055507f0b6eb270e68ec2b65cffce354325dcd6cb2449e0e8fec1184cd58da0c7b0344b816040518082815260200191505060405180910390a150565b60045481565b60035481565b60006004546003541015905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561081757600080fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b1580156109fa57600080fd5b505af1158015610a0e573d6000803e3d6000fd5b505050506040513d6020811015610a2457600080fd5b8101908080519060200190929190505050905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ac157600080fd5b610aca81610cce565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610afc8282610dca565b600454610b1482600354610b4390919063ffffffff16565b11151515610b2157600080fd5b5050565b6000610b3c60025483610e1a90919063ffffffff16565b9050919050565b60008183019050828110151515610b5657fe5b80905092915050565b610b698282610e52565b5050565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610bd9573d6000803e3d6000fd5b50565b5050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610c8357600080fd5b505af1158015610c97573d6000803e3d6000fd5b505050506040513d6020811015610cad57600080fd5b81019080805190602001909291905050501515610cc957600080fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610d0a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610e0657600080fd5b60008114151515610e1657600080fd5b5050565b600080831415610e2d5760009050610e4c565b8183029050818382811515610e3e57fe5b04141515610e4857fe5b8090505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610f6c57600080fd5b505af1158015610f80573d6000803e3d6000fd5b505050506040513d6020811015610f9657600080fd5b81019080805190602001909291905050505050505600a165627a7a723058206d378b738c4e84e4e20112dd2c0201fd1327197c46ca5c998a641069a2187d7c0029",
  "deployedBytecode": "0x6080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317ffc320146100e65780632c4e722e1461012957806334fcf43714610154578063355274ea146101815780634042b66f146101ac5780634f935945146101d7578063521eb27314610206578063715018a61461025d5780638da5cb5b14610274578063bf583903146102cb578063bff99c6c146102f6578063c0ee0b8a1461034d578063ec8ac4d8146103b2578063f2fde38b146103e8578063fc0c546a1461042b575b6100e433610482565b005b3480156100f257600080fd5b50610127600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610550565b005b34801561013557600080fd5b5061013e6106d7565b6040518082815260200191505060405180910390f35b34801561016057600080fd5b5061017f600480360381019080803590602001909291905050506106dd565b005b34801561018d57600080fd5b5061019661077a565b6040518082815260200191505060405180910390f35b3480156101b857600080fd5b506101c1610780565b6040518082815260200191505060405180910390f35b3480156101e357600080fd5b506101ec610786565b604051808215151515815260200191505060405180910390f35b34801561021257600080fd5b5061021b610795565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026957600080fd5b506102726107bb565b005b34801561028057600080fd5b506102896108c0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102d757600080fd5b506102e06108e6565b6040518082815260200191505060405180910390f35b34801561030257600080fd5b5061030b610a3a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561035957600080fd5b506103b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001919091929391929390505050610a60565b005b6103e6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610482565b005b3480156103f457600080fd5b50610429600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a65565b005b34801561043757600080fd5b50610440610acd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000803491506104928383610af2565b61049b82610b25565b90506104b282600354610b4390919063ffffffff16565b6003819055506104c28382610b5f565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f623b3804fa71d67900d064613da8f94b9617215ee90799290593e1745087ad188484604051808381526020018281526020019250505060405180910390a36105398383610b6d565b610541610b71565b61054b8383610bdc565b505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ae57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561064957600080fd5b505af115801561065d573d6000803e3d6000fd5b505050506040513d602081101561067357600080fd5b810190808051906020019092919050505090506106d3600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff16610be09092919063ffffffff16565b5050565b60025481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561073957600080fd5b806002819055507f0b6eb270e68ec2b65cffce354325dcd6cb2449e0e8fec1184cd58da0c7b0344b816040518082815260200191505060405180910390a150565b60045481565b60035481565b60006004546003541015905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561081757600080fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b1580156109fa57600080fd5b505af1158015610a0e573d6000803e3d6000fd5b505050506040513d6020811015610a2457600080fd5b8101908080519060200190929190505050905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ac157600080fd5b610aca81610cce565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610afc8282610dca565b600454610b1482600354610b4390919063ffffffff16565b11151515610b2157600080fd5b5050565b6000610b3c60025483610e1a90919063ffffffff16565b9050919050565b60008183019050828110151515610b5657fe5b80905092915050565b610b698282610e52565b5050565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610bd9573d6000803e3d6000fd5b50565b5050565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610c8357600080fd5b505af1158015610c97573d6000803e3d6000fd5b505050506040513d6020811015610cad57600080fd5b81019080805190602001909291905050501515610cc957600080fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610d0a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610e0657600080fd5b60008114151515610e1657600080fd5b5050565b600080831415610e2d5760009050610e4c565b8183029050818382811515610e3e57fe5b04141515610e4857fe5b8090505b92915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610f6c57600080fd5b505af1158015610f80573d6000803e3d6000fd5b505050506040513d6020811015610f9657600080fd5b81019080805190602001909291905050505050505600a165627a7a723058206d378b738c4e84e4e20112dd2c0201fd1327197c46ca5c998a641069a2187d7c0029",
  "sourceMap": "422:827:1:-;;;842:169;8:9:-1;5:2;;;30:1;27;20:12;5:2;842:169:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;997:7;972:4;932:5;939:7;948:6;1952:1:2;1944:5;:9;1936:18;;;;;;;;1987:1;1968:21;;:7;:21;;;;1960:30;;;;;;;;2022:1;2004:20;;:6;:20;;;;1996:29;;;;;;;;2039:5;2032:4;:12;;;;2059:7;2050:6;;:16;;;;;;;;;;;;;;;;;;2080:6;2072:5;;:14;;;;;;;;;;;;;;;;;;1865:226;;;472:1:4;465:4;:8;457:17;;;;;;;;486:4;480:3;:10;;;;418:77;624:1:3;600:26;;:12;:26;;;;592:35;;;;;;;;647:12;633:11;;:26;;;;;;;;;;;;;;;;;;545:119;575:10:9;567:5;;:18;;;;;;;;;;;;;;;;;;842:169:1;;;;422:827;;;;;;",
  "deployedSourceMap": "422:827:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:21:2;2331:10;2321:9;:21::i;:::-;422:827:1;598:149:7;;8:9:-1;5:2;;;30:1;27;20:12;5:2;598:149:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;1234:19:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1234:19:2;;;;;;;;;;;;;;;;;;;;;;;1143:102:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1143:102:1;;;;;;;;;;;;;;;;;;;;;;;;;;252:18:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;252:18:4;;;;;;;;;;;;;;;;;;;;;;;1284:24:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1284:24:2;;;;;;;;;;;;;;;;;;;;;;;603:83:4;;8:9:-1;5:2;;;30:1;27;20:12;5:2;603:83:4;;;;;;;;;;;;;;;;;;;;;;;;;;;932:21:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;932:21:2;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:9;;;;;;238:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:9;;;;;;;;;;;;;;;;;;;;;;;;;;;793:109:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;793:109:3;;;;;;;;;;;;;;;;;;;;;;;352:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;352:26:3;;;;;;;;;;;;;;;;;;;;;;;;;;;637:129:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;637:129:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2483:577:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;1100:103:9;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;870:18:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;870:18:2;;;;;;;;;;;;;;;;;;;;;;;;;;;2483:577;2546:17;2677:14;2566:9;2546:29;;2581:45;2602:12;2616:9;2581:20;:45::i;:::-;2694:26;2710:9;2694:15;:26::i;:::-;2677:43;;2759:24;2773:9;2759;;:13;;:24;;;;:::i;:::-;2747:9;:36;;;;2790:38;2807:12;2821:6;2790:16;:38::i;:::-;2878:12;2839:88;;2860:10;2839:88;;;2898:9;2915:6;2839:88;;;;;;;;;;;;;;;;;;;;;;;;2934:47;2957:12;2971:9;2934:22;:47::i;:::-;2988:15;:13;:15::i;:::-;3009:46;3031:12;3045:9;3009:21;:46::i;:::-;2483:577;;;:::o;598:149:7:-;663:15;719:5:9;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;681:5:7;:15;;;697:4;681:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;681:21:7;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;681:21:7;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;681:21:7;;;;;;;;;;;;;;;;663:39;;708:34;727:5;;;;;;;;;;;734:7;708:5;:18;;;;:34;;;;;:::i;:::-;598:149;;:::o;1234:19:2:-;;;;:::o;1143:102:1:-;719:5:9;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1207:5:1;1200:4;:12;;;;1223:17;1234:5;1223:17;;;;;;;;;;;;;;;;;;1143:102;:::o;252:18:4:-;;;;:::o;1284:24:2:-;;;;:::o;603:83:4:-;646:4;678:3;;665:9;;:16;;658:23;;603:83;:::o;932:21:2:-;;;;;;;;;;;;;:::o;827:111:9:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;238:20::-;;;;;;;;;;;;;:::o;793:109:3:-;841:7;863:5;;;;;;;;;;;:15;;;879:11;;;;;;;;;;;892:4;863:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;863:34:3;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;863:34:3;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;863:34:3;;;;;;;;;;;;;;;;856:41;;793:109;:::o;352:26::-;;;;;;;;;;;;;:::o;637:129:8:-;753:8;;;1100:103:9;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;870:18:2:-;;;;;;;;;;;;;:::o;872:209:4:-;977:52;1004:12;1018:10;977:26;:52::i;:::-;1072:3;;1043:25;1057:10;1043:9;;:13;;:25;;;;:::i;:::-;:32;;1035:41;;;;;;;;872:209;;:::o;5497:121:2:-;5569:7;5593:20;5608:4;;5593:10;:14;;:20;;;;:::i;:::-;5586:27;;5497:121;;;:::o;1214:123:6:-;1272:9;1297:1;1293;:5;1289:9;;1316:1;1311;:6;;1304:14;;;;;;1331:1;1324:8;;1214:123;;;;:::o;4725:150:2:-;4828:42;4843:12;4857;4828:14;:42::i;:::-;4725:150;;:::o;5128:131::-;;;:::o;5697:71::-;5737:6;;;;;;;;;;;:15;;:26;5753:9;5737:26;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5737:26:2;5697:71::o;3937:130::-;;;:::o;368:121:14:-;458:5;:14;;;473:2;477:5;458:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;458:25:14;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;458:25:14;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;458:25:14;;;;;;;;;;;;;;;;450:34;;;;;;;;368:121;;;:::o;1338:171:9:-;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o;3484:175:2:-;3621:1;3597:26;;:12;:26;;;;3589:35;;;;;;;;3652:1;3638:10;:15;;3630:24;;;;;;;;3484:175;;:::o;203:373:6:-;261:9;492:1;487;:6;483:35;;;510:1;503:8;;;;483:35;532:1;528;:5;524:9;;555:1;550;546;:5;;;;;;;;:10;539:18;;;;;;570:1;563:8;;203:373;;;;;:::o;1083:165:3:-;1184:5;;;;;;;;;;;:18;;;1203:11;;;;;;;;;;;1216:12;1230;1184:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1184:59:3;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1184:59:3;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1184:59:3;;;;;;;;;;;;;;;;;1083:165;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport 'openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol';\nimport 'openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol';\nimport \"openzeppelin-solidity/contracts/ownership/HasNoTokens.sol\";\n\n/**\n* @title Cubik crowdsale contract\n* @author Richard Fu (richardf@block42.world)\n* @dev Complant with OpenZeppelin's imlementation of the crowdsale spec.\n*/\ncontract CubikCrowdsale is CappedCrowdsale, AllowanceCrowdsale, HasNoTokens {\n\n  event RateChange(uint256 amount);\n\n  /** \n   * @dev The Cubik crowdsale constructor sets rate, CUBIK owner wallet, CUBIK contract and cap.\n   * @param _rate Coverting rate, x CUBIK per ETH\n   * @param _wallet CUBIK owner wallet address\n   * @param _token CUBIK contract address\n   * @param _cap Max amount of wei to be contributed\n   */\n  constructor (uint256 _rate, address _wallet, ERC20 _token, uint256 _cap) public Crowdsale(_rate, _wallet, _token) CappedCrowdsale(_cap) AllowanceCrowdsale(_wallet) {\n  }\n  \n  /** \n   * @dev Set the converting rate of the crowdsale, owner only\n   * @param _rate Coverting rate, ? CUBIK per ETH\n   */\n  function setRate(uint256 _rate) external onlyOwner {\n    rate = _rate;\n    emit RateChange(_rate);\n  }\n\t\n}",
  "sourcePath": "/Users/fur/Projects/Block42/cubik-contracts/contracts/CubikCrowdsale.sol",
  "ast": {
    "absolutePath": "/Users/fur/Projects/Block42/cubik-contracts/contracts/CubikCrowdsale.sol",
    "exportedSymbols": {
      "CubikCrowdsale": [
        105
      ]
    },
    "id": 106,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 52,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol",
        "file": "openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol",
        "id": 53,
        "nodeType": "ImportDirective",
        "scope": 106,
        "sourceUnit": 389,
        "src": "26:83:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol",
        "file": "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol",
        "id": 54,
        "nodeType": "ImportDirective",
        "scope": 106,
        "sourceUnit": 451,
        "src": "110:82:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "file": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "id": 55,
        "nodeType": "ImportDirective",
        "scope": 106,
        "sourceUnit": 663,
        "src": "193:67:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 56,
              "name": "CappedCrowdsale",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 450,
              "src": "449:15:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CappedCrowdsale_$450",
                "typeString": "contract CappedCrowdsale"
              }
            },
            "id": 57,
            "nodeType": "InheritanceSpecifier",
            "src": "449:15:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 58,
              "name": "AllowanceCrowdsale",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 388,
              "src": "466:18:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AllowanceCrowdsale_$388",
                "typeString": "contract AllowanceCrowdsale"
              }
            },
            "id": 59,
            "nodeType": "InheritanceSpecifier",
            "src": "466:18:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 60,
              "name": "HasNoTokens",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 662,
              "src": "486:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_HasNoTokens_$662",
                "typeString": "contract HasNoTokens"
              }
            },
            "id": 61,
            "nodeType": "InheritanceSpecifier",
            "src": "486:11:1"
          }
        ],
        "contractDependencies": [
          329,
          388,
          450,
          637,
          662,
          748
        ],
        "contractKind": "contract",
        "documentation": "@title Cubik crowdsale contract\n@author Richard Fu (richardf@block42.world)\n@dev Complant with OpenZeppelin's imlementation of the crowdsale spec.",
        "fullyImplemented": true,
        "id": 105,
        "linearizedBaseContracts": [
          105,
          662,
          637,
          748,
          388,
          450,
          329
        ],
        "name": "CubikCrowdsale",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 65,
            "name": "RateChange",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "520:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "520:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "519:16:1"
            },
            "src": "503:33:1"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "1006:5:1",
              "statements": []
            },
            "documentation": "@dev The Cubik crowdsale constructor sets rate, CUBIK owner wallet, CUBIK contract and cap.\n@param _rate Coverting rate, x CUBIK per ETH\n@param _wallet CUBIK owner wallet address\n@param _token CUBIK contract address\n@param _cap Max amount of wei to be contributed",
            "id": 88,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 76,
                    "name": "_rate",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67,
                    "src": "932:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 77,
                    "name": "_wallet",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 69,
                    "src": "939:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 78,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 71,
                    "src": "948:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$887",
                      "typeString": "contract ERC20"
                    }
                  }
                ],
                "id": 79,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 75,
                  "name": "Crowdsale",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 329,
                  "src": "922:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_Crowdsale_$329_$",
                    "typeString": "type(contract Crowdsale)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "922:33:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 81,
                    "name": "_cap",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 73,
                    "src": "972:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 82,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 80,
                  "name": "CappedCrowdsale",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 450,
                  "src": "956:15:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_CappedCrowdsale_$450_$",
                    "typeString": "type(contract CappedCrowdsale)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "956:21:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 84,
                    "name": "_wallet",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 69,
                    "src": "997:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 85,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 83,
                  "name": "AllowanceCrowdsale",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 388,
                  "src": "978:18:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_AllowanceCrowdsale_$388_$",
                    "typeString": "type(contract AllowanceCrowdsale)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "978:27:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "name": "_rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "855:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 69,
                  "name": "_wallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "870:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "887:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$887",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 70,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 887,
                    "src": "887:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$887",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "name": "_cap",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "901:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "901:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "854:60:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 86,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1006:0:1"
            },
            "scope": 105,
            "src": "842:169:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 103,
              "nodeType": "Block",
              "src": "1194:51:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 95,
                      "name": "rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 118,
                      "src": "1200:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 96,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "1207:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1200:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "1200:12:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "_rate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "1234:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 99,
                      "name": "RateChange",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65,
                      "src": "1223:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1223:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 102,
                  "nodeType": "EmitStatement",
                  "src": "1218:22:1"
                }
              ]
            },
            "documentation": "@dev Set the converting rate of the crowdsale, owner only\n@param _rate Coverting rate, ? CUBIK per ETH",
            "id": 104,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 93,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 92,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 696,
                  "src": "1184:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1184:9:1"
              }
            ],
            "name": "setRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "name": "_rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "1160:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1160:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1159:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1194:0:1"
            },
            "scope": 105,
            "src": "1143:102:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 106,
        "src": "422:827:1"
      }
    ],
    "src": "0:1249:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/fur/Projects/Block42/cubik-contracts/contracts/CubikCrowdsale.sol",
    "exportedSymbols": {
      "CubikCrowdsale": [
        105
      ]
    },
    "id": 106,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 52,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol",
        "file": "openzeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol",
        "id": 53,
        "nodeType": "ImportDirective",
        "scope": 106,
        "sourceUnit": 389,
        "src": "26:83:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol",
        "file": "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol",
        "id": 54,
        "nodeType": "ImportDirective",
        "scope": 106,
        "sourceUnit": 451,
        "src": "110:82:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "file": "openzeppelin-solidity/contracts/ownership/HasNoTokens.sol",
        "id": 55,
        "nodeType": "ImportDirective",
        "scope": 106,
        "sourceUnit": 663,
        "src": "193:67:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 56,
              "name": "CappedCrowdsale",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 450,
              "src": "449:15:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_CappedCrowdsale_$450",
                "typeString": "contract CappedCrowdsale"
              }
            },
            "id": 57,
            "nodeType": "InheritanceSpecifier",
            "src": "449:15:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 58,
              "name": "AllowanceCrowdsale",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 388,
              "src": "466:18:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AllowanceCrowdsale_$388",
                "typeString": "contract AllowanceCrowdsale"
              }
            },
            "id": 59,
            "nodeType": "InheritanceSpecifier",
            "src": "466:18:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 60,
              "name": "HasNoTokens",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 662,
              "src": "486:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_HasNoTokens_$662",
                "typeString": "contract HasNoTokens"
              }
            },
            "id": 61,
            "nodeType": "InheritanceSpecifier",
            "src": "486:11:1"
          }
        ],
        "contractDependencies": [
          329,
          388,
          450,
          637,
          662,
          748
        ],
        "contractKind": "contract",
        "documentation": "@title Cubik crowdsale contract\n@author Richard Fu (richardf@block42.world)\n@dev Complant with OpenZeppelin's imlementation of the crowdsale spec.",
        "fullyImplemented": true,
        "id": 105,
        "linearizedBaseContracts": [
          105,
          662,
          637,
          748,
          388,
          450,
          329
        ],
        "name": "CubikCrowdsale",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 65,
            "name": "RateChange",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 65,
                  "src": "520:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "520:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "519:16:1"
            },
            "src": "503:33:1"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "1006:5:1",
              "statements": []
            },
            "documentation": "@dev The Cubik crowdsale constructor sets rate, CUBIK owner wallet, CUBIK contract and cap.\n@param _rate Coverting rate, x CUBIK per ETH\n@param _wallet CUBIK owner wallet address\n@param _token CUBIK contract address\n@param _cap Max amount of wei to be contributed",
            "id": 88,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 76,
                    "name": "_rate",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 67,
                    "src": "932:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 77,
                    "name": "_wallet",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 69,
                    "src": "939:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 78,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 71,
                    "src": "948:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$887",
                      "typeString": "contract ERC20"
                    }
                  }
                ],
                "id": 79,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 75,
                  "name": "Crowdsale",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 329,
                  "src": "922:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_Crowdsale_$329_$",
                    "typeString": "type(contract Crowdsale)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "922:33:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 81,
                    "name": "_cap",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 73,
                    "src": "972:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 82,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 80,
                  "name": "CappedCrowdsale",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 450,
                  "src": "956:15:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_CappedCrowdsale_$450_$",
                    "typeString": "type(contract CappedCrowdsale)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "956:21:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 84,
                    "name": "_wallet",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 69,
                    "src": "997:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 85,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 83,
                  "name": "AllowanceCrowdsale",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 388,
                  "src": "978:18:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_AllowanceCrowdsale_$388_$",
                    "typeString": "type(contract AllowanceCrowdsale)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "978:27:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "name": "_rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "855:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 69,
                  "name": "_wallet",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "870:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 68,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 71,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "887:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$887",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 70,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 887,
                    "src": "887:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$887",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "name": "_cap",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "901:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "901:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "854:60:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 86,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1006:0:1"
            },
            "scope": 105,
            "src": "842:169:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 103,
              "nodeType": "Block",
              "src": "1194:51:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 97,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 95,
                      "name": "rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 118,
                      "src": "1200:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 96,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "1207:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1200:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 98,
                  "nodeType": "ExpressionStatement",
                  "src": "1200:12:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 100,
                        "name": "_rate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "1234:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 99,
                      "name": "RateChange",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65,
                      "src": "1223:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1223:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 102,
                  "nodeType": "EmitStatement",
                  "src": "1218:22:1"
                }
              ]
            },
            "documentation": "@dev Set the converting rate of the crowdsale, owner only\n@param _rate Coverting rate, ? CUBIK per ETH",
            "id": 104,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 93,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 92,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 696,
                  "src": "1184:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1184:9:1"
              }
            ],
            "name": "setRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "name": "_rate",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "1160:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1160:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1159:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1194:0:1"
            },
            "scope": 105,
            "src": "1143:102:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 106,
        "src": "422:827:1"
      }
    ],
    "src": "0:1249:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4447": {
      "events": {},
      "links": {},
      "address": "0xf25186b5081ff5ce73482ad761db0eb0d25abfbf",
      "transactionHash": "0x4f958890f9ca6a481f11c7fc79eafabea13db89554aa3f6f2d57c46dabd5d396"
    },
    "1531356036227": {
      "events": {},
      "links": {},
      "address": "0xbb5bc03c7600d5e886ad4f6914f810eb324b4640",
      "transactionHash": "0xe2e52c42e8566b46fc69463f1c2e334f28761706f26be39c523f4349becc6727"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-07-18T08:11:44.593Z"
}
},{}],3:[function(require,module,exports){
var json = require('./js/Cubik.json')
var tokenAbi = json.abi
json = require('./js/CubikCrowdsale.json')
var crowdsaleAbi = json.abi

var tokenContractAddress = '0x9a62d3825e07342568a34aa31aad38bb04250806'
var crowdsaleContractAddress = '0xea9Be48045942fFB578e1E295e5401e86CBA8e8c'
var tokenContractAddressRopsten = '0xb4fddd37602b03fa086c42bfa7b9739be38682c3' // For testing in Ropsten testnet only
var crowdsaleContractAddressRopsten = '0x382b3d898ccfa4ae5cb7375491bb771107e21b61' // For testing in Ropsten testnet only

var netId
var web3js
var userAccount = false

var CubikToken
var CubikCrowdsale

// Checking if Web3 has been injected by the browser (Mist/MetaMask)
window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider)
    // Debug only: override web3js instead of using Mist/MetaMask
    // web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); // Local-node, use Geth or testrpc to start one
    // web3js = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth')); // Mainnet node
    // web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/93Pkd62SaFUrBJZC646A')); // Mainnet node 2
    // web3js = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/93Pkd62SaFUrBJZC646A")); // Ropsten testnet node
    startApp()
  } else {
    toggleMetaMaskPrompt(true)
  }
})

$('#buy-amount').change(function () {
  var totalEth = (this.value * 0.0002).toFixed(4)
  totalEth = parseFloat(totalEth)
  $('#total-eth').show().text(totalEth + ' ETH')
})

$('#buy-amount').keyup(function () {
  var totalEth = (this.value * 0.0002).toFixed(4)
  totalEth = parseFloat(totalEth)
  $('#total-eth').show().text(totalEth + ' ETH')
})

$('#buy-button').click(function (event) {
  event.preventDefault()
  $('#transaction-status').show().text('Transaction submitted, please confirm in MetaMask.')
  var eth = parseInt($('#buy-amount').val()) / 5000
  web3js.eth.sendTransaction({
    from: userAccount,
    value: web3js.utils.toWei(eth.toFixed(4), 'ether'),
    to: crowdsaleContractAddress
  })
    .once('transactionHash', function (hash) {
      $('#transaction-status').html('Your contribution is being processed... <br />Transaction Hash: ' + getTransactionUrl(hash))
    })
    .once('receipt', function (receipt) {
      //        console.log(receipt);
      $('#transaction-status').html('Congrates! Your contribution has been processed and you received new CUBIKs!')
    })
  //    .on('confirmation', function(confNumber, receipt){ console.log("confirmation"); console.log(confNumber); console.log(receipt); })
    .on('error', function (error) {
      $('#transaction-status').html('There was an error processing your contribution.<br />' + String(error))
    })
})

function startApp () {
  // Check if in mainnet or testnets
  web3js.eth.net.getId().then(function (networkId) {
    netId = networkId
    if (netId === 3) {
      tokenContractAddress = tokenContractAddressRopsten
      crowdsaleContractAddress = crowdsaleContractAddressRopsten
      $('#testnet-warning').show().html('This is a Ropsten <b>Testnet</b> Transaction Only. Change to mainnet for valid contribution.')
    } else if (netId !== 1) {
      $('#testnet-warning').show().html("You're not connected! Open MetaMask and make sure you are on the Main Ethereum Network.")
    }
    $('#token-address').html(getTokenUrl(tokenContractAddress))
    $('#crowdsale-address').html(getContractUrl(crowdsaleContractAddress))

    // Get hold of contract instance
    CubikToken = new web3js.eth.Contract(tokenAbi, tokenContractAddress)
    CubikCrowdsale = new web3js.eth.Contract(crowdsaleAbi, crowdsaleContractAddress)

    // Update account detail every 3 seconds
    setInterval(checkAccountDetail, 3000)

    $('#test').click(function () {
      CubikToken.methods.approve('0x382b3d898ccfa4ae5cb7375491bb771107e21b61', 1).send({from: userAccount}).then(function (res) {
        console.log(res)
      })
    })
  })
}

function checkAccountDetail () {
  // Get default account
  web3js.eth.getAccounts().then(function (accounts) {
    // Just keep updating, so the user's balance is updated after purchase
    userAccount = accounts[0]
    updateAccountDetail()
  })
}

function updateAccountDetail () {
  if (userAccount === undefined) {
    toggleMetaMaskPrompt(true)
  } else {
    toggleMetaMaskPrompt(false)
    getAccountDetail()
  }
}

function getAccountDetail () {
  // Address
  $('#address').text(userAccount)
  // Account balance in Ether
  web3js.eth.getBalance(userAccount).then(function (res) {
    var balance = web3js.utils.fromWei(res, 'ether')
    $('#eth-amount').text(balance)
  })
  // Token balance
  CubikToken.methods.balanceOf(userAccount).call().then(function (res) {
    $('#token-amount').text(web3js.utils.fromWei(res, 'ether'))
  })
}

function toggleMetaMaskPrompt (toggle) {
  $('#no-metamask').toggle(toggle)
  $('#account-detail').toggle(!toggle)
  $('#buy-button').prop('disabled', toggle)
}

function getTransactionUrl (address) {
  return getEtherScanUrl('tx', address)
}

function getTokenUrl (address) {
  return getEtherScanUrl('token', address)
}

function getContractUrl (address) {
  return getEtherScanUrl('address', address)
}

function getEtherScanUrl (type, address) {
  var url = netId === 3 ? 'ropsten.etherscan.io' : 'etherscan.io'
  return "<a href='https://" + url + '/' + type + '/' + address + "' target='_blank'>" + address + '</a>'
}

},{"./js/Cubik.json":1,"./js/CubikCrowdsale.json":2}]},{},[3]);
