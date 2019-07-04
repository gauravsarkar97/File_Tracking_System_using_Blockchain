# File_Tracking_System_using_Blockchain

**What is it?**<br />
It is a tracking and tracing system of files where all the data is stored on the Blockchain, thus eliminating traditional database. Since, all information is stored on the blockchain, no one can ever deny nor falsify data.



**Why use it?**<br />
It is often seen in big organizations or institutes that files or applications are lost in huge piles of paperwork and not processed due to negligence, not to mention the rare cases when people often deny ever having received any file. This tracking system enables users to receive files and track their progress. All data is stored on the blockchain, so that no one can ever deny having received the file at any point of time.


**For example**: The way to obtain a leave application in a college is to write an application to the Department Coordinator who signs and forwards it to the Head of Department(HOD) who forwards it to the Dean who finally approves the leave.<br />
Using this file tracking system, a student will first write the application and register the file on the system and stick the generated QR code on the application. The coordinator while receiving will enter the details and receive it. The student who wishes to track the file at any time will be able to do it by entering his file ID, which will return a single/series of track IDs. These Track IDs will correspond to the sending and receiving of the file between two users. The entire information will be on the blockchain and will be accessible to the registered users. The task is achieved using a Smart Contract, that has been deployed on the blockchain.

<br />
<br />
**FUNCTIONALITIES:**
<br />
**1. Register User**: Users need to register with their details, if they want to use the File Tracking System. There are 3 types of users of this system.  
A new user has to enter the following details:<br />
Name<br />
Password<br />
Department<br />
Unique ID (Roll Number for Students/ Employee ID for Staff/faculty)<br />
User Type(Student/ Staff/ Faculty.)<br />

On clicking Register User button, all the above data is stored in the blockchain and a secret key is generated along with a QR Code which has the same KEY encoded in it. This is unique for any given user.

**2. Login**: Users will need to enter their Name, Secret Key(that was generated), Password and their Roll no./Employee id. This data will be checked against the stored data and upon successful login will redirect to the Register File Page.

**3. Register File**: The user needs to register the file. This will ensure that the file details are stored in the blockchain along with the owner(owner of the file) details. User has to enter the following details:

Owner ID<br />
File name<br />
File Specifications<br />
Recipient Department<br />
Recipient Name<br />

On clicking Register File button, all the above data is stored in the blockchain and a file id is generated along with a QR Code which has the same ID encoded in it. This is unique for every file that is registered.

**4. Receive File**: Here a user can receive a file. The recipient will enter the owner’s (person who brings the file) ID, his own ID and the file ID and click on RECEIVE button. It shows a message on successful “Transfer of Ownership”. The details are stored in the blockchain and the current owner of the file is the person who has just received the file. This process can go on and on and the current owner keeps on changing accordingly.

**5. Track File:** Here the user will have to enter the file ID (by scanning the QR code) and click on Get Track ID button. This will return a series of track ids, which is basically an array. Each id corresponds to the transfer of file between 2 users.
<br />
<br />
**HOW TO RUN THIS PROJECT?**

Step 1: Setup your own private blockchain. Here we are using Ethereum blockchain. It is open-source and widely used for research and development purposes.
Ethereum is an open source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions. Ether is a token whose blockchain is generated by the Ethereum platform.
Now a private blockchain can be setup using Geth or Ganache.


FOR GETH:
Geth is an implementation of an Ethereum node in the Go programming language. In simpler terms, Geth is a program which serves as a node for the Ethereum blockchain, and via which a user can mine Ether and create software which runs on the EVM – the Ethereum Virtual Machine.

To setup a private blockchain, the steps on this website can be followed:<br />
https://medium.com/coinmonks/ethereum-setting-up-a-private-blockchain-67bbb96cf4f1

OR FOLLOW THESE STEPS:

1.Create a file called genesis.json and paste the following code into it. This will be the first block of the blockchain(called the genesis block)

{<br />
    "config": { <br />
        "chainId": 987,       
        "homesteadBlock": 0,     
        "eip155Block": 0,    
        "eip158Block": 0    
    },<br />
    "difficulty": "0x400",<br />
    "gasLimit": "0x8000000",<br />
    "alloc": {}<br />
}


2. Create data directory on system & run init command:<br />
geth --datadir .\ethereum init genesis.json


3. Run command to create Blockchain<br />
geth --identity "localBlockChain" --rpc --rpcport "8545" --rpccorsdomain "*" --rpcapi "db,eth,net,web3" --datadir .\ethereum --port "30303" --nodiscover --networkid 1999 --rpcaddr 10.25.5.148 console


4. Few Commands to run and check<br />
personal.newAccount()            // to setup new account<br />
eth.getBalance(“address”)  //to get the balance of the account. Put account address in “ ”<br />
personal.unlockAccount(“address”)   //to unlock the account<br />
miner.start()                      //to start mining<br />
miner.stop()                      //to stop mining<br />


FOR GANACHE:

Ganache is a personal blockchain for Ethereum development you can use to deploy contracts, develop your applications, and run tests.
It is available as both a desktop application as well as a command-line tool (formerly known as the TestRPC). Ganache is available for Windows, Mac, and Linux.<br />
Simply go to this site: https://www.trufflesuite.com/ganache and download ganache for your system(windows/linux 
(P.S. I have used windows system here and all instructions are for Windows)<br />
Ganache gives us 10 accounts each having 100 ethers. So, we do not need to mine ethers like we have to do in case of Geth. To setup, simply open terminal and type: <br />
**ganache-cli**

For more information on ganache you can refer to:<br />
https://www.trufflesuite.com/docs/ganache/quickstart


