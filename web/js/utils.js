 async function init_web3() {
    //Web3 init
    /*
    if (typeof web3 != 'undefined') {
        web3 = new Web3(web3.currentProvider) // what Metamask injected
    } else {
        // Instantiate and set Ganache as your provider
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
      */
  var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    //Load accounts
    window.accounts = ["0xa7f85da8b0a3477cdc586b31db07102d03fb879e"];
    console.log("Loaded accounts");

    // The interface definition for your smart contract (the ABI)
    window.pm = new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "oid",
				"type": "string"
			},
			{
				"name": "fname",
				"type": "string"
			},
			{
				"name": "fdetails",
				"type": "string"
			},
			{
				"name": "todept",
				"type": "string"
			},
			{
				"name": "touser",
				"type": "string"
			}
		],
		"name": "createFile",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "uniqueid",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "usrdept",
				"type": "string"
			},
			{
				"name": "usrtype",
				"type": "string"
			}
		],
		"name": "createParticipant",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "user1_id",
				"type": "uint256"
			},
			{
				"name": "user2_id",
				"type": "uint256"
			},
			{
				"name": "file_id",
				"type": "uint256"
			}
		],
		"name": "transferOwnership_file",
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
		"name": "_f_id",
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
		"constant": true,
		"inputs": [],
		"name": "_t_id",
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
		"constant": true,
		"inputs": [],
		"name": "_u_id",
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "files",
		"outputs": [
			{
				"name": "_fileOwnerID",
				"type": "string"
			},
			{
				"name": "_fileName",
				"type": "string"
			},
			{
				"name": "_fileDetails",
				"type": "string"
			},
			{
				"name": "_toDept",
				"type": "string"
			},
			{
				"name": "_toUser",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "t_id",
				"type": "uint256"
			}
		],
		"name": "getFile_trackindex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
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
		"constant": true,
		"inputs": [
			{
				"name": "f_id",
				"type": "uint256"
			}
		],
		"name": "getFile_tracking_ids",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFileId",
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
		"name": "getParticipantId",
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
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"name": "_uniqueID",
				"type": "string"
			},
			{
				"name": "_userName",
				"type": "string"
			},
			{
				"name": "_passWord",
				"type": "string"
			},
			{
				"name": "_userDept",
				"type": "string"
			},
			{
				"name": "_userType",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tracks",
		"outputs": [
			{
				"name": "_previous_owner_id",
				"type": "uint256"
			},
			{
				"name": "_previous_owner_type",
				"type": "string"
			},
			{
				"name": "_file_id",
				"type": "uint256"
			},
			{
				"name": "_owner_id",
				"type": "uint256"
			},
			{
				"name": "_owner_type",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "uid",
				"type": "uint256"
			},
			{
				"name": "uname",
				"type": "string"
			},
			{
				"name": "pass",
				"type": "string"
			},
			{
				"name": "uniqueid",
				"type": "string"
			}
		],
		"name": "userLogin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
])

	 window.pm.options.address = '0x480482cb3c5dd359349e570f54401f4618a0b4ee'

}
export {
  init_web3
}
