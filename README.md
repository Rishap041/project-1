# Supply Chain Smart Contracts

This project implements smart contracts that simulate a product supply chain.


## Launch local server and deploy on a local blockchain

In order to launch the local server that will allow you to test the smart contract with the UI do this:
1. Go to the root of the project and do a `yarn install` or `npm install`
2. Do a `cd client`
3. Do a `yarn install` or `npm install`
4. Do a `yarn start` or `npm run start`

A local server will start on `localhost:3000`.


In order to use the app you'll have to have Metamask install.

You can either connect to the Rinkeby testnetwork, however you won't be able to use the app since you are not admin, except if you deploy it again with you account.

Or you can launch a local blockchain doing `npm run chain` from the root of the project, and then launching the local server as describded above. If you choose this option you'll have to set a custom RPC connection on metamask on `http://localhost:7545`