Step 2: Now that we have our very own private blockchain, we need a development environment for our project. For that I have used Truffle.
But there are some requirements for Truffle. It needs nodejs and npm to be installed first.<br /> To install go to: https://www.npmjs.com/get-npm
All information related to what is npm and why we need it is given there. 

Step 3: Now we need to install Truffle.It is a world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier. With Truffle, you get:<br />
Built-in smart contract compilation, linking, deployment and binary management.<br />
Automated contract testing for rapid development.<br />
Scriptable, extensible deployment & migrations framework.<br />
Network management for deploying to any number of public & private networks.<br />
Package management with EthPM & NPM, using the ERC190 standard.<br />
Interactive console for direct contract communication.<br />
Configurable build pipeline with support for tight integration.<br />
External script runner that executes scripts within a Truffle environment.<br />
To install truffle: <br />
https://www.trufflesuite.com/docs/truffle/getting-started/installation

For running this project, install npm and then truffle inside the project directory. There are instructions if you want to create your very own project using Truffle. For running this project, copy the project folder and inside the directory open terminal and run the command:  **npm init**

The difference between Truffle and Ganache: <br />
https://ethereum.stackexchange.com/questions/58093/difference-between-ganache-and-truffle

You should see some more folders like: web, contracts. My smart contract file (Try.sol) is inside the contracts folder.

Step 4: Install http-server globally by running the command <br />
npm install http-server -g<br />
http-server is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.
For more information on http-server: <br />
https://www.npmjs.com/package/http-server

Step 5: Open Remix IDE. https://remix.ethereum.org/<br />
Copy the smart contract code and paste it into the IDE. Make sure the compiler version matches with the one written in the code. Click on “Run” and in Environment choose Web3 Provider from the dropdown list. If the above steps have been followed correctly and the private blockchain is running, there should be a promt asking if the user wants to connect to a remote node and a follow-up pop-up asking for the IP address. By default it will be localhost and port number 8545. Change it according to the parameters you pass while creating the blockchain using Geth. If you have used ganache then no need to change. You will immediately see that it has connected and the account is showing with the account balance.

Next Deploy the smart contract through the remix IDE. You will see the deployed contract address. Copy the contract address and paste it at the bottom of the utils.js file. Similarly copy the account address (which has ether balance) in the utils.js file and register.js file. This must be done each time a new blockchain is setup as the deployed contract address and account address will vary. Next on the remix IDE, go to compile section and copy the contract ABI and paste it in the utils.js file, removing the old one. This must be done only if any changes has been made in the smart contract, otherwise it’s not required.

Step 6: Open the project directory. Migrate to the web folder. It contains all the html pages. Inside the js folder are the JavaScript files that are used to handle the data in the backend. That is actually the code that communicates with the smart contract. Inside the web folder, open the terminal and run the command:<br />
**http-server**

Then it will give some addresses(2-3) depending on your ip address, one of which will be of the localhost.

Copy and paste any of the addresses in any browser and append /index.html and press enter.<br />
For exemple: http://127.0.0.1:8080/index.html<br />

If all steps have been followed properly, then you should see the file tracking system and you will be able to interact with it properly.


**SMART CONTRACT:**
A smart contract is a computer code running on top of a blockchain containing a set of rules under which the parties to that smart contract agree to interact with each other. If and when the predefined rules are met, the agreement is automatically enforced. The smart contract code facilitates, verifies, and enforces the negotiation or performance of an agreement or transaction. It is the simplest form of decentralized automation.

For more information:<br />
https://blockchainhub.net/smart-contracts/<br />
https://solidity.readthedocs.io/en/v0.5.3/introduction-to-smart-contracts.html<br />

For this project the smart contract has been written is Solidity, which is a JavaScript based language. 
To know more about solidity: <br />
https://solidity.readthedocs.io/en/v0.5.3/solidity-by-example.html<br />
In the smart contract there are three structures: participant, file and track_file. <br />

struct participant holds the user’s uniqueID, name, password, department and type of user. 
struct file contains file owner’s ID, file name, file details, recipient’s name & department and an array that contains the trace ids.
struct track_file contains previous owner id and type, file id, owner id and owner type
    
**Functions in the smart contract:** 

**function createParticipant()**: It takes participant details as parameters and returns a user id, which has been encoded into the qrcode as the user’s Secret ID.<br />
**function userLogin()**: It takes secretID, name, password and roll no./emp id and returns true/false based on the details.<br />
**function createFile()**: It takes file details as parameters and returns a file id, which has been encoded into the qrcode as the user’s Secret ID.<br />
**function getFileId()**: It simply returns the file Id that is generated.<br />
**function transferOwnership_file()**: This is the function that is being called when user receives any file. The function is written such that a Student can send a file to any Staff and Faculty. Any Staff can send to any Faculty and any faculty can send to any Faculty. It can easily be modified.<br /> 
**function getFile_tracking_ids()**: It takes file id as parameter and returns an array of track ids. These track IDs are generated each time the ownership of the file is changed.<br />
**function getFile_trackindex()**: This function takes the track id as parameter and returns the details of the previous and current owner.<br />



**REFERENCES**:

For QRcode I have used this open-source library on GitHub:<br />
https://davidshimjs.github.io/qrcodejs/<br />
https://github.com/davidshimjs/qrcodejs<br />

I have also taken help from this project on GitHub on Supply Chain Management:<br />
https://github.com/Raviezz/SupplyChainManagement<br />

And this similar project on FreeCodeCamp:<br />
https://www.freecodecamp.org/news/how-to-build-a-car-manufacturing-supply-chain-system-using-ethereum-cbb87144cde5/<br />
https://github.com/daitan-innovation/ethereum-supply-chain<br />
